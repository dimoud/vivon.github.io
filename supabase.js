// ============================================================
// supabase.js — Supabase client + data access layer
// ============================================================

const SUPABASE_URL     = 'https://tqasuwcnzfxjkthmjooz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxYXN1d2NuemZ4amt0aG1qb296Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI3OTg2OTksImV4cCI6MjA5ODM3NDY5OX0.S5B2KF68_UqZkBRwAU6pjTsJFQvy0NA7YDz8Lgwa0jQ';

const _supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ── AUTH ──────────────────────────────────────────────────────

async function sbSignUp(email, password, displayName) {
  const { data, error } = await _supabase.auth.signUp({
    email,
    password,
    options: { data: { name: displayName } },
  });
  return { data, error };
}

async function sbSignIn(email, password) {
  const { data, error } = await _supabase.auth.signInWithPassword({ email, password });
  return { data, error };
}

async function sbSignOut() {
  await _supabase.auth.signOut();
}

const APP_URL = 'https://www.vivon.top/';

async function sbResetPassword(email) {
  const { error } = await _supabase.auth.resetPasswordForEmail(email, {
    redirectTo: APP_URL,
  });
  return { error };
}

function sbOnAuthStateChange(callback) {
  _supabase.auth.onAuthStateChange((_event, session) => {
    callback(session ? session.user : null);
  });
}

function sbGetCurrentUser() {
  // Returns cached session user synchronously (set by onAuthStateChange)
  return _currentUser;
}

let _currentUser = null;
_supabase.auth.getSession().then(({ data: { session } }) => {
  _currentUser = session ? session.user : null;
});
_supabase.auth.onAuthStateChange((_event, session) => {
  _currentUser = session ? session.user : null;
});

// ── LOAD ALL USER DATA ────────────────────────────────────────

async function sbLoadUserData(userId) {
  const [
    { data: profile },
    { data: goals },
    { data: weekPlans },
    { data: bodyLog },
    { data: supplements },
    { data: customFoods },
    { data: customRecipes },
    { data: userState },
  ] = await Promise.all([
    _supabase.from('profiles').select('*').eq('id', userId).maybeSingle(),
    _supabase.from('goals').select('*').eq('user_id', userId).maybeSingle(),
    _supabase.from('week_plans').select('*').eq('user_id', userId),
    _supabase.from('body_log').select('*').eq('user_id', userId).order('date', { ascending: true }),
    _supabase.from('supplements').select('*').eq('user_id', userId).maybeSingle(),
    _supabase.from('custom_foods').select('*').eq('user_id', userId).maybeSingle(),
    _supabase.from('custom_recipes').select('*').eq('user_id', userId).maybeSingle(),
    _supabase.from('user_state').select('*').eq('user_id', userId).maybeSingle(),
  ]);

  // Determine current week key and find matching plan
  const weekKey = getISOWeekKey();
  const currentWeekPlan = weekPlans ? weekPlans.find(w => w.week_key === weekKey) : null;

  const result = {};

  if (profile) {
    result.profile = {
      name:           profile.name        ?? undefined,
      photoUrl:       profile.photo_url   ?? undefined,
      weight:         profile.weight      ?? undefined,
      height:         profile.height      ?? undefined,
      age:            profile.age         ?? undefined,
      gender:         profile.gender      ?? 'male',
      activity:       profile.activity    ?? 1.55,
      dailySteps:     profile.daily_steps ?? 8000,
      useCustomTDEE:  profile.use_custom_tdee ?? false,
      customTDEE:     profile.custom_tdee  ?? 2000,
      firstMealTime:  profile.first_meal_time ?? '08:00',
    };
  }

  if (goals) {
    result.goals = {
      kcal:    goals.kcal    ?? 1700,
      protein: goals.protein ?? 155,
      carbs:   goals.carbs   ?? 150,
      fat:     goals.fat     ?? 45,
    };
  }

  if (currentWeekPlan) {
    result.week = currentWeekPlan.week_data;
    result.weekKey = weekKey;
  }

  if (bodyLog && bodyLog.length > 0) {
    result.bodyLog = bodyLog.map(e => ({
      date:   e.date,
      weight: e.weight,
      fat:    e.fat,
      muscle: e.muscle,
    }));
  }

  if (supplements) {
    result.supplements = supplements.supplements_data;
  }

  if (customFoods) {
    result.customFoods = customFoods.data;
  }

  if (customRecipes) {
    result.customRecipes = customRecipes.data;
  }

  if (userState) {
    result.favorites     = userState.favorites     ?? [];
    result.dayTemplates  = userState.day_templates ?? [];
    result.optimizeMode  = userState.optimize_mode ?? 1;
    result.activeTab     = userState.active_tab    ?? 'today';
    result.planCreated   = userState.plan_created  ?? false;
    result.planStartDate = userState.plan_start_date ?? null;
  }

  return result;
}

// ── SAVE FUNCTIONS ────────────────────────────────────────────

async function sbSaveProfile(userId, profile) {
  await _supabase.from('profiles').upsert({
    id:               userId,
    name:             profile.name,
    photo_url:        profile.photoUrl,
    weight:           profile.weight,
    height:           profile.height,
    age:              profile.age,
    gender:           profile.gender,
    activity:         profile.activity,
    daily_steps:      profile.dailySteps,
    use_custom_tdee:  profile.useCustomTDEE,
    custom_tdee:      profile.customTDEE,
    first_meal_time:  profile.firstMealTime,
    updated_at:       new Date().toISOString(),
  }, { onConflict: 'id' });
}

async function sbSaveGoals(userId, goals) {
  // Fetch existing row to get its id for upsert
  const { data: existing } = await _supabase.from('goals').select('id').eq('user_id', userId).maybeSingle();
  await _supabase.from('goals').upsert({
    ...(existing ? { id: existing.id } : {}),
    user_id:    userId,
    kcal:       goals.kcal,
    protein:    goals.protein,
    carbs:      goals.carbs,
    fat:        goals.fat,
    updated_at: new Date().toISOString(),
  }, { onConflict: 'id' });
}

async function sbSaveWeekPlan(userId, weekKey, week) {
  await _supabase.from('week_plans').upsert({
    user_id:    userId,
    week_key:   weekKey,
    week_data:  week,
    updated_at: new Date().toISOString(),
  }, { onConflict: 'user_id,week_key' });
}

async function sbSaveBodyLog(userId, bodyLog) {
  if (!bodyLog || bodyLog.length === 0) return;
  const rows = bodyLog.map(e => ({
    user_id: userId,
    date:    e.date,
    weight:  e.weight ?? null,
    fat:     e.fat    ?? null,
    muscle:  e.muscle ?? null,
  }));
  await _supabase.from('body_log').upsert(rows, { onConflict: 'user_id,date' });
}

async function sbSaveSupplements(userId, supplements) {
  const { data: existing } = await _supabase.from('supplements').select('id').eq('user_id', userId).maybeSingle();
  await _supabase.from('supplements').upsert({
    ...(existing ? { id: existing.id } : {}),
    user_id:          userId,
    supplements_data: supplements,
  }, { onConflict: 'id' });
}

async function sbSaveCustomFoods(userId, customFoods) {
  const { data: existing } = await _supabase.from('custom_foods').select('id').eq('user_id', userId).maybeSingle();
  if (existing) {
    await _supabase.from('custom_foods').update({ data: customFoods }).eq('id', existing.id);
  } else {
    await _supabase.from('custom_foods').insert({ user_id: userId, data: customFoods });
  }
}

async function sbSaveCustomRecipes(userId, customRecipes) {
  const { data: existing } = await _supabase.from('custom_recipes').select('id').eq('user_id', userId).maybeSingle();
  if (existing) {
    await _supabase.from('custom_recipes').update({ data: customRecipes }).eq('id', existing.id);
  } else {
    await _supabase.from('custom_recipes').insert({ user_id: userId, data: customRecipes });
  }
}

async function sbSaveUserState(userId, { favorites, dayTemplates, optimizeMode, activeTab, planCreated, planStartDate }) {
  const { data: existing } = await _supabase.from('user_state').select('id').eq('user_id', userId).maybeSingle();
  await _supabase.from('user_state').upsert({
    ...(existing ? { id: existing.id } : {}),
    user_id:         userId,
    favorites:       favorites      ?? [],
    day_templates:   dayTemplates   ?? [],
    optimize_mode:   optimizeMode   ?? 1,
    active_tab:      activeTab      ?? 'today',
    plan_created:    planCreated    ?? false,
    plan_start_date: planStartDate  ?? null,
  }, { onConflict: 'id' });
}

// ── WEEK KEY HELPER ───────────────────────────────────────────

function getISOWeekKey() {
  const d = new Date();
  const day = d.getDay() || 7;
  d.setDate(d.getDate() + 4 - day);
  const year = d.getFullYear();
  const week = Math.ceil(((d - new Date(year, 0, 1)) / 86400000 + 1) / 7);
  return `${year}-W${String(week).padStart(2, '0')}`;
}
