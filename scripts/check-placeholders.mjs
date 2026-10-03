// Fails the build if any content placeholder marker reaches the output HTML.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
const MARK = 'NEEDS-INPUT';
function walk(d, out = []) { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p, out) : p.endsWith('.html') && out.push(p); } return out; }
const hits = walk('dist').filter(p => readFileSync(p, 'utf8').includes(MARK));
if (hits.length) { console.error(`✖ ${MARK} marker found in:\n` + hits.map(h => '  ' + h).join('\n')); process.exit(1); }
console.log('✓ no placeholder markers in dist');
