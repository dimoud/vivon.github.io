// ============================================================
// auth.js — Full-screen authentication UI (premium design)
// ============================================================

(function () {

  // ── SVG icons (inline, no dependency) ────────────────────

  const ICONS = {
    user:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>`,
    userAdd: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="8" r="4"/><path d="M2 20c0-4 3.6-7 8-7s8 3 8 7"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="16" y1="11" x2="22" y2="11"/></svg>`,
    mail:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>`,
    lock:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    eye:     `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    eyeOff:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`,
    arrow:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>`,
    shield:  `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    back:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12,19 5,12 12,5"/></svg>`,
  };

  // ── Bootstrap ─────────────────────────────────────────────

  let _appInited = false;
  let _appInitedForUserId = null;
  let _pendingOnboarding = false;

  const _onAppPage = window.location.pathname.endsWith('app.html');

  async function bootAuth() {
    if (_onAppPage) {
      // ── app.html: session is required; no auth UI here ──────
      const { data: { session } } = await _supabase.auth.getSession();
      if (!session) { window.location.replace('index.html'); return; }
      if (!_appInited) {
        _appInited = true;
        _appInitedForUserId = session.user.id;
        try { _pendingOnboarding = localStorage.getItem('vivon_new_user') === '1'; localStorage.removeItem('vivon_new_user'); } catch(e) {}
        await initApp();
        if (_pendingOnboarding) { _pendingOnboarding = false; showOnboarding(function() {}); }
      }
      _supabase.auth.onAuthStateChange(async (event, session) => {
        if (event === 'SIGNED_IN' && session) {
          const newUserId = session.user.id;
          if (!_appInited || _appInitedForUserId !== newUserId) {
            _appInited = true;
            _appInitedForUserId = newUserId;
            if (!_pendingOnboarding) {
              try { _pendingOnboarding = localStorage.getItem('vivon_new_user') === '1'; localStorage.removeItem('vivon_new_user'); } catch(e) {}
            }
            await initApp();
            if (_pendingOnboarding) { _pendingOnboarding = false; showOnboarding(function() {}); }
          }
        }
        if (event === 'SIGNED_OUT') {
          window.location.replace('index.html');
        }
      });
    } else {
      // ── index.html: show auth UI; redirect to app on sign-in ─
      renderAuthScreen();
      const { data: { session } } = await _supabase.auth.getSession();
      if (session) { window.location.replace('app.html'); return; }
      _supabase.auth.onAuthStateChange(async (event, session) => {
        if (event === 'SIGNED_IN' && session) {
          // Pass onboarding flag across the page boundary via localStorage
          if (_pendingOnboarding) {
            try { localStorage.setItem('vivon_new_user', '1'); } catch(e) {}
          }
          window.location.replace('app.html');
        }
        if (event === 'SIGNED_OUT') {
          renderAuthScreen();
        }
        if (event === 'PASSWORD_RECOVERY') {
          authShowTab('reset-new');
        }
      });
    }
  }

  // ── Render ────────────────────────────────────────────────

  function renderAuthScreen() {
    const el = document.getElementById('auth-screen');
    if (!el) return;
    el.innerHTML = `
      <div class="auth-orb auth-orb-3"></div>
      <div class="auth-card">

        <!-- Logo -->
        <div class="auth-logo">
          <img src="logo.png" alt="VIVON" class="auth-logo-img"
               onerror="this.style.display='none'">
          <div class="auth-brand">VIVON</div>
          <div class="auth-tagline">${t('auth_tagline')}</div>
        </div>

        <!-- Tabs -->
        <div class="auth-tabs" id="auth-tabs">
          <button class="auth-tab active" data-tab="login" onclick="authShowTab('login')">
            ${ICONS.user} ${t('auth_login')}
          </button>
          <button class="auth-tab" data-tab="register" onclick="authShowTab('register')">
            ${ICONS.userAdd} ${t('auth_register')}
          </button>
        </div>

        <!-- LOGIN -->
        <form id="auth-form-login" class="auth-form" onsubmit="authLogin(event)">
          <div class="auth-lang-row">
            ${Object.entries(LANGUAGES).map(([code, info]) =>
              `<button type="button" class="auth-lang-chip${_currentLang === code ? ' active' : ''}"
                       data-lang="${code}" onclick="authSetLang('${code}')"
                       title="${info.label}"><img src="https://flagcdn.com/w40/${info.cc}.png" alt="${info.label}" width="24" height="16" style="border-radius:3px;display:block"></button>`
            ).join('')}
          </div>
          <div class="auth-field">
            <label class="auth-label">${t('auth_email')}</label>
            <div class="auth-input-wrap">
              <span class="auth-input-icon">${ICONS.mail}</span>
              <input class="auth-input" id="auth-email-login" type="email"
                     placeholder="email@example.com" required autocomplete="email">
            </div>
          </div>
          <div class="auth-field">
            <label class="auth-label">${t('auth_password')}</label>
            <div class="auth-input-wrap">
              <span class="auth-input-icon">${ICONS.lock}</span>
              <input class="auth-input" id="auth-pass-login" type="password"
                     placeholder="••••••••" required autocomplete="current-password"
                     style="padding-right:42px">
              <button type="button" class="auth-input-toggle"
                      onclick="authTogglePass('auth-pass-login',this)"
                      tabindex="-1">${ICONS.eye}</button>
            </div>
          </div>
          <div id="auth-error-login" class="auth-error" style="display:none">
            ${ICONS.shield} <span></span>
          </div>
          <button class="auth-btn" type="submit" id="auth-btn-login">
            ${ICONS.arrow} ${t('auth_login')}
          </button>
          <div class="auth-footer-row">
            <button class="auth-link-btn" type="button" onclick="authShowTab('reset')">
              ${t('auth_forgot')} <span>${t('auth_reset_label')}</span>
            </button>
          </div>
        </form>

        <!-- REGISTER -->
        <form id="auth-form-register" class="auth-form" style="display:none"
              onsubmit="authRegister(event)">
          <div class="auth-lang-row" id="auth-lang-row">
            ${Object.entries(LANGUAGES).map(([code, info]) =>
              `<button type="button" class="auth-lang-chip${_currentLang === code ? ' active' : ''}"
                       data-lang="${code}" onclick="authSetRegisterLang('${code}')"
                       title="${info.label}"><img src="https://flagcdn.com/w40/${info.cc}.png" alt="${info.label}" width="24" height="16" style="border-radius:3px;display:block"></button>`
            ).join('')}
          </div>
          <div class="auth-field">
            <label class="auth-label">${t('auth_name')}</label>
            <div class="auth-input-wrap">
              <span class="auth-input-icon">${ICONS.user}</span>
              <input class="auth-input" id="auth-name-register" type="text"
                     placeholder="${t('prof_name_placeholder')}" required autocomplete="given-name"
                     style="padding-left:42px">
            </div>
          </div>
          <div class="auth-field">
            <label class="auth-label">${t('auth_email')}</label>
            <div class="auth-input-wrap">
              <span class="auth-input-icon">${ICONS.mail}</span>
              <input class="auth-input" id="auth-email-register" type="email"
                     placeholder="email@example.com" required autocomplete="email">
            </div>
          </div>
          <div class="auth-field">
            <label class="auth-label">${t('auth_password')}</label>
            <div class="auth-input-wrap">
              <span class="auth-input-icon">${ICONS.lock}</span>
              <input class="auth-input" id="auth-pass-register" type="password"
                     placeholder="${t('auth_password_hint')}" required minlength="6"
                     autocomplete="new-password" style="padding-right:42px">
              <button type="button" class="auth-input-toggle"
                      onclick="authTogglePass('auth-pass-register',this)"
                      tabindex="-1">${ICONS.eye}</button>
            </div>
          </div>
          <div class="auth-disclaimer-box" id="auth-disclaimer-box">
            <div class="auth-disclaimer-title" id="auth-disclaimer-title"></div>
            <div class="auth-disclaimer-body" id="auth-disclaimer-body"></div>
          </div>
          <label class="auth-disclaimer-check-row">
            <input type="checkbox" id="auth-disclaimer-check" style="flex-shrink:0;width:16px;height:16px;accent-color:var(--primary,#4f8ef7);cursor:pointer">
            <span id="auth-disclaimer-check-label" style="font-size:0.78rem;line-height:1.4;color:var(--text-secondary,#666);cursor:pointer"></span>
          </label>
          <div id="auth-error-register" class="auth-error" style="display:none">
            ${ICONS.shield} <span></span>
          </div>
          <button class="auth-btn" type="submit" id="auth-btn-register">
            ${ICONS.arrow} ${t('auth_create_account')}
          </button>
        </form>

        <!-- PASSWORD RESET (request) -->
        <form id="auth-form-reset" class="auth-form" style="display:none"
              onsubmit="authReset(event)">
          <p class="auth-hint">${t('auth_reset_hint')}</p>
          <div class="auth-field">
            <label class="auth-label">${t('auth_email')}</label>
            <div class="auth-input-wrap">
              <span class="auth-input-icon">${ICONS.mail}</span>
              <input class="auth-input" id="auth-email-reset" type="email"
                     placeholder="email@example.com" required autocomplete="email">
            </div>
          </div>
          <div id="auth-error-reset"   class="auth-error"   style="display:none"><span></span></div>
          <div id="auth-success-reset" class="auth-success"  style="display:none"></div>
          <button class="auth-btn" type="submit" id="auth-btn-reset">
            ${ICONS.arrow} ${t('auth_reset_send')}
          </button>
          <div class="auth-footer-row">
            <button class="auth-link-btn" type="button" onclick="authShowTab('login')">
              ${ICONS.back} <span style="font-size:0.8rem">${t('auth_back_login')}</span>
            </button>
          </div>
        </form>

        <!-- SET NEW PASSWORD (after clicking reset link) -->
        <form id="auth-form-reset-new" class="auth-form" style="display:none"
              onsubmit="authSetNewPassword(event)">
          <p class="auth-hint">${t('auth_new_password_hint')}</p>
          <div class="auth-field">
            <label class="auth-label">${t('auth_new_password')}</label>
            <div class="auth-input-wrap">
              <span class="auth-input-icon">${ICONS.lock}</span>
              <input class="auth-input" id="auth-pass-new" type="password"
                     placeholder="${t('auth_password_hint')}" required minlength="6"
                     autocomplete="new-password" style="padding-right:42px">
              <button type="button" class="auth-input-toggle"
                      onclick="authTogglePass('auth-pass-new',this)"
                      tabindex="-1">${ICONS.eye}</button>
            </div>
          </div>
          <div id="auth-error-reset-new" class="auth-error" style="display:none"><span></span></div>
          <button class="auth-btn" type="submit" id="auth-btn-reset-new">
            ${ICONS.arrow} ${t('auth_save_password')}
          </button>
        </form>

      </div>`;
    _renderDisclaimer();
  }

  function showAuthScreen() {
    // Hide app immediately — no lag
    const shell = document.getElementById('app-shell');
    if (shell) shell.classList.add('app-hidden');
    const el = document.getElementById('auth-screen');
    if (el) { el.style.display = 'flex'; renderAuthScreen(); }
  }

  function hideAuthScreen() {
    const el = document.getElementById('auth-screen');
    if (el) el.style.display = 'none';
    // Shell is revealed by initApp() after the correct tab is set, to avoid flicker
  }

  // ── Tab switching ─────────────────────────────────────────

  window.authShowTab = function (tab) {
    const forms   = ['login', 'register', 'reset', 'reset-new'];
    const tabBtns = ['login', 'register'];

    forms.forEach(f => {
      const el = document.getElementById(`auth-form-${f}`);
      if (el) el.style.display = (f === tab) ? '' : 'none';
    });
    tabBtns.forEach(t => {
      const el = document.querySelector(`.auth-tab[data-tab="${t}"]`);
      if (el) el.classList.toggle('active', t === tab);
    });
    const tabs = document.getElementById('auth-tabs');
    if (tabs) tabs.style.display = (tab === 'reset' || tab === 'reset-new') ? 'none' : '';

    if (tab === 'register') _renderDisclaimer();
  };

  function _disclaimerLang() {
    // Use saved language if available, otherwise browser locale, otherwise Greek
    let lang = 'el';
    try { lang = localStorage.getItem('vivon_lang') || 'el'; } catch(e) {}
    const supported = ['el', 'en', 'es', 'fr'];
    if (!supported.includes(lang)) {
      const bl = (navigator.language || '').split('-')[0].toLowerCase();
      lang = supported.includes(bl) ? bl : 'el';
    }
    return lang;
  }

  function _renderDisclaimer() {
    const lang = _disclaimerLang();
    const D = {
      title: { el: '⚠️ Σημαντική Ανακοίνωση', en: '⚠️ Important Notice', es: '⚠️ Aviso Importante', fr: '⚠️ Avis Important' },
      body: {
        el: 'Το VIVON είναι εφαρμογή καταγραφής διατροφής και προσωπικής παρακολούθησης. ΔΕΝ παρέχει ιατρικές, διαιτολογικές ή άλλες επαγγελματικές συμβουλές. Οι πληροφορίες και υπολογισμοί στην εφαρμογή είναι ενδεικτικοί και ενδέχεται να περιέχουν ανακρίβειες. ΔΕΝ αντικαθιστούν τη γνώμη ιατρού, διαιτολόγου ή άλλου ειδικού. Χρησιμοποιείτε την εφαρμογή αποκλειστικά με δική σας ευθύνη. Σε περίπτωση υγειονομικών ανησυχιών, συμβουλευτείτε πάντα ειδικό.',
        en: 'VIVON is a personal nutrition tracking app. It does NOT provide medical, dietary, or professional advice of any kind. All information and calculations are indicative only and may contain inaccuracies. Nothing in this app should be considered a substitute for advice from a qualified doctor, dietitian, or healthcare professional. You use this app entirely at your own risk. If you have any health concerns, always consult a qualified professional.',
        es: 'VIVON es una aplicación personal de seguimiento nutricional. NO proporciona asesoramiento médico, dietético ni profesional de ningún tipo. Toda la información y los cálculos son meramente indicativos y pueden contener inexactitudes. Nada en esta aplicación debe considerarse un sustituto del consejo de un médico, dietista u otro profesional de la salud. Usas esta aplicación bajo tu propia responsabilidad. Si tienes alguna preocupación de salud, consulta siempre a un profesional.',
        fr: 'VIVON est une application personnelle de suivi nutritionnel. Elle ne fournit AUCUN conseil médical, diététique ou professionnel. Toutes les informations et calculs sont indicatifs et peuvent contenir des inexactitudes. Rien dans cette application ne remplace l\'avis d\'un médecin, diététicien ou autre professionnel de santé qualifié. Vous utilisez cette application entièrement à vos propres risques. En cas de préoccupation de santé, consultez toujours un professionnel qualifié.',
      },
      check: {
        el: 'Διάβασα και αποδέχομαι τους παραπάνω όρους. Κατανοώ ότι η εφαρμογή δεν παρέχει ιατρικές συμβουλές.',
        en: 'I have read and accept the above notice. I understand this app does not provide medical advice.',
        es: 'He leído y acepto el aviso anterior. Entiendo que esta aplicación no proporciona asesoramiento médico.',
        fr: 'J\'ai lu et j\'accepte l\'avis ci-dessus. Je comprends que cette application ne fournit pas de conseils médicaux.',
      },
    };
    const title = document.getElementById('auth-disclaimer-title');
    const body  = document.getElementById('auth-disclaimer-body');
    const label = document.getElementById('auth-disclaimer-check-label');
    if (title) title.textContent = D.title[lang] || D.title.en;
    if (body)  body.textContent  = D.body[lang]  || D.body.en;
    if (label) label.textContent = D.check[lang]  || D.check.en;
  }

  // ── Password visibility toggle ────────────────────────────

  window.authTogglePass = function (inputId, btn) {
    const inp = document.getElementById(inputId);
    if (!inp) return;
    const showing = inp.type === 'text';
    inp.type = showing ? 'password' : 'text';
    btn.innerHTML = showing ? ICONS.eye : ICONS.eyeOff;
  };

  // ── Form handlers ─────────────────────────────────────────

  window.authLogin = async function (e) {
    e.preventDefault();
    const email = document.getElementById('auth-email-login').value.trim();
    const pass  = document.getElementById('auth-pass-login').value;
    setLoading('login', true);
    clearMsg('login');

    const { error } = await sbSignIn(email, pass);
    setLoading('login', false);
    if (error) showError('login', _friendly(error.message));
    // on success: onAuthStateChange SIGNED_IN fires → hideAuthScreen + initApp
  };

  async function _doRegister(e) {
    e.preventDefault();
    const name  = document.getElementById('auth-name-register').value.trim();
    const email = document.getElementById('auth-email-register').value.trim();
    const pass  = document.getElementById('auth-pass-register').value;

    const disclaimerCheck = document.getElementById('auth-disclaimer-check');
    if (!disclaimerCheck || !disclaimerCheck.checked) {
      showError('register', t('disclaimer_required'));
      return;
    }

    setLoading('register', true);
    clearMsg('register');

    const { data, error } = await sbSignUp(email, pass, name);
    setLoading('register', false);
    if (error) { showError('register', _friendly(error.message)); return; }

    // Write to localStorage immediately so it survives new tabs (email confirmation link opens in a new tab)
    try { localStorage.setItem('vivon_new_user', '1'); } catch(e) {}
    _pendingOnboarding = true;

    if (!data.session) {
      // Email confirmation required — flag is already in localStorage for when they return
      showInfo('register', `${ICONS.shield} ${t('auth_check_email')}`);
    }
    // Auto-confirmed: onAuthStateChange fires SIGNED_IN and redirects to app.html
  }

  window.authRegister = function(e) { return _doRegister(e); };

  window.authReset = async function (e) {
    e.preventDefault();
    const email = document.getElementById('auth-email-reset').value.trim();
    setLoading('reset', true);
    clearMsg('reset');

    const { error } = await sbResetPassword(email);
    setLoading('reset', false);
    if (error) { showError('reset', _friendly(error.message)); return; }

    const suc = document.getElementById('auth-success-reset');
    if (suc) { suc.style.display = ''; suc.textContent = '✅ ' + t('auth_reset_sent'); }
  };

  window.authSetNewPassword = async function (e) {
    e.preventDefault();
    const pass = document.getElementById('auth-pass-new').value;
    setLoading('reset-new', true);
    clearMsg('reset-new');

    const { error } = await _supabase.auth.updateUser({ password: pass });
    setLoading('reset-new', false);
    if (error) showError('reset-new', _friendly(error.message));
    // on success: SIGNED_IN event fires → initApp
  };

  // ── UI helpers ────────────────────────────────────────────

  function getBtnLabels() {
    return {
      login:       `${ICONS.arrow} ${t('auth_login')}`,
      register:    `${ICONS.arrow} ${t('auth_create_account')}`,
      reset:       `${ICONS.arrow} ${t('auth_reset_send')}`,
      'reset-new': `${ICONS.arrow} ${t('auth_save_password')}`,
    };
  }

  function setLoading(form, loading) {
    const btn = document.getElementById(`auth-btn-${form}`);
    if (!btn) return;
    btn.disabled = loading;
    btn.innerHTML = loading ? t('auth_loading') : (getBtnLabels()[form] || 'OK');
  }

  function showError(form, msg) {
    const el = document.getElementById(`auth-error-${form}`);
    if (!el) return;
    el.style.display = 'flex';
    el.className = 'auth-error';
    const span = el.querySelector('span') || el;
    span.innerHTML = msg;
  }

  function showInfo(form, msg) {
    const el = document.getElementById(`auth-error-${form}`);
    if (!el) return;
    el.style.display = 'flex';
    el.className = 'auth-info';
    const span = el.querySelector('span') || el;
    span.innerHTML = msg;
  }

  function clearMsg(form) {
    ['auth-error-', 'auth-success-'].forEach(prefix => {
      const el = document.getElementById(prefix + form);
      if (el) { el.style.display = 'none'; const span = el.querySelector('span'); if (span) span.textContent = ''; }
    });
  }

  function _friendly(msg) {
    if (!msg) return t('auth_error_generic');
    if (msg.includes('Invalid login credentials'))  return t('auth_error_credentials');
    if (msg.includes('Email not confirmed'))         return t('auth_error_not_confirmed');
    if (msg.includes('User already registered'))     return t('auth_error_already_registered');
    if (msg.includes('Password should be'))          return t('auth_error_password_short');
    if (msg.includes('Unable to validate email'))    return t('auth_error_invalid_email');
    if (msg.includes('rate limit') || msg.includes('over_email_send_rate_limit') || msg.includes('429'))
      return t('auth_error_rate_limit');
    return t('auth_error_generic');
  }

  // ── Sign-out (called from app UI) ─────────────────────────

  window.handleSignOut = async function () {
    // Cancel pending debounced save
    if (typeof _saveTimer !== 'undefined') {
      try { clearTimeout(_saveTimer); _saveTimer = null; } catch(e) {}
    }
    if (typeof _syncOwner !== 'undefined') {
      try { _syncOwner = null; } catch(e) {}
    }
    try { localStorage.removeItem('nutriApp_v2'); } catch (e) {}
    await sbSignOut();
    // SIGNED_OUT event will fire → redirect to index.html
  };

  // ── Language switcher inside register form ────────────────

  let _langPickSelectedLang = null;

  window.authSetRegisterLang = function(lang) {
    if (typeof setLang === 'function') setLang(lang);
    _langPickSelectedLang = lang;
    renderAuthScreen();
    authShowTab('register');
  };

  window.authSetLang = function(lang) {
    if (typeof setLang === 'function') setLang(lang);
    _langPickSelectedLang = lang;
    renderAuthScreen();
    authShowTab('login');
  };

  function _tLp(key, lang) {
    const entry = (typeof I18N !== 'undefined') ? I18N[key] : null;
    if (!entry) return key;
    return entry[lang] || entry['el'] || key;
  }

  // ── Onboarding Carousel ────────────────────────────────────

  const _OB_CARDS = [
    {
      titleKey: 'ob1_title',
      features: [
        { iconKey: 'ob1_a_icon', headKey: 'ob1_a_head', descKey: 'ob1_a_desc' },
        { iconKey: 'ob1_b_icon', headKey: 'ob1_b_head', descKey: 'ob1_b_desc' },
      ],
    },
    {
      titleKey: 'ob2_title',
      features: [
        { iconKey: 'ob2_a_icon', headKey: 'ob2_a_head', descKey: 'ob2_a_desc' },
        { iconKey: 'ob2_b_icon', headKey: 'ob2_b_head', descKey: 'ob2_b_desc' },
      ],
    },
    {
      titleKey: 'ob3_title',
      features: [
        { iconKey: 'ob3_a_icon', headKey: 'ob3_a_head', descKey: 'ob3_a_desc' },
        { iconKey: 'ob3_b_icon', headKey: 'ob3_b_head', descKey: 'ob3_b_desc' },
      ],
    },
  ];

  function showOnboarding(onDone) {
    const overlay = document.getElementById('onboarding-overlay');
    if (!overlay) { onDone && onDone(); return; }

    const lang = _langPickSelectedLang || _disclaimerLang();
    let current = 0;
    const total = _OB_CARDS.length;
    let autoTimer = null;

    function buildSlides() {
      return _OB_CARDS.map((card, i) => {
        const features = card.features.map(f => `
          <div class="onboarding-feature">
            <div class="onboarding-feature-icon">${_tLp(f.iconKey, lang)}</div>
            <div class="onboarding-feature-text">
              <div class="onboarding-feature-head">${_tLp(f.headKey, lang)}</div>
              <div class="onboarding-feature-desc">${_tLp(f.descKey, lang)}</div>
            </div>
          </div>`).join('');
        return `<div class="ob-slide">
          <div class="onboarding-card-title">${_tLp(card.titleKey, lang)}</div>
          <div class="onboarding-features">${features}</div>
        </div>`;
      }).join('');
    }

    overlay.innerHTML = `<div class="onboarding-card">
      <button class="onboarding-close-btn" onclick="window._obDone()" aria-label="Κλείσιμο">✕</button>
      <div class="onboarding-dots">${Array.from({ length: total }, (_, i) =>
        `<div class="onboarding-dot${i === 0 ? ' active' : ''}"></div>`).join('')}
      </div>
      <div class="ob-track-wrap">
        <button class="ob-arrow ob-arrow-left" onclick="window._obPrev()" aria-label="Προηγούμενο">&#8249;</button>
        <div class="ob-track">${buildSlides()}</div>
        <button class="ob-arrow ob-arrow-right" onclick="window._obNext()" aria-label="Επόμενο">&#8250;</button>
      </div>
      <div class="onboarding-actions">
        <button class="onboarding-skip" onclick="window._obDone()">${_tLp('ob_skip', lang)}</button>
        <button class="ob-cta-btn" id="ob-cta-btn" onclick="window._obNext()">
          ${_tLp('ob_next', lang)}
        </button>
      </div>
    </div>`;

    const track = overlay.querySelector('.ob-track');
    const dotsEl = overlay.querySelectorAll('.onboarding-dot');
    const ctaBtn = overlay.querySelector('#ob-cta-btn');
    const arrowLeft = overlay.querySelector('.ob-arrow-left');

    function goTo(idx, dir) {
      if (idx < 0 || idx >= total) return;
      current = idx;
      track.style.transform = `translateX(-${current * 100}%)`;
      dotsEl.forEach((d, i) => d.classList.toggle('active', i === current));
      const isLast = current === total - 1;
      ctaBtn.textContent = isLast ? _tLp('ob_start', lang) : _tLp('ob_next', lang);
      arrowLeft.style.visibility = current === 0 ? 'hidden' : 'visible';
      resetAuto();
    }

    function resetAuto() {
      if (autoTimer) clearInterval(autoTimer);
      autoTimer = setInterval(() => {
        goTo(current < total - 1 ? current + 1 : 0);
      }, 10000);
    }

    window._obNext = function() {
      if (current < total - 1) { goTo(current + 1); } else { window._obDone(); }
    };
    window._obPrev = function() {
      if (current > 0) goTo(current - 1);
    };

    let _obSwipeCleanup = null;
    window._obDone = function(fromPopstate) {
      if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
      if (_obSwipeCleanup) { _obSwipeCleanup(); _obSwipeCleanup = null; }
      overlay.style.display = 'none';
      if (!fromPopstate) history.back();
      onDone && onDone();
    };

    goTo(0);
    overlay.style.display = 'flex';

    // Swipe left/right to navigate between slides
    const card = overlay.querySelector('.onboarding-card');
    if (card) {
      let tx = 0, ty = 0, dragging = false;
      function onTouchStart(e) {
        tx = e.touches[0].clientX;
        ty = e.touches[0].clientY;
        dragging = true;
      }
      function onTouchEnd(e) {
        if (!dragging) return;
        dragging = false;
        const dx = e.changedTouches[0].clientX - tx;
        const dy = e.changedTouches[0].clientY - ty;
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
          if (dx < 0) window._obNext(); else window._obPrev();
        }
      }
      card.addEventListener('touchstart', onTouchStart, { passive: true });
      card.addEventListener('touchend', onTouchEnd, { passive: true });
      _obSwipeCleanup = () => {
        card.removeEventListener('touchstart', onTouchStart);
        card.removeEventListener('touchend', onTouchEnd);
      };
    }

    history.pushState({ vivon: 'onboarding' }, '', location.pathname + location.search);
  }

  // ── Help FAB ──────────────────────────────────────────────

  window._openHelp = function() { showOnboarding(function() {}); };

  // ── Entry point ───────────────────────────────────────────

  document.addEventListener('DOMContentLoaded', bootAuth);

})();
