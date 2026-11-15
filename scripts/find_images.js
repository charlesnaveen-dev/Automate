import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import https from 'https';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const QUERIES = [
  { category: 'ai-agents', query: 'enterprise technology executive office laptop modern' },
  { category: 'workflow-automation', query: 'operations management modern office computer screens team' },
  { category: 'voice-ai', query: 'customer support headset professional modern office' },
  { category: 'custom-ai', query: 'software engineers modern lab computer monitors coding' },
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function scrape() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const results = {};

  for (const item of QUERIES) {
    const url = `https://unsplash.com/s/photos/${encodeURIComponent(item.query)}?orientation=landscape`;
    console.log(`Scraping for ${item.category}: ${url}`);
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await new Promise(r => setTimeout(r, 2000));

    const photos = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('figure img[src*="images.unsplash.com"]'));
      return imgs.map(img => {
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt') || '';
        // Extract base photo URL before ?
        const match = src.match(/(https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9_-]+)/);
        return {
          baseUrl: match ? match[1] : null,
          src,
          alt
        };
      }).filter(p => p.baseUrl);
    });

    console.log(`Found ${photos.length} photos for ${item.category}`);
    results[item.category] = photos.slice(0, 8);
  }

  await browser.close();

  fs.writeFileSync('temp_scraped_photos.json', JSON.stringify(results, null, 2));
  console.log('Saved scraped photos to temp_scraped_photos.json');
}

scrape().catch(err => {
  console.error(err);
  process.exit(1);
});
