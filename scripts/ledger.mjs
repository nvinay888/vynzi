// Renders the content ledger (every string that will appear on the site + its source) to CONTENT-LEDGER.md.
// Run: node scripts/ledger.mjs   (Node 24 strips the TS types in src/content/*.ts natively)
import { writeFileSync } from 'node:fs';
import { home, homeSources } from '../src/content/home.ts';
import { overview, overviewSources, practices, practiceSources } from '../src/content/services.ts';
import { industries, industriesSources } from '../src/content/industries.ts';
import { about, aboutSources } from '../src/content/about.ts';
import { insights, insightsSources } from '../src/content/insights.ts';
import { contact, contactSources } from '../src/content/contact.ts';
import { careers, privacy, terms, utilitySources } from '../src/content/utility.ts';

const pages = [
  ['Home (/)', home, homeSources],
  ['Services overview (/services)', overview, overviewSources],
  ...practices.map((p) => [`${p.name} (/services/${p.slug})`, p, practiceSources[p.slug]]),
  ['Industries (/industries)', industries, industriesSources],
  ['About (/about)', about, aboutSources],
  ['Insights (/insights)', insights, insightsSources],
  ['Contact (/contact)', contact, contactSources],
  ['Careers (/careers)', { careers }, utilitySources],
  ['Privacy (/privacy)', { privacy }, utilitySources],
  ['Terms (/terms)', { terms }, utilitySources],
];

const SKIP = new Set(['slug', 'icon', 'accent', 'key', 'short', 'photo', 'type', 'date']);
function lookup(sources, path) {
  let best = null;
  for (const k of Object.keys(sources)) if (path === k || path.startsWith(k + '.') || path.startsWith(k + '[')) if (!best || k.length > best.length) best = k;
  if (!best) return { src: '—', note: '' };
  const v = sources[best];
  return typeof v === 'string' ? { src: v, note: '' } : v;
}
function walk(node, path, out, sources) {
  if (node == null) return;
  if (typeof node === 'string') { if (!SKIP.has(path.split(/[.\[]/).pop())) out.push([path, node]); return; }
  if (Array.isArray(node)) {
    if (node.length === 0) { out.push([path, '(empty — slot only)']); return; }
    node.forEach((n, i) => walk(n, `${path}[${i}]`, out, sources)); return;
  }
  if (typeof node === 'object') for (const [k, v] of Object.entries(node)) { if (SKIP.has(k)) continue; walk(v, path ? `${path}.${k}` : k, out, sources); }
}

const counts = {};
let md = `# Content ledger\n\nGenerated ${new Date().toISOString().slice(0, 10)} by \`scripts/ledger.mjs\`. Every string that renders on the site, with where it came from.\n\n` +
  `Legend: **OLD-SITE** vynzicfo.com copy (verbatim or trimmed) · **BLUEPRINT** founder's deck · **EDITED** rewritten, origin noted · **NEEDS-INPUT** slot only, nothing renders.\n\n`;
for (const [title, content, sources] of pages) {
  const rows = [];
  walk(content, '', rows, sources);
  md += `## ${title}\n\n| Block | Source | Text |\n|---|---|---|\n`;
  let lastNote = '';
  for (const [path, text] of rows) {
    const { src, note } = lookup(sources, path);
    counts[src] = (counts[src] || 0) + 1;
    const noteCell = note && note !== lastNote ? ` <br><sub>${note}</sub>` : '';
    lastNote = note;
    md += `| \`${path}\` | ${src}${noteCell} | ${String(text).replace(/\|/g, '\\|')} |\n`;
  }
  md += '\n';
}
md += `## Totals\n\n| Source | Blocks |\n|---|---|\n` + Object.entries(counts).map(([k, v]) => `| ${k} | ${v} |`).join('\n') + '\n';
writeFileSync('CONTENT-LEDGER.md', md);
console.log('✓ CONTENT-LEDGER.md written', counts);
