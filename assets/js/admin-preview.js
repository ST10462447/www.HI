/* Decap CMS live preview templates.
   Loaded after decap-cms.js in admin/index.html.
   Uses the global `h` (createElement) and `createClass` helpers Decap CMS exposes,
   plus the site's real stylesheet (registered below) so the preview pane looks
   like the actual live page, not a generic form dump. */

CMS.registerPreviewStyle('/assets/css/style.css');
CMS.registerPreviewStyle('/assets/css/admin-preview-extra.css');

function fv(entry, name) {
  var v = entry.getIn(['data', name]);
  return v ? v : '';
}
function lv(entry, name) {
  var v = entry.getIn(['data', name]);
  return v && v.toJS ? v.toJS() : (Array.isArray(v) ? v : []);
}
function ul(items) {
  return h('ul', {}, items.map(function (item, i) {
    return h('li', { key: i }, item);
  }));
}

/* ---------------- HOME ---------------- */
var HomePreview = createClass({
  render: function () {
    var e = this.props.entry;
    return h('div', { className: 'preview-page' },
      h('section', { className: 'hero' },
        h('div', { className: 'container' },
          h('p', { className: 'eyebrow' }, fv(e, 'eyebrow')),
          h('h1', {}, 'What should English do for you?'),
          h('p', { style: { fontWeight: 800, color: 'var(--blue)', fontSize: '18px', marginTop: '24px' } }, fv(e, 'subheadline')),
          h('p', { className: 'lede mt-0' }, fv(e, 'hero-paragraph'))
        )
      ),
      h('section', { className: 'section-tight section-navy' },
        h('div', { className: 'container' },
          h('div', { className: 'quickstart-grid' },
            h('div', { className: 'quickstart' }, h('h4', {}, fv(e, 'today-1-heading')), h('p', {}, fv(e, 'today-1-text'))),
            h('div', { className: 'quickstart' }, h('h4', {}, fv(e, 'today-2-heading')), h('p', {}, fv(e, 'today-2-text'))),
            h('div', { className: 'quickstart' }, h('h4', {}, fv(e, 'today-3-heading')), h('p', {}, fv(e, 'today-3-text')))
          )
        )
      ),
      h('section', {},
        h('div', { className: 'container' },
          h('div', { className: 'section-head' },
            h('h2', {}, fv(e, 'journeys-heading')),
            h('p', {}, fv(e, 'journeys-subline'))
          ),
          h('div', { className: 'card-grid' },
            h('article', { className: 'goal-card', 'data-goal': 'learn' },
              h('div', { className: 'goal-card-head' }, h('p', { className: 'goal-card-tag' }, 'Learn it'), h('h3', {}, 'General English')),
              h('div', { className: 'goal-card-body' }, ul(lv(e, 'card-learn-list'))),
              h('div', { className: 'goal-card-foot' }, h('p', { className: 'goal-card-price' }, fv(e, 'card-learn-price')), h('p', { className: 'goal-card-date' }, fv(e, 'card-learn-date')))
            ),
            h('article', { className: 'goal-card', 'data-goal': 'teach' },
              h('div', { className: 'goal-card-head' }, h('p', { className: 'goal-card-tag' }, 'Teach it'), h('h3', {}, 'CELTA & DELTA')),
              h('div', { className: 'goal-card-body' }, ul(lv(e, 'card-teach-list'))),
              h('div', { className: 'goal-card-foot' }, h('p', { className: 'goal-card-price' }, fv(e, 'card-teach-price')), h('p', { className: 'goal-card-date' }, fv(e, 'card-teach-date')))
            ),
            h('article', { className: 'goal-card', 'data-goal': 'prove' },
              h('div', { className: 'goal-card-head' }, h('p', { className: 'goal-card-tag' }, 'Prove it'), h('h3', {}, 'IELTS · Cambridge · OET')),
              h('div', { className: 'goal-card-body' }, ul(lv(e, 'card-prove-list'))),
              h('div', { className: 'goal-card-foot' }, h('p', { className: 'goal-card-price' }, fv(e, 'card-prove-price')), h('p', { className: 'goal-card-date' }, fv(e, 'card-prove-date')))
            ),
            h('article', { className: 'goal-card', 'data-goal': 'fly' },
              h('div', { className: 'goal-card-head' }, h('p', { className: 'goal-card-tag' }, 'Fly with it'), h('h3', {}, 'Aviation English')),
              h('div', { className: 'goal-card-body' }, ul(lv(e, 'card-fly-list'))),
              h('div', { className: 'goal-card-foot' }, h('p', { className: 'goal-card-price' }, fv(e, 'card-fly-price')), h('p', { className: 'goal-card-date' }, fv(e, 'card-fly-date')))
            )
          )
        )
      ),
      h('section', { className: 'section-soft section-tight' },
        h('div', { className: 'container' },
          h('div', { className: 'stat-strip' },
            h('div', {}, h('p', { className: 'stat-num' }, fv(e, 'stat1-num')), h('p', { className: 'stat-label' }, fv(e, 'stat1-label'))),
            h('div', {}, h('p', { className: 'stat-num' }, fv(e, 'stat2-num')), h('p', { className: 'stat-label' }, fv(e, 'stat2-label'))),
            h('div', {}, h('p', { className: 'stat-num' }, fv(e, 'stat3-num')), h('p', { className: 'stat-label' }, fv(e, 'stat3-label'))),
            h('div', {}, h('p', { className: 'stat-num' }, fv(e, 'stat4-num')), h('p', { className: 'stat-label' }, fv(e, 'stat4-label')))
          )
        )
      ),
      h('section', {},
        h('div', { className: 'container' },
          h('div', { className: 'section-head' }, h('h2', {}, fv(e, 'why-heading'))),
          h('div', { className: 'feature-grid' },
            h('div', { className: 'feature' }, h('div', { className: 'feature-icon' }, '\u2605'), h('h4', {}, fv(e, 'why1-heading')), h('p', {}, fv(e, 'why1-text'))),
            h('div', { className: 'feature' }, h('div', { className: 'feature-icon' }, '\u2605'), h('h4', {}, fv(e, 'why2-heading')), h('p', {}, fv(e, 'why2-text'))),
            h('div', { className: 'feature' }, h('div', { className: 'feature-icon' }, '\u2605'), h('h4', {}, fv(e, 'why3-heading')), h('p', {}, fv(e, 'why3-text'))),
            h('div', { className: 'feature' }, h('div', { className: 'feature-icon' }, '\u2605'), h('h4', {}, fv(e, 'why4-heading')), h('p', {}, fv(e, 'why4-text')))
          )
        )
      ),
      h('section', { className: 'section-soft' },
        h('div', { className: 'container' },
          h('div', { className: 'section-head' }, h('h2', {}, 'What our students say')),
          h('div', { className: 'testimonial-grid' },
            h('div', { className: 'testimonial' }, h('p', { className: 'quote' }, fv(e, 'testi1-quote')), h('p', { className: 'who' }, fv(e, 'testi1-who'))),
            h('div', { className: 'testimonial' }, h('p', { className: 'quote' }, fv(e, 'testi2-quote')), h('p', { className: 'who' }, fv(e, 'testi2-who'))),
            h('div', { className: 'testimonial' }, h('p', { className: 'quote' }, fv(e, 'testi3-quote')), h('p', { className: 'who' }, fv(e, 'testi3-who')))
          )
        )
      ),
      h('section', { className: 'section-navy' },
        h('div', { className: 'container' },
          h('div', { className: 'section-head' }, h('h2', {}, 'Three free ways to begin')),
          h('div', { className: 'quickstart-grid' },
            h('div', { className: 'quickstart' }, h('h4', {}, fv(e, 'way1-heading')), h('p', {}, fv(e, 'way1-text'))),
            h('div', { className: 'quickstart' }, h('h4', {}, fv(e, 'way2-heading')), h('p', {}, fv(e, 'way2-text'))),
            h('div', { className: 'quickstart' }, h('h4', {}, fv(e, 'way3-heading')), h('p', {}, fv(e, 'way3-text')))
          )
        )
      ),
      h('section', { className: 'section-soft' },
        h('div', { className: 'container' },
          h('div', { className: 'section-head' }, h('h2', {}, fv(e, 'cta-heading')))
        )
      )
    );
  }
});
CMS.registerPreviewTemplate('home', HomePreview);

/* ---------------- COURSES ---------------- */
var CoursesPreview = createClass({
  render: function () {
    var e = this.props.entry;
    var cards = [
      ['learn1', 'Learn'], ['learn2', 'Learn'], ['learn3', 'Learn'],
      ['teach1', 'Teach'], ['teach2', 'Teach'],
      ['prove1', 'Prove'], ['prove2', 'Prove'],
      ['fly1', 'Fly'], ['more1', 'More'], ['more2', 'More'], ['more3', 'More']
    ];
    return h('div', { className: 'preview-page' },
      h('section', { className: 'hero' },
        h('div', { className: 'container' },
          h('h1', {}, fv(e, 'heading')),
          h('p', { className: 'lede' }, fv(e, 'intro'))
        )
      ),
      h('section', { className: 'section-tight' },
        h('div', { className: 'container' },
          h('div', { className: 'card-grid' },
            cards.map(function (c) {
              return h('article', { className: 'goal-card', key: c[0] },
                h('div', { className: 'goal-card-head' }, h('p', { className: 'goal-card-tag' }, c[1]), h('h3', {}, fv(e, c[0] + '-title'))),
                h('div', { className: 'goal-card-body' }, h('p', { className: 'text-muted', style: { fontSize: '13px' } }, fv(e, c[0] + '-desc'))),
                h('div', { className: 'goal-card-foot' }, h('p', { className: 'goal-card-date' }, fv(e, c[0] + '-date')))
              );
            })
          ),
          h('p', { className: 'filter-note' }, fv(e, 'note'))
        )
      ),
      h('section', { className: 'section-navy' },
        h('div', { className: 'container' }, h('h2', { style: { color: '#fff' } }, fv(e, 'cta-heading')))
      )
    );
  }
});
CMS.registerPreviewTemplate('courses', CoursesPreview);

/* ---------------- CELTA ---------------- */
var CeltaPreview = createClass({
  render: function () {
    var e = this.props.entry;
    return h('div', { className: 'preview-page' },
      h('section', { className: 'hero accent-teach' },
        h('div', { className: 'container' },
          h('p', { className: 'eyebrow on-accent' }, 'Teach it — Teacher Training'),
          h('h1', {}, fv(e, 'heading')),
          h('p', { className: 'lede' }, fv(e, 'intro'))
        )
      ),
      h('section', { className: 'section-tight' },
        h('div', { className: 'container two-col' },
          h('div', {},
            h('div', { className: 'info-strip' }, h('h4', {}, fv(e, 'desc-heading')), h('p', {}, fv(e, 'desc-text'))),
            h('div', { className: 'info-strip' }, h('h4', {}, fv(e, 'profile-heading')), h('p', {}, fv(e, 'profile-text'))),
            h('div', { className: 'info-strip' }, h('h4', {}, fv(e, 'reqs-heading')), h('p', {}, fv(e, 'reqs-text'))),
            h('div', { className: 'info-strip' }, h('h4', {}, fv(e, 'assess-heading')), h('p', {}, fv(e, 'assess-text'))),
            h('div', { className: 'info-strip' }, h('h4', {}, fv(e, 'practice-heading')), h('p', {}, fv(e, 'practice-text'))),
            h('div', { className: 'step-row' },
              h('div', { className: 'step' }, h('span', { className: 'step-num' }, '1'), h('p', {}, fv(e, 'step1'))),
              h('div', { className: 'step' }, h('span', { className: 'step-num' }, '2'), h('p', {}, fv(e, 'step2'))),
              h('div', { className: 'step' }, h('span', { className: 'step-num' }, '3'), h('p', {}, fv(e, 'step3'))),
              h('div', { className: 'step' }, h('span', { className: 'step-num' }, '4'), h('p', {}, fv(e, 'step4')))
            )
          ),
          h('aside', {},
            h('div', { className: 'keyfacts' },
              h('p', { className: 'price' }, fv(e, 'price')),
              h('p', { className: 'price-note' }, fv(e, 'price-note')),
              ul(lv(e, 'keyfacts-list'))
            ),
            h('div', { className: 'dates-card' }, h('h4', {}, '2026 face-to-face dates'), ul(lv(e, 'dates-list')))
          )
        )
      )
    );
  }
});
CMS.registerPreviewTemplate('celta', CeltaPreview);

/* ---------------- EXAMS ---------------- */
var ExamsPreview = createClass({
  render: function () {
    var e = this.props.entry;
    return h('div', { className: 'preview-page' },
      h('section', { className: 'hero accent-prove' },
        h('div', { className: 'container' },
          h('h1', {}, fv(e, 'heading')),
          h('p', { className: 'lede' }, fv(e, 'intro'))
        )
      ),
      h('section', { className: 'section-tight' },
        h('div', { className: 'container' },
          h('div', { className: 'pricing-grid' },
            h('div', { className: 'price-card', style: { borderTop: '4px solid var(--green)' } }, h('h4', {}, 'IELTS'), ul(lv(e, 'ielts-list')), h('p', { className: 'amount' }, fv(e, 'ielts-price'))),
            h('div', { className: 'price-card', style: { borderTop: '4px solid var(--green)' } }, h('h4', {}, 'Cambridge ESOL'), ul(lv(e, 'cambridge-list')), h('p', { className: 'amount' }, fv(e, 'cambridge-price'))),
            h('div', { className: 'price-card', style: { borderTop: '4px solid var(--green)' } }, h('h4', {}, 'OET'), ul(lv(e, 'oet-list')), h('p', { className: 'amount' }, fv(e, 'oet-price')))
          )
        )
      ),
      h('section', { className: 'section-soft' },
        h('div', { className: 'container' },
          h('div', { className: 'section-head' }, h('h2', {}, fv(e, 'prep-heading')), h('p', {}, fv(e, 'prep-text'))),
          h('div', { className: 'pricing-grid' },
            h('div', { className: 'price-card' }, h('h4', {}, fv(e, 'inclass-title')), h('p', { className: 'amount' }, fv(e, 'inclass-price')), h('p', { className: 'detail' }, fv(e, 'inclass-detail'))),
            h('div', { className: 'price-card' }, h('h4', {}, fv(e, 'private-title')), h('p', { className: 'amount' }, fv(e, 'private-price')), h('p', { className: 'detail' }, fv(e, 'private-detail'))),
            h('div', { className: 'price-card' }, h('h4', {}, fv(e, 'online-title')), h('p', { className: 'amount' }, fv(e, 'online-price')), h('p', { className: 'detail' }, fv(e, 'online-detail')))
          )
        )
      ),
      h('section', { className: 'section-navy' },
        h('div', { className: 'container' }, h('h2', { style: { color: '#fff' } }, fv(e, 'cta-heading')))
      )
    );
  }
});
CMS.registerPreviewTemplate('exams', ExamsPreview);

/* ---------------- AVIATION ---------------- */
var AviationPreview = createClass({
  render: function () {
    var e = this.props.entry;
    return h('div', { className: 'preview-page' },
      h('section', { className: 'hero accent-fly' },
        h('div', { className: 'container two-col' },
          h('div', {}, h('h1', {}, fv(e, 'heading')), h('p', { className: 'lede' }, fv(e, 'intro'))),
          h('div', { className: 'keyfacts' },
            h('h4', {}, fv(e, 'accred-title')),
            h('p', { className: 'text-muted' }, fv(e, 'accred-text'))
          )
        )
      ),
      h('section', { className: 'section-tight' },
        h('div', { className: 'container' },
          h('h2', {}, fv(e, 'intro2-heading')),
          h('p', { className: 'text-muted' }, fv(e, 'intro2-p1')),
          h('p', { className: 'text-muted' }, fv(e, 'intro2-p2'))
        )
      ),
      h('section', { className: 'section-soft' },
        h('div', { className: 'container' },
          h('div', { className: 'section-head' }, h('h2', {}, fv(e, 'criteria-heading'))),
          h('div', { className: 'two-col' },
            h('div', { className: 'contact-card' }, h('h4', {}, fv(e, 'levels-heading')), h('p', { className: 'text-muted' }, fv(e, 'levels-footnote'))),
            h('div', { className: 'contact-card' }, h('h4', {}, fv(e, 'test-heading')), h('p', { className: 'text-muted' }, fv(e, 'test-intro')), ul(lv(e, 'test-list')))
          )
        )
      ),
      h('section', { className: 'section-navy' },
        h('div', { className: 'container' }, h('h2', { style: { color: '#fff' } }, fv(e, 'prepare-heading')), h('p', { style: { color: 'var(--text-onnavy)' } }, fv(e, 'prepare-text')))
      )
    );
  }
});
CMS.registerPreviewTemplate('aviation', AviationPreview);

/* ---------------- ABOUT ---------------- */
var AboutPreview = createClass({
  render: function () {
    var e = this.props.entry;
    var team = ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8'];
    return h('div', { className: 'preview-page' },
      h('section', { className: 'hero' },
        h('div', { className: 'container' }, h('h1', {}, fv(e, 'heading')), h('p', { className: 'lede' }, fv(e, 'intro')))
      ),
      h('section', { className: 'section-tight' },
        h('div', { className: 'container' }, h('h3', {}, 'Facilities'), ul(lv(e, 'facilities-list')))
      ),
      h('section', { className: 'section-soft' },
        h('div', { className: 'container' },
          h('div', { className: 'section-head' }, h('h2', {}, 'Our teachers')),
          h('div', { className: 'team-grid' },
            team.map(function (t) {
              return h('div', { className: 'team-card', key: t },
                h('div', { className: 'team-avatar' }, fv(e, t + '-name').charAt(0)),
                h('h4', {}, fv(e, t + '-name')),
                h('p', { className: 'role' }, fv(e, t + '-role'))
              );
            })
          )
        )
      ),
      h('section', { className: 'section-tight' },
        h('div', { className: 'container two-col' },
          h('div', {}, h('h3', {}, fv(e, 'social-heading')), h('p', { className: 'text-muted' }, fv(e, 'social-text'))),
          h('div', { className: 'contact-card' }, h('h3', {}, fv(e, 'charity-heading')), h('p', { className: 'text-muted' }, fv(e, 'charity-text')))
        )
      ),
      h('section', { className: 'section-navy' },
        h('div', { className: 'container' }, h('h2', { style: { color: '#fff' } }, fv(e, 'cta-heading')))
      )
    );
  }
});
CMS.registerPreviewTemplate('about', AboutPreview);

/* ---------------- CONTACT ---------------- */
var ContactPreview = createClass({
  render: function () {
    var e = this.props.entry;
    return h('div', { className: 'preview-page' },
      h('section', { className: 'hero' },
        h('div', { className: 'container' }, h('h1', {}, fv(e, 'heading')), h('p', { className: 'lede' }, fv(e, 'intro')))
      ),
      h('section', { className: 'section-tight' },
        h('div', { className: 'container' },
          h('div', { className: 'contact-card' },
            h('dl', { className: 'contact-info' },
              h('dt', {}, 'Address'), h('dd', {}, fv(e, 'address')),
              h('dt', {}, 'Phone'), h('dd', {}, fv(e, 'phone')),
              h('dt', {}, 'Email'), h('dd', {}, fv(e, 'email'))
            ),
            h('p', { className: 'text-muted', style: { fontSize: '12.5px', marginTop: '14px' } }, fv(e, 'departments'))
          ),
          h('div', { className: 'map-embed', style: { marginTop: '20px' } }, fv(e, 'map-note'))
        )
      )
    );
  }
});
CMS.registerPreviewTemplate('contact', ContactPreview);

/* ---------------- FOOTER ---------------- */
var FooterPreview = createClass({
  render: function () {
    var e = this.props.entry;
    return h('footer', { className: 'site-footer' },
      h('div', { className: 'container' },
        h('div', { className: 'footer-top' },
          h('div', {},
            h('h4', {}, fv(e, 'name')),
            h('p', {}, fv(e, 'tagline')),
            h('p', {}, fv(e, 'address')),
            h('p', {}, fv(e, 'contact')),
            h('p', { className: 'footer-support' }, fv(e, 'charity'))
          )
        ),
        h('div', { className: 'footer-bottom' }, fv(e, 'copyright'))
      )
    );
  }
});
CMS.registerPreviewTemplate('footer', FooterPreview);
