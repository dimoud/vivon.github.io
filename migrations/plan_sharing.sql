-- Plan sharing: a user publishes a share code; any signed-in user who enters it
-- can copy the owner's current week (meals only) plus the custom recipes/foods
-- those meals use. Nothing else of the owner is ever returned.
-- Run this once in Supabase SQL Editor.

create table if not exists public.plan_shares (
  code       text primary key check (code ~ '^[A-Z0-9]{8}$'),
  user_id    uuid not null unique references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.plan_shares enable row level security;

drop policy if exists "plan_shares_select_own" on public.plan_shares;
drop policy if exists "plan_shares_insert_own" on public.plan_shares;
drop policy if exists "plan_shares_delete_own" on public.plan_shares;

create policy "plan_shares_select_own" on public.plan_shares
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "plan_shares_insert_own" on public.plan_shares
  for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "plan_shares_delete_own" on public.plan_shares
  for delete to authenticated using ((select auth.uid()) = user_id);

-- Returns { week: [{ meals: [...] } x7], customRecipes: [...], customFoods: [...] }
-- or null when the code is unknown. Meals have their "done" flag stripped.
create or replace function public.get_shared_plan(p_code text)
returns jsonb
language plpgsql
stable
security definer
set search_path = ''
as $$
declare
  v_owner      uuid;
  v_week_raw   jsonb;
  v_week       jsonb;
  v_recipe_ids text[];
  v_recipes    jsonb;
  v_food_ids   text[];
  v_foods      jsonb;
begin
  if (select auth.uid()) is null then
    return null;
  end if;

  select s.user_id into v_owner
  from public.plan_shares s
  where s.code = upper(regexp_replace(coalesce(p_code, ''), '[^A-Za-z0-9]', '', 'g'));
  if v_owner is null then
    return null;
  end if;

  -- The owner's current plan = their most recently saved week
  select w.week_data into v_week_raw
  from public.week_plans w
  where w.user_id = v_owner
  order by w.updated_at desc nulls last
  limit 1;
  if v_week_raw is null or jsonb_typeof(v_week_raw) <> 'array' then
    return null;
  end if;

  -- Keep only each day's meals, without the owner's "done" progress
  select coalesce(jsonb_agg(
           jsonb_build_object('meals', coalesce((
             select jsonb_agg(m - 'done' order by mi)
             from jsonb_array_elements(
               case when jsonb_typeof(d->'meals') = 'array' then d->'meals' else '[]'::jsonb end
             ) with ordinality as x(m, mi)
           ), '[]'::jsonb))
           order by di), '[]'::jsonb)
    into v_week
  from jsonb_array_elements(v_week_raw) with ordinality as y(d, di);

  -- Custom recipes referenced by those meals
  select coalesce(array_agg(distinct m->>'recipeId'), '{}')
    into v_recipe_ids
  from jsonb_array_elements(v_week) d
  cross join lateral jsonb_array_elements(d->'meals') m
  where m->>'recipeId' is not null;

  select coalesce(jsonb_agg(r), '[]'::jsonb)
    into v_recipes
  from public.custom_recipes cr
  cross join lateral jsonb_array_elements(
    case when jsonb_typeof(cr.data) = 'array' then cr.data else '[]'::jsonb end
  ) r
  where cr.user_id = v_owner
    and r->>'id' = any(v_recipe_ids);

  -- Custom foods referenced by those recipes
  select coalesce(array_agg(distinct ing->>'foodId'), '{}')
    into v_food_ids
  from jsonb_array_elements(v_recipes) r
  cross join lateral jsonb_array_elements(
    case when jsonb_typeof(r->'ingredients') = 'array' then r->'ingredients' else '[]'::jsonb end
  ) ing
  where ing->>'foodId' is not null;

  select coalesce(jsonb_agg(f), '[]'::jsonb)
    into v_foods
  from public.custom_foods cf
  cross join lateral jsonb_array_elements(
    case when jsonb_typeof(cf.data) = 'array' then cf.data else '[]'::jsonb end
  ) f
  where cf.user_id = v_owner
    and f->>'id' = any(v_food_ids);

  return jsonb_build_object('week', v_week, 'customRecipes', v_recipes, 'customFoods', v_foods);
end;
$$;

revoke all on function public.get_shared_plan(text) from public, anon;
grant execute on function public.get_shared_plan(text) to authenticated;
