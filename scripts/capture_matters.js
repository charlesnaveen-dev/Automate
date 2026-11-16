import puppeteer from 'puppeteer-core';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUT_DIR = '/Users/charlesnaveen/.gemini/antigravity/brain/3d9adffb-2877-42af-8fd6-3a92f23093b0';
const BASE_URL = 'http://localhost:4173';

const PAGES = [
  { name: 'ai_agents', path: '/capabilities/ai-agents' },
  { name: 'voice_ai', path: '/capabilities/voice-ai' },
  { name: 'workflow_automation', path: '/capabilities/workflow-automation' },
  { name: 'custom_ai', path: '/capabilities/custom-ai-solutions' },
];

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  for (const p of PAGES) {
    // Desktop 1440
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`${BASE_URL}${p.path}`, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 600));
    
    // Find Section 04 element
    const mattersEl = await page.$('.matters-section');
    if (mattersEl) {
      await mattersEl.screenshot({
        path: path.join(OUT_DIR, `matters_${p.name}_desktop.png`),
      });
      console.log(`Captured ${p.name} desktop`);
    }

    // Mobile 390
    await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
    await page.goto(`${BASE_URL}${p.path}`, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 600));

    const mattersMobileEl = await page.$('.matters-section');
    if (mattersMobileEl) {
      await mattersMobileEl.screenshot({
        path: path.join(OUT_DIR, `matters_${p.name}_mobile.png`),
      });
      console.log(`Captured ${p.name} mobile`);
    }
  }

  await browser.close();
  console.log('All screenshots captured!');
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
