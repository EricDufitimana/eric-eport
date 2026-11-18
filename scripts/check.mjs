import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const url = process.env.PORTFOLIO_URL || 'http://127.0.0.1:5173/';
const browserOptions = { headless: true };
if (process.env.CHROME_PATH) browserOptions.executablePath = process.env.CHROME_PATH;
else if (process.platform === 'win32') {
  const root = path.join(process.env.LOCALAPPDATA || '', 'ms-playwright');
  const installed = fs.existsSync(root) ? fs.readdirSync(root).filter(name => /^chromium-\d+$/.test(name)).sort().reverse() : [];
  const executable = installed.map(name => path.join(root, name, 'chrome-win64', 'chrome.exe')).find(file => fs.existsSync(file));
  if (executable) browserOptions.executablePath = executable;
}
const browser = await chromium.launch(browserOptions);
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(url, { waitUntil: 'networkidle' });
  assert.equal(await page.locator('h1').count(), 1);
  assert.equal(await page.locator('.project').count(), 4);
  assert.equal(await page.locator('.activity').count(), 8);
  assert.equal(await page.locator('tbody tr').count(), 15);
  assert.equal(await page.locator('a[href^="mailto:"]').count(), 0);
  assert.match(await page.locator('#career').innerText(), /500 users at peak/);
  assert.equal(await page.getByRole('link', { name: 'Open the tracker' }).getAttribute('href'), 'https://asyvleague.vercel.app/');
  const brokenAnchors = await page.locator('a[href^="#"]').evaluateAll(links => links.map(link => link.getAttribute('href')).filter(href => !document.getElementById(href.slice(1))));
  assert.deepEqual(brokenAnchors, []);
  for (const width of [1440, 1024, 768, 600, 390, 320]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.waitForTimeout(100);
    const size = await page.evaluate(() => ({ document: document.documentElement.scrollWidth, viewport: window.innerWidth }));
    assert.ok(size.document <= size.viewport, `Horizontal overflow at ${width}: ${size.document}`);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  const menu = page.getByRole('button', { name: 'Menu +' });
  await menu.click();
  assert.equal(await page.locator('#menu-toggle').getAttribute('aria-expanded'), 'true');
  await page.locator('#main-nav').getByRole('link', { name: 'Creative life' }).click();
  assert.equal(await page.locator('#menu-toggle').getAttribute('aria-expanded'), 'false');
  await page.waitForTimeout(400);
  assert.equal(new URL(page.url()).hash, '#creative');
  await page.locator('#menu-toggle').click();
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('#menu-toggle').getAttribute('aria-expanded'), 'false');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior), 'auto');
  await page.goto(url);
  await page.keyboard.press('Tab');
  assert.equal(await page.locator(':focus').innerText(), 'Skip to content');
  assert.deepEqual(errors, []);
  fs.mkdirSync('.preview', { recursive: true });
  // Screenshots are optional artifacts; functional checks above always run.
  for (const [label, width, height] of [['mobile', 390, 844], ['desktop', 1440, 1000]]) {
    await page.setViewportSize({ width, height });
    await page.goto(url, { waitUntil: 'networkidle' });
    try { await page.screenshot({ path: `.preview/${label}.png`, timeout: 10000, animations: 'disabled' }); }
    catch (error) { console.log(`Screenshot unavailable (${label}): ${error.message.split('\n')[0]}`); }
  }
  console.log('PASS: content, 15 honors, project links, all section anchors, six responsive widths, mobile menu, Escape, reduced motion, keyboard skip link, and no React runtime errors.');
} finally {
  await browser.close();
}
