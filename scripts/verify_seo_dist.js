import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const files = getHtmlFiles(distDir);
const report = [];

for (const f of files) {
  const rel = path.relative(distDir, f);
  const content = fs.readFileSync(f, 'utf8');

  const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
  const descMatch = content.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i);
  const ogTitleMatch = content.match(/<meta\s+property="og:title"\s+content="([^"]*)"/i);
  const ogUrlMatch = content.match(/<meta\s+property="og:url"\s+content="([^"]*)"/i);

  report.push({
    file: rel,
    title: titleMatch ? titleMatch[1] : 'MISSING',
    hasDescription: !!descMatch,
    canonical: canonicalMatch ? canonicalMatch[1] : 'MISSING',
    hasOgTitle: !!ogTitleMatch,
    ogUrl: ogUrlMatch ? ogUrlMatch[1] : 'MISSING'
  });
}

console.log(`Total HTML files scanned: ${report.length}`);
const missingCanonical = report.filter(r => r.canonical === 'MISSING');
const missingTitle = report.filter(r => r.title === 'MISSING');
console.log(`Missing canonicals: ${missingCanonical.length}`);
console.log(`Missing titles: ${missingTitle.length}`);
console.log('\nSample entries:');
console.log(JSON.stringify(report.slice(0, 5), null, 2));

fs.writeFileSync('scripts/seo_dist_audit.json', JSON.stringify(report, null, 2));
