#!/usr/bin/env node
/**
 * ═══════════════════════════════════════════════════════════
 * ZeroBurocrazia — Generatore guide automatico
 * ═══════════════════════════════════════════════════════════
 *
 * USO:
 *   node generate-guide.js dati-guida.json
 *
 * Il JSON deve avere questa struttura (vedi TEMPLATE.json):
 * {
 *   "slug": "bonus-bollette",
 *   "category": "fisco",          // fisco|casa|famiglia|documenti|lavoro|salute|auto|pensione
 *   "categoryLabel": "Fisco e soldi",
 *   "categoryEmoji": "💰",
 *   "title": "Bonus Bollette Luce e Gas 2026",
 *   "metaTitle": "Bonus Bollette Luce e Gas 2026: requisiti ISEE, importi e come ottenerlo",
 *   "metaDesc": "Bonus bollette luce e gas 2026: chi ne ha diritto...",
 *   "keywords": ["bonus bollette 2026", ...],
 *   "heroH1": "Bonus <em>Bollette</em><br/>Luce e Gas",
 *   "heroSub": "Quanto vale, chi ne ha diritto...",
 *   "heroPills": [
 *     { "class": "pill-g", "emoji": "✦", "text": "100% gratuita" },
 *     ...
 *   ],
 *   "heroSource": "ARERA · INPS · Gazzetta Ufficiale",
 *   "heroStats": [
 *     { "value": "315€", "label": "risparmio max sulla luce<br/>bonus + decreto 2026" },
 *     ...
 *   ],
 *   "tocItems": [
 *     { "id": "sintesi", "label": "In sintesi" },
 *     { "id": "cose", "label": "Cos'è", "bh": true },
 *     ...
 *   ],
 *   "percorsoGuide": [
 *     { "href": "/isee", "emoji": "📋", "label": "ISEE" },
 *     ...
 *   ],
 *   "percorsoLinks": [
 *     { "href": "https://www.arera.it/...", "emoji": "⚡", "label": "ARERA — Bonus sociale" },
 *     ...
 *   ],
 *   "glossario": [
 *     { "term": "ARERA", "def": "L'Autorità che regola energia..." },
 *     ...
 *   ],
 *   "sintesiCards": [
 *     { "emoji": "💡", "value": "~168€", "label": "bonus luce/anno<br/>(1-2 persone)", "class": "bl" },
 *     ...
 *   ],
 *   "sections": [
 *     {
 *       "id": "cose",
 *       "tag": "Le basi",
 *       "title": "Cos'è il bonus bollette",
 *       "breveHide": false,
 *       "content": "<p>Il bonus bollette...</p>"
 *     },
 *     ...
 *   ],
 *   "faqItems": [
 *     { "q": "Come si richiede...?", "a": "Non serve fare domanda..." },
 *     ...
 *   ],
 *   "related": [
 *     { "href": "/isee", "emoji": "📋", "title": "Faccio l'ISEE", "desc": "Come farlo gratis..." },
 *     ...
 *   ],
 *   "sidebarLinks": [
 *     { "href": "https://www.arera.it/...", "emoji": "⚡", "name": "ARERA", "desc": "Bonus sociale ufficiale" },
 *     ...
 *   ],
 *   "sidebarGuide": [
 *     { "href": "/isee", "emoji": "📋", "label": "ISEE" },
 *     ...
 *   ],
 *   "ogImage": "ogbonusbollette.png",
 *   "datePublished": "2026-03-19",
 *   "dateModified": "2026-03-19"
 * }
 *
 * OUTPUT:
 *   - app/{slug}/page.js (pronto per push)
 *   - Aggiorna categoriesData.js
 *   - Aggiorna megaMenuData.js
 *   - Aggiorna searchIndex.js
 *   - Aggiorna sitemap.xml
 *   - Log di tutto ciò che ha fatto
 */

const fs = require('fs');
const path = require('path');

// ─── Helpers ─────────────────────────────────
function esc(s) {
  // Escape per stringhe JS: apostrofi italiani, quotes
  return s
    .replace(/'/g, "\\u2019")  // ' → unicode right single quote
    .replace(/"/g, "\\u201C"); // " → unicode left double quote (opzionale)
}

function escJSX(s) {
  // In JSX il contenuto HTML va con &apos; ecc.
  // Ma noi usiamo già le entities nel JSON, quindi passiamo raw
  return s;
}

function emojiToUnicode(emoji) {
  // Converte emoji in {'\uXXXX'} JSX format
  const codePoints = [...emoji].map(c => {
    const cp = c.codePointAt(0);
    if (cp > 0xFFFF) {
      // Surrogate pair
      const hi = Math.floor((cp - 0x10000) / 0x400) + 0xD800;
      const lo = (cp - 0x10000) % 0x400 + 0xDC00;
      return `\\u${hi.toString(16).toUpperCase()}\\u${lo.toString(16).toUpperCase()}`;
    }
    return `\\u${cp.toString(16).toUpperCase().padStart(4, '0')}`;
  }).join('');
  return `{'${codePoints}'}`;
}

// ─── Main ────────────────────────────────────
const jsonPath = process.argv[2];
if (!jsonPath) {
  console.error('USO: node generate-guide.js dati-guida.json');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
const repoRoot = path.resolve(__dirname);

// ─── 1. Generate page.js ─────────────────────
function generatePageJS(d) {
  const catClass = `cat-${d.category}`;

  // FAQ items as JS
  const faqItemsJS = d.faqItems.map(f =>
    `  { q: ${JSON.stringify(f.q)}, a: ${JSON.stringify(f.a)} }`
  ).join(',\n');

  // TOC items as JS
  const tocItemsJS = d.tocItems.map(t => {
    const bh = t.bh ? ', bh: true' : '';
    return `  { id: '${t.id}', label: ${JSON.stringify(t.label)}${bh} }`;
  }).join(',\n');

  // Hero pills
  const pillsJSX = d.heroPills.map(p =>
    `              <span className="${p.class}">${emojiToUnicode(p.emoji)} ${p.text}</span>`
  ).join('\n');

  // Hero stats
  const statsJSX = d.heroStats.map(s =>
    `            <div className="hstat"><div className="hn">${s.value}</div><div className="hl">${s.label}</div></div>`
  ).join('\n');

  // Sintesi cards
  const sintesiJSX = d.sintesiCards.map((c, i) => {
    const cls = c.class ? ` ${c.class}` : '';
    const delay = `d${(i % 4) + 1}`;
    return `                <div className="sc${cls} r ${delay}"><div className="si">${emojiToUnicode(c.emoji)}</div><div className="sn">${c.value}</div><div className="sl">${c.label}</div></div>`;
  }).join('\n');

  // Glossario
  const glossarioJSX = d.glossario ? d.glossario.map((g, i) => {
    const delay = `d${(i % 4) + 1}`;
    return `              <div className="gl-item r ${delay}"><strong>${g.term}</strong> &mdash; ${g.def}</div>`;
  }).join('\n') : '';

  // Percorso guide
  const percGuideJSX = d.percorsoGuide.map(p =>
    `              <a href="${p.href}" className="ps">${emojiToUnicode(p.emoji)} ${p.label}</a>`
  ).join('\n');

  // Percorso links
  const percLinksJSX = d.percorsoLinks ? d.percorsoLinks.map(p =>
    `              <a href="${p.href}" target="_blank" rel="noopener noreferrer" className="ps">${emojiToUnicode(p.emoji)} ${p.label}</a>`
  ).join('\n') : '';

  // Sections content
  const sectionsJSX = d.sections.map(s => {
    const bh = s.breveHide ? ' breve-hide' : '';
    return `
          {/* ${s.id.toUpperCase()} */}
          <div className="sec${bh} r" id="${s.id}">
            <div className="sec-tag">${s.tag}</div>
            <h2>${s.title}</h2>
            ${s.content}
          </div>`;
  }).join('\n');

  // Related
  const relatedJSX = d.related.map((r, i) => {
    const delay = `r d${(i % 4) + 1}`;
    return `              <a href="${r.href}" className="rc ${delay}"><span className="rc-e">${emojiToUnicode(r.emoji)}</span><div className="rc-t">${r.title}</div><div className="rc-d">${r.desc}</div><span className="rc-ar">&rarr;</span></a>`;
  }).join('\n');

  // Sidebar links
  const sbLinksJSX = d.sidebarLinks ? d.sidebarLinks.map(l =>
    `            <a href="${l.href}" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">${emojiToUnicode(l.emoji)}</span><div><div className="sbtool-n">${l.name}</div><div className="sbtool-d">${l.desc}</div></div></a>`
  ).join('\n') : '';

  // Sidebar guide
  const sbGuideJSX = d.sidebarGuide.map(g =>
    `            <a href="${g.href}" className="sbguide">${emojiToUnicode(g.emoji)} ${g.label}<span className="sbg-ar">&rarr;</span></a>`
  ).join('\n');

  // Compose full page.js
  return `import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import GuideEnhancer from '@/components/GuideEnhancer';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import Tip from '@/components/Tip';
import VersionToggle from '@/components/VersionToggle';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: ${JSON.stringify(d.metaTitle)},
  description: ${JSON.stringify(d.metaDesc)},
  keywords: ${JSON.stringify(d.keywords)},
  alternates: { canonical: 'https://zeroburocrazia.it/${d.slug}' },
  openGraph: {
    title: ${JSON.stringify(d.metaTitle)},
    description: ${JSON.stringify(d.metaDesc)},
    url: 'https://zeroburocrazia.it/${d.slug}',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/${d.ogImage}', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/${d.ogImage}'] },
};

const tocItems = [
${tocItemsJS}
];

const faqItems = [
${faqItemsJS}
];

export default function GuidePage() {
  const schemas = [
    articleSchema({
      title: ${JSON.stringify(d.metaTitle)},
      description: ${JSON.stringify(d.metaDesc)},
      url: '/${d.slug}',
      image: '${d.ogImage}',
      datePublished: '${d.datePublished}',
      dateModified: '${d.dateModified}',
    }),
    faqSchema(faqItems),
  ];

  return (
    <div className="${catClass}">
    <>
      <Nav variant="scheda" />
      <ScrollReveal />
      <GuideEnhancer />
      <SchemaOrg schemas={schemas} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-mesh"></div>
        <div className="blob b1"></div>
        <div className="blob b2"></div>
        <div className="blob b3"></div>
        <svg className="ring" viewBox="0 0 360 360" fill="none">
          <circle cx="180" cy="180" r="170" stroke="#0F4C5C" strokeWidth="1"/>
          <circle cx="180" cy="180" r="130" stroke="#0F4C5C" strokeWidth=".8"/>
          <circle cx="180" cy="180" r="90"  stroke="#E36414" strokeWidth=".8"/>
          <line x1="10"  y1="180" x2="350" y2="180" stroke="#0F4C5C" strokeWidth=".6"/>
          <line x1="180" y1="10"  x2="180" y2="350" stroke="#0F4C5C" strokeWidth=".6"/>
          <circle cx="180" cy="10"  r="4" fill="#E36414" opacity=".6"/>
          <circle cx="180" cy="350" r="4" fill="#E36414" opacity=".6"/>
          <circle cx="10"  cy="180" r="4" fill="#2A9D8F" opacity=".6"/>
          <circle cx="350" cy="180" r="4" fill="#2A9D8F" opacity=".6"/>
        </svg>
        <div className="shimmer-line"></div>
        <div className="hero-c">
          <div className="hero-left">
            <div className="cat-badge">${emojiToUnicode(d.categoryEmoji)} ${d.categoryLabel}</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>${d.heroH1}</h1>
            <p className="hero-sub">${d.heroSub}</p>
            <div className="hero-pills">
${pillsJSX}
            </div>
            <div className="hero-source"><strong>Fonti:</strong> ${d.heroSource}</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
${statsJSX}
          </div>
        </div>
      </section>

      {/* TOC */}
      <TOC items={tocItems} />

      {/* CONTENT */}
      <div className="layout">
        <main className="main">

          {/* PERCORSO */}
          <div className="perc r">
            <span className="perc-label">Guide correlate</span>
            <div className="perc-steps">
${percGuideJSX}
            </div>
          </div>
${percLinksJSX ? `
          <div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
${percLinksJSX}
            </div>
          </div>
` : ''}
${glossarioJSX ? `
          {/* GLOSSARIO */}
          <div className="sec r" id="glossario">
            <div className="glossary r">
${glossarioJSX}
            </div>
          </div>
` : ''}
          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">{${"'\\u26A1'"}} In sintesi</div>
              <div className="scards">
${sintesiJSX}
              </div>
            </div>
          </div>
${sectionsJSX}

          {/* FAQ */}
          <div className="sec breve-hide r" id="faq">
            <div className="sec-tag">Risposte rapide</div>
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          {/* GUIDE CORRELATE */}
          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
${relatedJSX}
            </div>
          </div>

        </main>

        {/* SIDEBAR */}
        <aside className="aside">
          <SidebarToggle />
${sbLinksJSX ? `          <div className="sbsec">
            <div className="sbsec-t">{${"'\\uD83D\\uDD17'"}} Link utili</div>
${sbLinksJSX}
          </div>` : ''}
          <div className="sbsec">
            <div className="sbsec-t">{${"'\\uD83D\\uDCDA'"}} Guide correlate</div>
${sbGuideJSX}
          </div>
        </aside>
      </div>

      <Footer variant="scheda" />
    </>
    </div>
  );
}
`;
}

// ─── 2. Update categoriesData.js ─────────────
function updateCategories(d) {
  const filePath = path.join(repoRoot, 'components', 'categoriesData.js');
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if already exists
  if (content.includes(`href: '/${d.slug}'`)) {
    console.log('  ⏭  categoriesData.js: guida già presente, skip');
    return;
  }

  // Find the category and add the guide
  const catMap = {
    fisco: 'Fisco e soldi',
    casa: 'Casa',
    famiglia: 'Famiglia',
    documenti: 'Documenti',
    lavoro: 'Lavoro',
    salute: 'Salute',
    auto: 'Auto',
    pensione: 'Pensione',
  };
  const catTitle = catMap[d.category];
  // Find the last guide in the category and add after it
  const entry = d.categoriesEntry || {
    emoji: d.categoryEmoji,
    name: d.title.replace(/ 2026.*$/, ''),
    desc: d.metaDesc.substring(0, 30) + '...',
    tag: '💰 Bonus'
  };

  // Handle both empty (guides: []) and populated arrays
  const newGuide = `{ emoji: '${entry.emoji}', name: '${entry.name}', href: '/${d.slug}', desc: '${entry.desc}', tag: '${entry.tag}' }`;

  // Try empty array first: guides: []
  const emptyRegex = new RegExp(`(title: '${catTitle}'[\\s\\S]*?)guides: \\[\\]`);
  const emptyMatch = content.match(emptyRegex);
  if (emptyMatch) {
    content = content.replace(emptyRegex, `$1guides: [\n      ${newGuide},\n    ]`);
    fs.writeFileSync(filePath, content);
    console.log('  ✅ categoriesData.js aggiornato (categoria era vuota)');
    return;
  }

  // Try populated array: find last entry before ],
  const catRegex = new RegExp(`(title: '${catTitle}'[\\s\\S]*?guides: \\[[\\s\\S]*?)(\\n    \\],)`);
  const match = content.match(catRegex);
  if (match) {
    content = content.replace(catRegex, `$1\n      ${newGuide},$2`);
    fs.writeFileSync(filePath, content);
    console.log('  ✅ categoriesData.js aggiornato');
  } else {
    console.log('  ⚠️  categoriesData.js: categoria non trovata, aggiorna manualmente');
  }
}

// ─── 3. Update sitemap.xml ───────────────────
function updateSitemap(d) {
  const filePath = path.join(repoRoot, 'public', 'sitemap.xml');
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes(`/${d.slug}</loc>`)) {
    console.log('  ⏭  sitemap.xml: URL già presente, skip');
    return;
  }

  const newUrl = `  <url><loc>https://zeroburocrazia.it/${d.slug}</loc><lastmod>${d.dateModified}</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>`;
  content = content.replace('</urlset>', `${newUrl}\n</urlset>`);
  fs.writeFileSync(filePath, content);
  console.log('  ✅ sitemap.xml aggiornato');
}

// ─── 4. Update searchIndex.js ────────────────
function updateSearchIndex(d) {
  if (!d.searchTerms || d.searchTerms.length === 0) {
    console.log('  ⏭  searchIndex.js: nessun search term, skip');
    return;
  }

  const filePath = path.join(repoRoot, 'components', 'searchIndex.js');
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes(`href: '/${d.slug}'`)) {
    console.log('  ⏭  searchIndex.js: guide già presente, skip');
    return;
  }

  const entries = d.searchTerms.map(st =>
    `  { keywords: ${JSON.stringify(st.keywords)}, guide: ${JSON.stringify(d.title)}, href: '/${d.slug}${st.anchor || ''}', desc: ${JSON.stringify(st.desc)} }`
  ).join(',\n');

  const block = `\n  // ═══ ${d.title.toUpperCase()} ═══\n${entries},`;
  content = content.replace(/\];(\s*)$/, `${block}\n];$1`);
  fs.writeFileSync(filePath, content);
  console.log('  ✅ searchIndex.js aggiornato');
}

// ─── 5. Update megaMenuData.js ───────────────
function updateMegaMenu(d) {
  if (!d.megaMenuEntry) {
    console.log('  ⏭  megaMenuData.js: nessun megaMenuEntry, skip');
    return;
  }

  const filePath = path.join(repoRoot, 'components', 'megaMenuData.js');
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes(`href: '/${d.slug}'`)) {
    console.log('  ⏭  megaMenuData.js: link già presente, skip');
    return;
  }

  // Find the subcategory and add the link
  const { subTitle, name } = d.megaMenuEntry;
  const subRegex = new RegExp(`(title: '${subTitle}', links: \\[[\\s\\S]*?)(\\n      \\]\\})`);
  const match = content.match(subRegex);
  if (match) {
    const newLink = `\n        { name: '${name}', href: '/${d.slug}' },`;
    content = content.replace(subRegex, `$1${newLink}$2`);
    fs.writeFileSync(filePath, content);
    console.log('  ✅ megaMenuData.js aggiornato');
  } else {
    console.log('  ⚠️  megaMenuData.js: sottocategoria non trovata, aggiorna manualmente');
  }
}

// ─── Execute ─────────────────────────────────
console.log(`\n🚀 Generatore guida: ${data.title}`);
console.log(`   Slug: /${data.slug}`);
console.log(`   Categoria: ${data.category}\n`);

// 1. Create page.js
const guideDir = path.join(repoRoot, 'app', data.slug);
if (!fs.existsSync(guideDir)) {
  fs.mkdirSync(guideDir, { recursive: true });
}
const pageJS = generatePageJS(data);
fs.writeFileSync(path.join(guideDir, 'page.js'), pageJS);
console.log(`  ✅ app/${data.slug}/page.js creato (${pageJS.length} chars)`);

// 2. Update categoriesData
updateCategories(data);

// 3. Update sitemap
updateSitemap(data);

// 4. Update searchIndex
updateSearchIndex(data);

// 5. Update megaMenu
updateMegaMenu(data);

console.log(`\n✨ Fatto! Prossimi passi:`);
console.log(`   1. Crea OG image: public/og${data.slug.replace(/-/g, '')}.png`);
console.log(`   2. git add app/${data.slug}/page.js components/ public/`);
console.log(`   3. git commit -m "Guida #XX: ${data.title}"`);
console.log(`   4. git push origin main\n`);
