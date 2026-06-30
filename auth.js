// ============================================================
// auth.js — Full-screen authentication UI
// ============================================================

(function () {
  // ── State ─────────────────────────────────────────────────

  let _activeTab = 'login'; // 'login' | 'register' | 'reset'

  // ── Bootstrap ─────────────────────────────────────────────

  // Called as soon as the DOM is ready (before initApp).
  // If a session already exists we skip the auth screen entirely.
  async function bootAuth() {
    // Render auth screen immediately so there's no flash of app content
    renderAuthScreen();

    // Check existing session
    const { data: { session } } = await _supabase.auth.getSession();
    if (session) {
      hideAuthScreen();
      await initApp();
    }

    // Listen for future auth changes (password-reset redirect, email confirm, etc.)
    _supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session) {
        hideAuthScreen();
        await initApp();
      }
      if (event === 'SIGNED_OUT') {
        showAuthScreen();
      }
      if (event === 'PASSWORD_RECOVERY') {
        showTab('reset-new');
      }
    });
  }

  // ── DOM helpers ───────────────────────────────────────────

  function renderAuthScreen() {
    const el = document.getElementById('auth-screen');
    if (!el) return;
    el.innerHTML = `
      <div class="auth-card">
        <div class="auth-logo">
          <img src="../logo.png" alt="VIVON" class="auth-logo-img" onerror="this.style.display='none'">
          <div class="auth-brand">VIVON</div>
          <div class="auth-tagline">Το διαιτολόγιό σου, πάντα μαζί σου</div>
        </div>

        <!-- TAB SWITCHER -->
        <div class="auth-tabs" id="auth-tabs">
          <button class="auth-tab active" data-tab="login"    onclick="authShowTab('login')">Σύνδεση</button>
          <button class="auth-tab"        data-tab="register" onclick="authShowTab('register')">Εγγραφή</button>
        </div>

        <!-- LOGIN FORM -->
        <form id="auth-form-login" class="auth-form" onsubmit="authLogin(event)">
          <div class="auth-field">
            <label class="auth-label">Email</label>
            <input class="auth-input" id="auth-email-login" type="email" placeholder="email@example.com" required autocomplete="email">
          </div>
          <div class="auth-field">
            <label class="auth-label">Κωδικός</label>
            <input class="auth-input" id="auth-pass-login" type="password" placeholder="••••••••" required autocomplete="current-password">
          </div>
          <div id="auth-error-login" class="auth-error" style="display:none"></div>
          <button class="auth-btn" type="submit" id="auth-btn-login">Σύνδεση</button>
          <button class="auth-link-btn" type="button" onclick="authShowTab('reset')">Ξέχασα τον κωδικό μου</button>
        </form>

        <!-- REGISTER FORM -->
        <form id="auth-form-register" class="auth-form" style="display:none" onsubmit="authRegister(event)">
          <div class="auth-field">
            <label class="auth-label">Όνομα</label>
            <input class="auth-input" id="auth-name-register" type="text" placeholder="Το όνομά σου" required autocomplete="name">
          </div>
          <div class="auth-field">
            <label class="auth-label">Email</label>
            <input class="auth-input" id="auth-email-register" type="email" placeholder="email@example.com" required autocomplete="email">
          </div>
          <div class="auth-field">
            <label class="auth-label">Κωδικός</label>
            <input class="auth-input" id="auth-pass-register" type="password" placeholder="Τουλάχιστον 6 χαρακτήρες" required minlength="6" autocomplete="new-password">
          </div>
          <div id="auth-error-register" class="auth-error" style="display:none"></div>
          <button class="auth-btn" type="submit" id="auth-btn-register">Δημιουργία λογαριασμού</button>
        </form>

        <!-- PASSWORD RESET FORM -->
        <form id="auth-form-reset" class="auth-form" style="display:none" onsubmit="authReset(event)">
          <p class="auth-hint">Εισάγετε το email σας και θα σας στείλουμε σύνδεσμο για επαναφορά κωδικού.</p>
          <div class="auth-field">
            <label class="auth-label">Email</label>
            <input class="auth-input" id="auth-email-reset" type="email" placeholder="email@example.com" required autocomplete="email">
          </div>
          <div id="auth-error-reset" class="auth-error" style="display:none"></div>
          <div id="auth-success-reset" class="auth-success" style="display:none"></div>
          <button class="auth-btn" type="submit" id="auth-btn-reset">Αποστολή συνδέσμου</button>
          <button class="auth-link-btn" type="button" onclick="authShowTab('login')">← Πίσω στη σύνδεση</button>
        </form>

        <!-- NEW PASSWORD FORM (after clicking reset link) -->
        <form id="auth-form-reset-new" class="auth-form" style="display:none" onsubmit="authSetNewPassword(event)">
          <p class="auth-hint">Εισάγετε τον νέο σας κωδικό.</p>
          <div class="auth-field">
            <label class="auth-label">Νέος Κωδικός</label>
            <input class="auth-input" id="auth-pass-new" type="password" placeholder="Τουλάχιστον 6 χαρακτήρες" required minlength="6" autocomplete="new-password">
          </div>
          <div id="auth-error-reset-new" class="auth-error" style="display:none"></div>
          <button class="auth-btn" type="submit" id="auth-btn-reset-new">Αποθήκευση κωδικού</button>
        </form>
      </div>`;
  }

  function showAuthScreen() {
    const el = document.getElementById('auth-screen');
    if (el) { el.style.display = 'flex'; renderAuthScreen(); }
  }

  function hideAuthScreen() {
    const el = document.getElementById('auth-screen');
    if (el) el.style.display = 'none';
  }

  // ── Tab switching ─────────────────────────────────────────

  window.authShowTab = function (tab) {
    _activeTab = tab;
    const forms  = ['login', 'register', 'reset', 'reset-new'];
    const tabBtns = ['login', 'register'];

    forms.forEach(f => {
      const el = document.getElementById(`auth-form-${f}`);
      if (el) el.style.display = (f === tab) ? '' : 'none';
    });
    tabBtns.forEach(t => {
      const el = document.querySelector(`.auth-tab[data-tab="${t}"]`);
      if (el) el.classList.toggle('active', t === tab);
    });
    // Hide tab bar for reset screens
    const tabs = document.getElementById('auth-tabs');
    if (tabs) tabs.style.display = (tab === 'reset' || tab === 'reset-new') ? 'none' : '';
  };

  // expose for inline onsubmit
  window.showTab = window.authShowTab;

  // ── Form actions ──────────────────────────────────────────

  window.authLogin = async function (e) {
    e.preventDefault();
    const email = document.getElementById('auth-email-login').value.trim();
    const pass  = document.getElementById('auth-pass-login').value;
    setLoading('login', true);
    clearError('login');

    const { error } = await sbSignIn(email, pass);
    setLoading('login', false);
    if (error) { showError('login', _friendlyError(error.message)); return; }
    // onAuthStateChange fires → hideAuthScreen + initApp
  };

  window.authRegister = async function (e) {
    e.preventDefault();
    const name  = document.getElementById('auth-name-register').value.trim();
    const email = document.getElementById('auth-email-register').value.trim();
    const pass  = document.getElementById('auth-pass-register').value;
    setLoading('register', true);
    clearError('register');

    const { data, error } = await sbSignUp(email, pass, name);
    setLoading('register', false);
    if (error) { showError('register', _friendlyError(error.message)); return; }

    // Supabase may require email confirmation depending on project settings.
    // If a session is returned immediately, onAuthStateChange fires.
    // Otherwise show a message.
    if (!data.session) {
      showError('register', '✉️ Ελέγξτε το email σας για επιβεβαίωση εγγραφής.', 'info');
    }
  };

  window.authReset = async function (e) {
    e.preventDefault();
    const email = document.getElementById('auth-email-reset').value.trim();
    setLoading('reset', true);
    clearError('reset');

    const { error } = await sbResetPassword(email);
    setLoading('reset', false);
    if (error) { showError('reset', _friendlyError(error.message)); return; }

    const suc = document.getElementById('auth-success-reset');
    if (suc) {
      suc.style.display = '';
      suc.textContent = '✅ Ο σύνδεσμος επαναφοράς στάλθηκε στο email σας.';
    }
  };

  window.authSetNewPassword = async function (e) {
    e.preventDefault();
    const pass = document.getElementById('auth-pass-new').value;
    setLoading('reset-new', true);
    clearError('reset-new');

    const { error } = await _supabase.auth.updateUser({ password: pass });
    setLoading('reset-new', false);
    if (error) { showError('reset-new', _friendlyError(error.message)); return; }
    // Session is already active after password update — onAuthStateChange SIGNED_IN will fire
  };

  // ── UI helpers ────────────────────────────────────────────

  function setLoading(form, loading) {
    const btn = document.getElementById(`auth-btn-${form}`);
    if (!btn) return;
    btn.disabled = loading;
    btn.textContent = loading ? 'Παρακαλώ περιμένετε...' : _btnLabel(form);
  }

  function _btnLabel(form) {
    const labels = {
      login:       'Σύνδεση',
      register:    'Δημιουργία λογαριασμού',
      reset:       'Αποστολή συνδέσμου',
      'reset-new': 'Αποθήκευση κωδικού',
    };
    return labels[form] || 'OK';
  }

  function showError(form, msg, type = 'error') {
    const el = document.getElementById(`auth-error-${form}`);
    if (!el) return;
    el.style.display = '';
    el.textContent = msg;
    el.className = type === 'info' ? 'auth-info' : 'auth-error';
  }

  function clearError(form) {
    const el = document.getElementById(`auth-error-${form}`);
    if (el) { el.style.display = 'none'; el.textContent = ''; }
    const suc = document.getElementById(`auth-success-${form}`);
    if (suc) { suc.style.display = 'none'; suc.textContent = ''; }
  }

  function _friendlyError(msg) {
    if (!msg) return 'Άγνωστο σφάλμα.';
    if (msg.includes('Invalid login credentials'))  return 'Λανθασμένο email ή κωδικός.';
    if (msg.includes('Email not confirmed'))         return 'Παρακαλώ επιβεβαιώστε πρώτα το email σας.';
    if (msg.includes('User already registered'))     return 'Υπάρχει ήδη λογαριασμός με αυτό το email.';
    if (msg.includes('Password should be'))          return 'Ο κωδικός πρέπει να έχει τουλάχιστον 6 χαρακτήρες.';
    if (msg.includes('Unable to validate email'))    return 'Μη έγκυρο email.';
    return msg;
  }

  // ── Sign-out (called from app UI) ─────────────────────────

  window.handleSignOut = async function () {
    await sbSignOut();
    // onAuthStateChange SIGNED_OUT fires → showAuthScreen
    // Also clear localStorage cache
    try { localStorage.removeItem('nutriApp_v2'); } catch (e) {}
  };

  // ── Entry point ───────────────────────────────────────────

  document.addEventListener('DOMContentLoaded', bootAuth);
})();
