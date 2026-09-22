// IH Johannesburg — shared behaviour

document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
    });
  }

  // Home hero: goal pills re-theme the hero content
  var pills = document.querySelectorAll('.goal-pill[data-goal]');
  var content = {
    learn: {
      headline1: 'What should English',
      headline2: 'do for you?',
      color: '#1d5bbf'
    },
    teach: {
      headline1: 'Ready to teach',
      headline2: 'English for a living?',
      color: '#d7282f'
    },
    prove: {
      headline1: 'Ready to prove',
      headline2: 'your English?',
      color: '#1ea97c'
    },
    fly: {
      headline1: 'Ready to fly',
      headline2: 'with your English?',
      color: '#f6a020'
    }
  };

  if (pills.length) {
    var headline1El = document.querySelector('[data-hero="headline1"]');
    var headline2El = document.querySelector('[data-hero="headline2"]');

    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        pills.forEach(function (p) { p.classList.remove('active'); });
        pill.classList.add('active');

        var goal = pill.getAttribute('data-goal');
        var data = content[goal];
        if (data) {
          if (headline1El) headline1El.textContent = data.headline1;
          if (headline2El) {
            headline2El.textContent = data.headline2;
            headline2El.style.color = data.color;
          }
        }
      });
    });
  }

  // Simple countdown to next intake (placeholder: 27 July next year if past)
  var countdownEl = document.querySelector('[data-countdown="next-intake"]');
  if (countdownEl) {
    var target = new Date('2026-07-27T00:00:00');
    var now = new Date();
    var diffDays = Math.max(0, Math.ceil((target - now) / 86400000));
    countdownEl.textContent = 'Next intake in ' + diffDays + ' days — 27 July';
  }
});
