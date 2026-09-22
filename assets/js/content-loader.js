// IH Johannesburg — content loader
// Populates elements whose id starts with "cms-<page>-" or "cms-footer-"
// from /content/<page>.json and /content/footer.json.
// Falls back silently to the text already baked into the HTML if a fetch fails,
// so the site never breaks even if content/ isn't reachable.

(function () {
  function applyContent(prefix, data) {
    Object.keys(data).forEach(function (key) {
      var id = 'cms-' + prefix + '-' + key;
      var el = document.getElementById(id);
      if (!el) return;
      var value = data[key];
      if (Array.isArray(value)) {
        el.innerHTML = value.map(function (item) {
          return '<li>' + item + '</li>';
        }).join('');
      } else {
        el.textContent = value;
      }
    });
  }

  function loadJSON(path) {
    return fetch(path, { cache: 'no-store' })
      .then(function (res) { if (!res.ok) throw new Error(path); return res.json(); })
      .catch(function () { return null; });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var page = document.body.getAttribute('data-page');

    loadJSON('content/footer.json').then(function (data) {
      if (data) applyContent('footer', data);
    });

    if (page) {
      loadJSON('content/' + page + '.json').then(function (data) {
        if (data) applyContent(page, data);
      });
    }
  });
})();
