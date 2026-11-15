import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:5173';

const PAGES = [
  { slug: 'ai-agents', path: '/capabilities/ai-agents', selector: '.agent-hero-section' },
  { slug: 'workflow-automation', path: '/capabilities/workflow-automation', selector: '.wf-hero-section' },
  { slug: 'voice-ai', path: '/capabilities/voice-ai', selector: '.voice-hero-section' },
  { slug: 'custom-ai-solutions', path: '/capabilities/custom-ai-solutions', selector: '.custom-hero-section' },
];

const BREAKPOINTS = [
  { name: '1440', width: 1440, height: 900 },
  { name: '1280', width: 1280, height: 800 },
  { name: '768', width: 768, height: 1024 },
  { name: '390', width: 390, height: 844 },
];

const OUT_DIR = path.resolve('debug_screenshots/all_capabilities_audit');
fs.mkdirSync(OUT_DIR, { recursive: true });

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  for (const p of PAGES) {
    for (const bp of BREAKPOINTS) {
      await page.setViewport({ width: bp.width, height: bp.height });
      await page.goto(BASE_URL + p.path, { waitUntil: 'networkidle2', timeout: 15000 });
      await new Promise(r => setTimeout(r, 600));

      const hero = await page.$(p.selector);
      if (hero) {
        await hero.screenshot({ path: path.join(OUT_DIR, `${p.slug}_${bp.name}.png`) });
      } else {
        console.warn(`Could not find selector ${p.selector} on ${p.path}`);
      }
    }
    console.log(`Completed audit for ${p.slug}`);
  }

  await browser.close();
  console.log('All capability audits complete.');
}

run().catch(console.error);
