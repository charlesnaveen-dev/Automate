import puppeteer from 'puppeteer-core';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:5173';

async function runFunctionalTests() {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: CHROME_PATH,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  const results = [];

  // 1. Test Navigation Links
  const navRoutes = [
    '/',
    '/capabilities',
    '/capabilities/ai-agents',
    '/capabilities/workflow-automation',
    '/capabilities/voice-ai',
    '/capabilities/custom-ai-solutions',
    '/industries',
    '/process',
    '/about',
    '/contact',
    '/start-project',
    '/privacy',
    '/terms'
  ];

  for (const route of navRoutes) {
    try {
      await page.goto(`${BASE_URL}${route}`, { waitUntil: 'domcontentloaded' });
      const title = await page.title();
      results.push({ test: `Route ${route}`, status: 'PASS', details: `Title: ${title}` });
    } catch (e) {
      results.push({ test: `Route ${route}`, status: 'FAIL', error: e.message });
    }
  }

  // 2. Test Header Dropdown
  try {
    await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
    await page.evaluate(() => {
      document.querySelector('.dropdown-chevron-btn').click();
    });
    const isOpen = await page.evaluate(() => {
      const menu = document.querySelector('.nav-dropdown-menu');
      return menu && menu.classList.contains('is-open');
    });
    results.push({ test: 'Header Capabilities Dropdown Toggle', status: isOpen ? 'PASS' : 'FAIL' });
  } catch (e) {
    results.push({ test: 'Header Capabilities Dropdown', status: 'FAIL', error: e.message });
  }

  // 3. Test Contact Form Validation & Submission
  try {
    await page.goto(`${BASE_URL}/contact`, { waitUntil: 'networkidle0' });
    
    // Test empty submission
    await page.click('.form-submit-btn');
    await new Promise(r => setTimeout(r, 100));
    let err = await page.$eval('.form-error-banner', el => el.innerText);
    results.push({
      test: 'Contact Form Empty Submission',
      status: err.includes('name') ? 'PASS' : 'FAIL',
      details: err
    });

    // Test invalid phone
    await page.type('#name', 'Acme Corp');
    await page.type('#phone', 'abc-def');
    await page.type('#email', 'test@acme.com');
    await page.click('.form-submit-btn');
    await new Promise(r => setTimeout(r, 100));
    err = await page.$eval('.form-error-banner', el => el.innerText);
    results.push({
      test: 'Contact Form Invalid Phone Validation',
      status: err.includes('telephone') ? 'PASS' : 'FAIL',
      details: err
    });

    // Test invalid email
    await page.evaluate(() => {
      document.querySelector('#phone').value = '+1 (555) 234-5678';
      document.querySelector('#phone').dispatchEvent(new Event('input', { bubbles: true }));
      document.querySelector('#email').value = 'invalid-email';
      document.querySelector('#email').dispatchEvent(new Event('input', { bubbles: true }));
    });
    await page.click('.form-submit-btn');
    await new Promise(r => setTimeout(r, 100));
    err = await page.$eval('.form-error-banner', el => el.innerText);
    results.push({
      test: 'Contact Form Invalid Email Validation',
      status: err.includes('email') ? 'PASS' : 'FAIL',
      details: err
    });

    // Test valid submission
    await page.evaluate(() => {
      document.querySelector('#email').value = 'sarah@acme.com';
      document.querySelector('#email').dispatchEvent(new Event('input', { bubbles: true }));
    });
    await page.click('.form-submit-btn');
    await new Promise(r => setTimeout(r, 600));

    const isSuccess = await page.evaluate(() => {
      return !!document.querySelector('.contact-success-state');
    });
    results.push({
      test: 'Contact Form Successful Submission State',
      status: isSuccess ? 'PASS' : 'FAIL'
    });
  } catch (e) {
    results.push({ test: 'Contact Form Flow', status: 'FAIL', error: e.message });
  }

  // 4. Test Start Project Form Validation & Submission
  try {
    await page.goto(`${BASE_URL}/start-project`, { waitUntil: 'networkidle0' });
    
    // Empty submission
    await page.click('.form-submit-btn');
    await new Promise(r => setTimeout(r, 100));
    let err = await page.$eval('.form-error-banner', el => el.innerText);
    results.push({
      test: 'Start Project Form Empty Submission',
      status: err.includes('name') ? 'PASS' : 'FAIL',
      details: err
    });

    // Valid submission
    await page.type('#project-name', 'Global Enterprises');
    await page.type('#project-phone', '+44 20 7946 0912');
    await page.type('#project-email', 'director@globalenterprises.co.uk');
    await page.click('.form-submit-btn');
    await new Promise(r => setTimeout(r, 600));

    const isSuccess = await page.evaluate(() => {
      return !!document.querySelector('.project-success-state');
    });
    results.push({
      test: 'Start Project Form Successful Submission State',
      status: isSuccess ? 'PASS' : 'FAIL'
    });
  } catch (e) {
    results.push({ test: 'Start Project Form Flow', status: 'FAIL', error: e.message });
  }

  await browser.close();
  console.log(JSON.stringify(results, null, 2));
}

runFunctionalTests().catch(console.error);
