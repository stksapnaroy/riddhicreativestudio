import { chromium } from 'playwright';

async function audit() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();

  const issues = [];
  page.on('console', msg => {
    if (msg.type() === 'error') issues.push(`Console: ${msg.text()}`);
  });
  page.on('pageerror', err => issues.push(`PageError: ${err.message}`));

  // Audit 1: Desktop Viewport
  console.log('--- AUDITING DESKTOP (1440x900) ---');
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });

  // Check section scroll-margins
  const sectionIds = ['services', 'portfolio', 'why-us', 'process', 'about', 'faqs', 'contact'];
  for (const id of sectionIds) {
    const el = page.locator(`#${id}`);
    const count = await el.count();
    if (count === 0) {
      issues.push(`Missing section #${id}`);
    } else {
      const scrollMargin = await el.evaluate(e => window.getComputedStyle(e).scrollMarginTop);
      console.log(`Section #${id} scrollMarginTop: ${scrollMargin}`);
    }
  }

  // Check Marquee Animation
  const marqueeEl = page.locator('.animate-marquee');
  if (await marqueeEl.count() > 0) {
    const animName = await marqueeEl.evaluate(e => window.getComputedStyle(e).animationName);
    console.log(`Marquee animation-name: ${animName}`);
    if (animName === 'none' || !animName) {
      issues.push('Marquee ribbon has animationName none (missing keyframe definition in CSS)');
    }
  }

  // Check Process Timeline on Tablet (768px)
  console.log('--- AUDITING TABLET (768x1024) ---');
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.waitForTimeout(300);

  const processGridCols = await page.locator('#process .grid').first().evaluate(e => window.getComputedStyle(e).gridTemplateColumns.split(' ').length);
  console.log(`Process grid columns on 768px: ${processGridCols}`);
  if (processGridCols > 3) {
    console.log('Warning: Process grid has 5 tight columns on 768px tablet, cards may be cramped!');
  }

  // Check Mobile (375x812)
  console.log('--- AUDITING MOBILE (375x812) ---');
  await page.setViewportSize({ width: 375, height: 812 });
  await page.waitForTimeout(300);

  const mobileScrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  console.log(`Mobile scrollWidth: ${mobileScrollWidth} (should be 375)`);
  if (mobileScrollWidth > 375) {
    issues.push(`Mobile horizontal overflow detected: ${mobileScrollWidth}px > 375px`);
  }

  // Check Touch targets on mobile
  const buttons = page.locator('button, a');
  const btnCount = await buttons.count();
  let smallTargets = 0;
  for (let i = 0; i < Math.min(btnCount, 30); i++) {
    const box = await buttons.nth(i).boundingBox();
    if (box && (box.width < 32 || box.height < 32)) {
      smallTargets++;
    }
  }
  console.log(`Small touch targets evaluated (<32px): ${smallTargets}`);

  // Check Form Labels & Inputs
  console.log('--- AUDITING ACCESSIBILITY & FORM ---');
  const inputs = ['name', 'email', 'phone', 'company', 'projectDetails'];
  for (const name of inputs) {
    const input = page.locator(`[name="${name}"]`);
    const id = await input.getAttribute('id');
    const ariaLabel = await input.getAttribute('aria-label');
    const placeholder = await input.getAttribute('placeholder');
    console.log(`Input ${name}: id=${id}, aria-label=${ariaLabel}, placeholder=${placeholder}`);
  }

  console.log('\n--- AUDIT ISSUES DETECTED ---');
  console.log(issues.length > 0 ? issues : 'No major programmatic breaks found!');

  await browser.close();
}

audit().catch(console.error);
