import { chromium } from 'playwright';

async function run() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();
  
  // Desktop
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'preview-desktop.png', fullPage: false });
  await page.screenshot({ path: 'preview-fullpage.png', fullPage: true });

  // Mobile
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'preview-mobile.png', fullPage: false });

  await browser.close();
  console.log('All screenshots refreshed!');
}

run().catch(console.error);
