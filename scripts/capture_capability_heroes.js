import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:5173';

const BREAKPOINTS = [
  { name: '1440', width: 1440, height: 900 },
  { name: '1280', width: 1280, height: 800 },
  { name: '768', width: 768, height: 1024 },
  { name: '390', width: 390, height: 844 },
];

const PAGES = [
  { id: 'ai-agents', path: '/capabilities/ai-agents' },
  { id: 'workflow-automation', path: '/capabilities/workflow-automation' },
  { id: 'voice-ai', path: '/capabilities/voice-ai' },
  { id: 'custom-ai', path: '/capabilities/custom-ai-solutions' },
];

const OUT_DIR = path.resolve('debug_screenshots/hero_audit/before');
fs.mkdirSync(OUT_DIR, { recursive: true });

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();

  for (const bp of BREAKPOINTS) {
    await page.setViewport({ width: bp.width, height: bp.height });
    for (const p of PAGES) {
      await page.goto(BASE_URL + p.path, { waitUntil: 'networkidle2', timeout: 15000 });
      await new Promise(r => setTimeout(r, 600));
      const hero = await page.$('section[class*="hero"]');
      const filename = path.join(OUT_DIR, `${p.id}_${bp.name}.png`);
      if (hero) {
        await hero.screenshot({ path: filename });
      } else {
        await page.screenshot({ path: filename, clip: { x: 0, y: 0, width: bp.width, height: Math.min(bp.height, 900) } });
      }
      console.log('Saved', filename);
    }
  }

  await browser.close();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
