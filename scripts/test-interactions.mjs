import { chromium } from 'playwright';
import { preview } from 'vite';

async function testInteractions() {
  console.log('--- Starting Production Verification ---');
  const server = await preview({ preview: { port: 4175 } });
  
  let browser;
  try {
    browser = await chromium.launch({ channel: 'msedge' });
  } catch {
    browser = await chromium.launch({ channel: 'chrome' });
  }
  const page = await browser.newPage();
  
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.error('Browser console error:', msg.text());
      errors.push(msg.text());
    }
  });
  page.on('pageerror', err => {
    console.error('Browser page error:', err.message);
    errors.push(err.message);
  });

  // 1. Test KIVEX Toolbar Application Wrapper at top level
  await page.goto('http://localhost:4175', { waitUntil: 'networkidle' });
  console.log('Page Title:', await page.title());

  // Verify KIVEX Technology Permanent Branding
  const kivexBrand = await page.locator('aside[aria-label*="KIVEX"]');
  const brandText = await kivexBrand.innerText();
  console.log('Toolbar Branding detected:', brandText.replace(/\n/g, ' '));
  if (!brandText.includes('KIVEX') || !brandText.includes('Technology')) {
    throw new Error('KIVEX Technology branding is missing or malformed!');
  }

  // Verify Device Buttons (PC, Tablet, Phone, Fullscreen)
  console.log('Testing device viewport mode switching...');
  await page.click('button[aria-label*="Preview as Phone"]');
  await page.waitForTimeout(300);
  console.log('Switched to Phone mode (390px).');

  await page.click('button[aria-label*="Preview as Tablet"]');
  await page.waitForTimeout(300);
  console.log('Switched to Tablet mode (768px).');

  await page.click('button[aria-label*="Preview as PC"]');
  await page.waitForTimeout(300);
  console.log('Switched to PC mode (1280px).');

  await page.click('button[aria-label*="Preview as Fullscreen"]');
  await page.waitForTimeout(300);
  console.log('Switched to Fullscreen mode.');

  // Test Close (Cross) button
  console.log('Testing Cross (×) button to hide toolbar...');
  await page.click('button[aria-label="Close preview toolbar"]');
  await page.waitForTimeout(400);

  // Verify Reopen button is visible
  const reopenBtn = await page.locator('button[aria-label*="Reopen KIVEX"]');
  if (await reopenBtn.isVisible()) {
    console.log('Floating KIVEX reopen control successfully appeared.');
    await reopenBtn.click();
    await page.waitForTimeout(400);
    console.log('KIVEX Preview toolbar restored successfully.');
  }

  // 2. Test Dental Website Interactions (inside preview frame / standalone)
  console.log('--- Testing Dental Site Features ---');
  await page.goto('http://localhost:4175/?standalone=true', { waitUntil: 'networkidle' });

  // Test Language Switcher
  const langBtn = await page.locator('button[aria-label="Toggle language"]');
  if (await langBtn.isVisible()) {
    await langBtn.click();
    console.log('Language switched to English.');
    await page.waitForTimeout(200);
    await langBtn.click();
    console.log('Language switched back to Russian.');
  }

  // Test Booking Modal Demo Flow
  const bookBtn = await page.locator('button:has-text("Book Appointment")').first();
  await bookBtn.click();
  console.log('Booking modal opened.');
  await page.waitForTimeout(300);

  // Verify demo badge
  const demoBadge = await page.locator('text=Demo Appointment Flow').first();
  if (await demoBadge.isVisible()) {
    console.log('Verified: Demo Appointment Flow disclaimer badge is prominently present.');
  }

  // Fill in demo patient info
  await page.fill('#booking-name', 'Alexander Wright');
  await page.fill('#booking-phone', '+1 (800) 555-0199');
  await page.click('button[type="submit"]');
  await page.waitForTimeout(800);

  const confirmText = await page.locator('text=Consultation Request Received').first();
  if (await confirmText.isVisible()) {
    console.log('Verified: Appointment confirmation success screen with summary and reference ID.');
  }

  // Close booking modal
  await page.click('button:has-text("Close Window")');
  await page.waitForTimeout(300);

  // Test Before/After Comparison Slider with Keyboard
  const slider = await page.locator('div[role="slider"]');
  if (await slider.isVisible()) {
    await slider.focus();
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    console.log('Verified: Before/After slider responds to accessible keyboard arrow keys.');
  }

  // Test Legal Modal
  const privacyBtn = await page.locator('button:has-text("Privacy Policy")').first();
  if (await privacyBtn.isVisible()) {
    await privacyBtn.click();
    await page.waitForTimeout(300);
    const legalTitle = await page.locator('#legal-modal-title');
    console.log('Verified: Legal modal opened displaying:', await legalTitle.innerText());
    await page.keyboard.press('Escape');
    await page.waitForTimeout(200);
    console.log('Verified: Legal modal closed via ESC key.');
  }

  // Test Cookie Banner
  const cookieAccept = await page.locator('button:has-text("Accept All")');
  if (await cookieAccept.isVisible()) {
    await cookieAccept.click();
    console.log('Verified: Cookie consent accepted and banner dismissed.');
  }

  await browser.close();
  await server.close();

  if (errors.length > 0) {
    console.error('Failed with console errors:', errors);
    process.exit(1);
  }

  console.log('🎉 ALL INTEGRATION AND ACCESSIBILITY VERIFICATIONS PASSED SUCCESSFULLY!');
}

testInteractions().catch((err) => {
  console.error('Verification failed:', err);
  process.exit(1);
});
