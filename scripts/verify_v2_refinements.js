import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:4173';
const OUT_DIR = path.resolve('debug_screenshots/v2_refinements');
fs.mkdirSync(OUT_DIR, { recursive: true });

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Test 1: AI Agents Desktop & Mobile
  console.log('Testing /capabilities/ai-agents...');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/capabilities/ai-agents`, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(OUT_DIR, 'ai-agents-desktop-hero.png'), clip: { x: 0, y: 0, width: 1440, height: 900 } });

  // Test Dropdown Interaction
  console.log('Testing Capabilities Dropdown...');
  const trigger = await page.$('.nav-item-dropdown');
  if (trigger) {
    await trigger.hover();
    await new Promise(r => setTimeout(r, 300));
    await page.screenshot({ path: path.join(OUT_DIR, 'dropdown-hover-open.png'), clip: { x: 300, y: 0, width: 800, height: 500 } });

    // Move mouse slightly into dropdown area
    await page.mouse.move(720, 120);
    await new Promise(r => setTimeout(r, 200));
    const isMenuOpen = await page.evaluate(() => {
      const menu = document.querySelector('.nav-dropdown-menu');
      return menu && (menu.classList.contains('is-open') || window.getComputedStyle(menu).opacity === '1');
    });
    console.log('Dropdown remains open inside menu area:', isMenuOpen);
  }

  // Test 2: Voice AI Desktop Hero
  console.log('Testing /capabilities/voice-ai...');
  await page.goto(`${BASE_URL}/capabilities/voice-ai`, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(OUT_DIR, 'voice-ai-desktop-hero.png'), clip: { x: 0, y: 0, width: 1440, height: 900 } });

  // Test 3: Workflow Automation Desktop Hero
  console.log('Testing /capabilities/workflow-automation...');
  await page.goto(`${BASE_URL}/capabilities/workflow-automation`, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(OUT_DIR, 'workflow-desktop-hero.png'), clip: { x: 0, y: 0, width: 1440, height: 900 } });

  // Test 4: Custom AI Solutions Desktop Hero
  console.log('Testing /capabilities/custom-ai-solutions...');
  await page.goto(`${BASE_URL}/capabilities/custom-ai-solutions`, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(OUT_DIR, 'custom-ai-desktop-hero.png'), clip: { x: 0, y: 0, width: 1440, height: 900 } });

  // Test 5: Start Project Page (Left column & Form focus)
  console.log('Testing /start-project...');
  await page.goto(`${BASE_URL}/start-project`, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(OUT_DIR, 'start-project-desktop.png') });

  // Test 6: Contact Page
  console.log('Testing /contact...');
  await page.goto(`${BASE_URL}/contact`, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(OUT_DIR, 'contact-desktop.png') });

  // Test 7: About Page (Hero & Why Hutomate image)
  console.log('Testing /about...');
  await page.goto(`${BASE_URL}/about`, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(OUT_DIR, 'about-hero.png'), clip: { x: 0, y: 0, width: 1440, height: 800 } });

  // Scroll to Why Hutomate section
  await page.evaluate(() => {
    const el = document.querySelector('.about-why-section');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(OUT_DIR, 'about-why-section.png') });

  // Test 8: Homepage Hero & Industries preview
  console.log('Testing Homepage Hero & Industries...');
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(OUT_DIR, 'home-hero.png'), clip: { x: 0, y: 0, width: 1440, height: 850 } });

  await browser.close();
  console.log('All verification captures completed successfully!');
}

run().catch(console.error);
