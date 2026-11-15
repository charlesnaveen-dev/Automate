import puppeteer from 'puppeteer-core';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:5173';

const PAGES_TO_CHECK = [
  '/',
  '/capabilities',
  '/capabilities/ai-agents',
  '/capabilities/workflow-automation',
  '/capabilities/voice-ai',
  '/capabilities/custom-ai-solutions',
  '/industries',
  '/industries/legal',
  '/process',
  '/about',
  '/contact',
  '/start-project',
  '/privacy',
  '/terms'
];

async function runA11yAudit() {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: CHROME_PATH,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const report = {};

  for (const route of PAGES_TO_CHECK) {
    await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle0' });

    const a11yData = await page.evaluate(() => {
      // 1. Missing img alt
      const imgs = Array.from(document.querySelectorAll('img'));
      const missingAlt = imgs.filter(img => !img.hasAttribute('alt')).map(img => img.src);

      // 2. Buttons without accessible name
      const buttons = Array.from(document.querySelectorAll('button'));
      const unlabelledButtons = buttons.filter(btn => {
        const text = btn.innerText.trim();
        const ariaLabel = btn.getAttribute('aria-label');
        const ariaLabelledBy = btn.getAttribute('aria-labelledby');
        return !text && !ariaLabel && !ariaLabelledBy;
      }).map(btn => btn.className);

      // 3. Inputs without associated label
      const inputs = Array.from(document.querySelectorAll('input:not([type="hidden"]), textarea, select'));
      const unlabelledInputs = inputs.filter(inp => {
        const id = inp.id;
        const hasLabel = id && document.querySelector(`label[for="${id}"]`);
        const ariaLabel = inp.getAttribute('aria-label');
        const ariaLabelledBy = inp.getAttribute('aria-labelledby');
        return !hasLabel && !ariaLabel && !ariaLabelledBy;
      }).map(inp => inp.id || inp.name);

      // 4. Heading count
      const h1Count = document.querySelectorAll('h1').length;
      const h2Count = document.querySelectorAll('h2').length;

      return {
        missingAlt,
        unlabelledButtons,
        unlabelledInputs,
        h1Count,
        h2Count
      };
    });

    report[route] = a11yData;
  }

  await browser.close();
  console.log(JSON.stringify(report, null, 2));
}

runA11yAudit().catch(console.error);
