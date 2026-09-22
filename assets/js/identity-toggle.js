// IH Johannesburg — Netlify Identity awareness
// Shows the "Edit this site" link in the header only once someone is
// actually logged in, and handles the invite / set-password popup.
// The invite email always lands here on the normal site (not /admin directly)
// so the person sees the real page first, then can choose to go edit it.

(function () {
  function show(id, mode) {
    var el = document.getElementById(id);
    if (el) el.style.display = mode;
  }

  if (!window.netlifyIdentity) return;

  function refresh(user) {
    show('cms-edit-link', user ? 'inline-flex' : 'none');
    show('cms-login-link', user ? 'none' : 'inline-flex');
  }

  window.netlifyIdentity.on('init', refresh);
  window.netlifyIdentity.on('login', function (user) {
    refresh(user);
    window.netlifyIdentity.close();
  });
  window.netlifyIdentity.on('logout', function () { refresh(null); });

  document.addEventListener('DOMContentLoaded', function () {
    var loginLink = document.getElementById('cms-login-link');
    if (loginLink) {
      loginLink.addEventListener('click', function (e) {
        e.preventDefault();
        window.netlifyIdentity.open('login');
      });
    }
  });

  // If this is an invite / password-recovery link, the widget auto-detects
  // the #invite_token or #recovery_token in the URL and opens its own modal —
  // no redirect needed, the person just completes it right here on the page.
})();
