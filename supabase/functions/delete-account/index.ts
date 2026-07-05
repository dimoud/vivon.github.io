import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL') ?? '';
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY') ?? '';
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
const ALLOWED_ORIGIN = 'https://www.vivon.top';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Tables keyed by user_id (all rows for the user are removed)
const USER_ID_TABLES = [
  'goals',
  'week_plans',
  'body_log',
  'supplements',
  'custom_foods',
  'custom_recipes',
  'user_state',
];

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: CORS_HEADERS });
  }

  try {
    const authHeader = req.headers.get('authorization') ?? '';
    const jwt = authHeader.replace(/^Bearer\s+/i, '');
    if (!jwt) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
      });
    }

    // Verify the caller's identity from their own JWT (never trust a client-supplied user id)
    const authClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      global: { headers: { Authorization: `Bearer ${jwt}` } },
    });
    const { data: { user }, error: userErr } = await authClient.auth.getUser();
    if (userErr || !user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
      });
    }

    const userId = user.id;
    const admin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Delete all app data first
    for (const table of USER_ID_TABLES) {
      const { error } = await admin.from(table).delete().eq('user_id', userId);
      if (error) {
        return new Response(JSON.stringify({ error: `[${table}] ${error.message}` }), {
          status: 500,
          headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
        });
      }
    }
    // profiles is keyed by id, not user_id
    {
      const { error } = await admin.from('profiles').delete().eq('id', userId);
      if (error) {
        return new Response(JSON.stringify({ error: `[profiles] ${error.message}` }), {
          status: 500,
          headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
        });
      }
    }
    // feedback is keyed by user_email, not user_id — best-effort cleanup, non-fatal
    if (user.email) {
      await admin.from('feedback').delete().eq('user_email', user.email);
    }

    // Finally delete the auth user itself
    const { error: deleteUserErr } = await admin.auth.admin.deleteUser(userId);
    if (deleteUserErr) {
      return new Response(JSON.stringify({ error: deleteUserErr.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
    });
  }
});
