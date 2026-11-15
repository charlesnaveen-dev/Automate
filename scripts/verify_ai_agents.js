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

const OUT_DIR = path.resolve('debug_screenshots/hero_audit/verify_ai_agents');
fs.mkdirSync(OUT_DIR, { recursive: true });

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  for (const bp of BREAKPOINTS) {
    await page.setViewport({ width: bp.width, height: bp.height });
    await page.goto(BASE_URL + '/capabilities/ai-agents', { waitUntil: 'networkidle2', timeout: 15000 });
    await new Promise(r => setTimeout(r, 600));
    const hero = await page.$('section[class*="hero"]');
    const filename = path.join(OUT_DIR, `ai-agents_${bp.name}.png`);
    await hero.screenshot({ path: filename });
    console.log('Saved', filename);
  }

  await browser.close();
}

run().catch(console.error);
