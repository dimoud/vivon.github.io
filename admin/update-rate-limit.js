// One-time admin script — run with: node admin/update-rate-limit.js
// NEVER put this file in the browser app or commit the token to git.
//
// Get your Management API token from:
//   app.supabase.com → Account (top-right avatar) → Access Tokens → Generate new token

const MANAGEMENT_TOKEN = process.env.SUPABASE_MANAGEMENT_TOKEN || 'PASTE_YOUR_TOKEN_HERE';
const PROJECT_REF      = 'tqasuwcnzfxjkthmjooz';

if (MANAGEMENT_TOKEN === 'PASTE_YOUR_TOKEN_HERE') {
  console.error('ERROR: Set your management token first.');
  console.error('  Either: set SUPABASE_MANAGEMENT_TOKEN=your-token in your shell, then re-run.');
  console.error('  Or: paste the token directly into this file (do NOT commit it).');
  process.exit(1);
}

fetch(`https://api.supabase.com/v1/projects/${PROJECT_REF}/config/auth`, {
  method: 'PATCH',
  headers: {
    'Authorization': `Bearer ${MANAGEMENT_TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    rate_limit_email_sent: 30,   // emails/hour — free tier default is 3
  }),
})
  .then(async r => {
    const data = await r.json();
    if (!r.ok) {
      console.error('Failed:', r.status, JSON.stringify(data, null, 2));
      process.exit(1);
    }
    console.log('Done. New rate_limit_email_sent:', data.rate_limit_email_sent);
  })
  .catch(err => {
    console.error('Network error:', err.message);
    process.exit(1);
  });
