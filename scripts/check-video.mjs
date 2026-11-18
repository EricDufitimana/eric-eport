import assert from 'node:assert/strict';
import { chromium } from 'playwright';
const browser = await chromium.launch({headless:true,executablePath:'C:/Users/ASYV/AppData/Local/ms-playwright/chromium-1228/chrome-win64/chrome.exe'});
try {
 const page = await browser.newPage({viewport:{width:1440,height:1000}});
 await page.goto('http://127.0.0.1:5173/', {waitUntil:'networkidle'});
 await page.locator('.poem-feature').scrollIntoViewIfNeeded();
 const video = page.locator('video');
 await video.evaluate(v => {v.muted=true;return v.play();});
 await page.waitForFunction(() => document.querySelector('video')?.currentTime > .2, {timeout:15000});
 const playback = await video.evaluate(v=>({time:v.currentTime,duration:v.duration,width:v.videoWidth,height:v.videoHeight,paused:v.paused,error:v.error?.message}));
 assert.ok(playback.time > 0 && playback.width > 0 && !playback.paused, JSON.stringify(playback));
 await video.evaluate(v=>v.pause());
 assert.equal(await page.locator('body').innerText().then(s=>s.includes('VILLAGE TIME THEATRE')),false);
 assert.equal(await page.locator('#mova .project-link').getAttribute('href'),'https://mova-rw.vercel.app/');
 for (const width of [1440,768,390,320]) {
  await page.setViewportSize({width,height:900});
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Overflow at ${width}`);
 }
 console.log('PASS: video plays in page',playback,'; theatre piece removed; MOVA link; responsive layout.');
} finally {await browser.close();}
