import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const outDir = '/Users/charlesnaveen/.gemini/antigravity/brain/3d9adffb-2877-42af-8fd6-3a92f23093b0/mobile_test_results';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function runTests() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  // iPhone 14 / standard modern smartphone viewport
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });

  console.log('Testing Home Hero Full-Screen...');
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle2' });

  // 1. Home Hero first screen screenshot (0 scroll)
  await page.screenshot({
    path: path.join(outDir, '01_home_hero_initial_viewport.png'),
    clip: { x: 0, y: 0, width: 390, height: 844 },
  });

  // Check hero section height and bottom position
  const heroBounding = await page.$eval('#hero', (el) => {
    const rect = el.getBoundingClientRect();
    return { height: rect.height, bottom: rect.bottom, top: rect.top };
  });
  console.log('Hero bounding rect on 390x844 viewport:', heroBounding);

  // Check if intro section is visible within the initial 844px viewport
  const introTop = await page.$eval('#intro', (el) => {
    return el.getBoundingClientRect().top;
  });
  console.log('Intro section top position (should be >= 844px):', introTop);

  // 2. Capabilities Section Mobile Interaction
  console.log('Testing Capabilities Mobile Tabs...');
  // Scroll to capabilities
  await page.$eval('#capabilities', (el) => el.scrollIntoView());
  await new Promise((r) => setTimeout(r, 600));

  await page.screenshot({
    path: path.join(outDir, '02_capabilities_01_agents.png'),
    fullPage: false,
  });

  // Tap tab 02: AI Receptionists
  console.log('Tapping Tab 02 (AI Receptionists)...');
  await page.tap('#cap-tab-02');
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({
    path: path.join(outDir, '03_capabilities_02_receptionists.png'),
    fullPage: false,
  });

  // Tap tab 03: Workflow Automation
  console.log('Tapping Tab 03 (Workflow Automation)...');
  await page.tap('#cap-tab-03');
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({
    path: path.join(outDir, '04_capabilities_03_workflow.png'),
    fullPage: false,
  });

  // Tap tab 04: Integrations & Custom Systems
  console.log('Tapping Tab 04 (Integrations & Custom Systems)...');
  await page.tap('#cap-tab-04');
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({
    path: path.join(outDir, '05_capabilities_04_custom.png'),
    fullPage: false,
  });

  // 3. Industries Section Mobile
  console.log('Testing Industries Mobile...');
  await page.$eval('.industries-preview-section', (el) => el.scrollIntoView());
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({
    path: path.join(outDir, '06_industries_mobile.png'),
    fullPage: false,
  });

  // 4. Final CTA Section Mobile
  console.log('Testing Final CTA Mobile...');
  await page.$eval('.final-cta-section', (el) => el.scrollIntoView());
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({
    path: path.join(outDir, '07_final_cta_mobile.png'),
    fullPage: false,
  });

  // 5. About Page Hero & Image
  console.log('Testing About Page Hero Image...');
  await page.goto('http://localhost:4173/about', { waitUntil: 'networkidle2' });
  await page.screenshot({
    path: path.join(outDir, '08_about_page_mobile.png'),
    clip: { x: 0, y: 0, width: 390, height: 844 },
  });

  // 6. Contact Page Mobile
  console.log('Testing Contact Page Mobile...');
  await page.goto('http://localhost:4173/contact', { waitUntil: 'networkidle2' });
  await page.screenshot({
    path: path.join(outDir, '09_contact_page_mobile.png'),
    clip: { x: 0, y: 0, width: 390, height: 844 },
  });

  // 7. Mobile Navigation Drawer
  console.log('Testing Mobile Navigation Drawer...');
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle2' });
  await page.tap('.mobile-menu-toggle');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({
    path: path.join(outDir, '10_mobile_nav_drawer.png'),
    clip: { x: 0, y: 0, width: 390, height: 844 },
  });

  await browser.close();
  console.log('All tests completed successfully. Screenshots saved to:', outDir);
}

runTests().catch((err) => {
  console.error('Test error:', err);
  process.exit(1);
});
