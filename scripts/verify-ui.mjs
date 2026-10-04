import { chromium } from 'playwright';
import { preview } from 'vite';

async function run() {
  console.log('Starting preview server...');
  const server = await preview({
    preview: { port: 4173 },
  });

  const url = 'http://localhost:4173';
  console.log(`Server started at ${url}`);

  let browser;
  try {
    browser = await chromium.launch({ channel: 'msedge' });
  } catch {
    browser = await chromium.launch({ channel: 'chrome' });
  }
  
  // 1. Desktop Screenshot with KIVEX Toolbar
  console.log('Capturing Desktop with KIVEX Toolbar (1440x900)...');
  const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await desktopPage.goto(url, { waitUntil: 'networkidle' });
  await desktopPage.waitForTimeout(500);
  await desktopPage.screenshot({ path: 'screenshot_desktop.png' });

  // 2. Phone Preview Frame via Toolbar
  console.log('Switching to Phone Mode in Toolbar...');
  await desktopPage.click('button[aria-label*="Preview as Phone"]');
  await desktopPage.waitForTimeout(600);
  await desktopPage.screenshot({ path: 'screenshot_phone_preview.png' });

  // 3. Tablet Preview Frame via Toolbar
  console.log('Switching to Tablet Mode in Toolbar...');
  await desktopPage.click('button[aria-label*="Preview as Tablet"]');
  await desktopPage.waitForTimeout(600);
  await desktopPage.screenshot({ path: 'screenshot_tablet_preview.png' });

  // 4. Standalone Mobile Site (390x844)
  console.log('Capturing Standalone Mobile Site (390x844)...');
  const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
  await mobilePage.goto(`${url}/?standalone=true`, { waitUntil: 'networkidle' });
  await mobilePage.screenshot({ path: 'screenshot_mobile.png', fullPage: true });

  // 5. Test Booking Modal Showcase
  console.log('Testing and capturing Booking Modal Showcase...');
  const bookBtn = mobilePage.locator('button:has-text("Book a Consultation")').first();
  if (await bookBtn.isVisible()) {
    await bookBtn.click();
    await mobilePage.waitForTimeout(500);
    await mobilePage.screenshot({ path: 'screenshot_booking_modal.png' });
    console.log('screenshot_booking_modal.png generated.');
  }

  await browser.close();
  await server.close();
  console.log('All screenshots generated successfully!');
  process.exit(0);
}

run().catch((err) => {
  console.error('Error running verification:', err);
  process.exit(1);
});
