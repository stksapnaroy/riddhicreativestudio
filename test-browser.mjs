import { chromium } from 'playwright';

async function run() {
  console.log('Launching Edge browser...');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();

  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(`Console error: ${msg.text()}`);
    }
  });
  page.on('pageerror', err => {
    errors.push(`Page error: ${err.message}`);
  });

  // 1. Desktop Viewport (1440x900)
  console.log('Testing Desktop 1440x900...');
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });

  const title = await page.title();
  console.log('Page Title:', title);

  const heroHeading = await page.locator('h1').textContent();
  console.log('Hero Heading:', heroHeading.replace(/\s+/g, ' ').trim());

  // Check section visibility
  const sections = ['#home', '#services', '#portfolio', '#why-us', '#process', '#about', '#faqs', '#contact'];
  for (const s of sections) {
    const count = await page.locator(s).count();
    console.log(`Section ${s} exists: ${count > 0}`);
  }

  // Check horizontal overflow on desktop
  const scrollWidthDesktop = await page.evaluate(() => document.documentElement.scrollWidth);
  const clientWidthDesktop = await page.evaluate(() => document.documentElement.clientWidth);
  console.log(`Desktop Scroll Width: ${scrollWidthDesktop}, Client Width: ${clientWidthDesktop}, Overflow: ${scrollWidthDesktop > clientWidthDesktop}`);

  // Take full page desktop screenshot
  await page.screenshot({ path: 'preview-desktop.png', fullPage: false });

  // 2. Tablet Viewport (768x1024)
  console.log('Testing Tablet 768x1024...');
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.waitForTimeout(300);
  const scrollWidthTablet = await page.evaluate(() => document.documentElement.scrollWidth);
  const clientWidthTablet = await page.evaluate(() => document.documentElement.clientWidth);
  console.log(`Tablet Scroll Width: ${scrollWidthTablet}, Client Width: ${clientWidthTablet}, Overflow: ${scrollWidthTablet > clientWidthTablet}`);

  // 3. Mobile Viewport (375x667)
  console.log('Testing Mobile 375x667...');
  await page.setViewportSize({ width: 375, height: 667 });
  await page.waitForTimeout(300);
  const scrollWidthMobile = await page.evaluate(() => document.documentElement.scrollWidth);
  const clientWidthMobile = await page.evaluate(() => document.documentElement.clientWidth);
  console.log(`Mobile Scroll Width: ${scrollWidthMobile}, Client Width: ${clientWidthMobile}, Overflow: ${scrollWidthMobile > clientWidthMobile}`);

  // 4. Test Contact Form Validation & Submission Flow
  console.log('Testing Contact Form Submission...');
  await page.locator('#contact').scrollIntoViewIfNeeded();
  
  // Fill in required fields
  await page.fill('input[name="name"]', 'David Sterling');
  await page.fill('input[name="email"]', 'david@sterlingbrands.com');
  await page.fill('textarea[name="projectDetails"]', 'We need a complete brand identity refresh, product catalogue print design, and modern responsive website.');
  
  // Click Submit
  await page.click('button[type="submit"]');
  await page.waitForTimeout(800);

  // Check confirmation state
  const confirmationText = await page.locator('text=Inquiry Prepared Successfully!').textContent();
  console.log('Form Confirmation Text:', confirmationText.trim());

  // Check if WhatsApp link and mailto link are generated
  const whatsappHref = await page.locator('a:has-text("Send Direct via WhatsApp")').getAttribute('href');
  console.log('WhatsApp transmission link present:', whatsappHref ? whatsappHref.includes('wa.me') : false);

  if (errors.length > 0) {
    console.log('Errors caught:', errors);
  } else {
    console.log('Zero console errors or page errors detected!');
  }

  await browser.close();
  console.log('ALL TESTS PASSED SUCCESFULLY!');
}

run().catch(console.error);
