import fs from 'node:fs';
import { chromium } from 'playwright';
import { resumeAwards as honors } from '../src/resume-awards.js';
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH || 'C:/Users/ASYV/AppData/Local/ms-playwright/chromium-1228/chrome-win64/chrome.exe'});
try {
 const page=await browser.newPage();
 await page.goto(process.env.PORTFOLIO_URL || 'http://127.0.0.1:5174/',{waitUntil:'networkidle'});
 if (!await page.locator('.resume-paper').count()) await page.getByRole('button',{name:'Read on page',exact:true}).click();
 const markup=await page.locator('.resume-paper').evaluate(el=>el.outerHTML);
 await page.setContent(`<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Eric Dufitimana Resume</title><style>
 @page{size:Letter;margin:0.65in 0.7in}body{margin:0;color:#000;font:10.5pt/1.17 'Times New Roman',serif}h3,p{margin:0}header{text-align:center;margin-bottom:17px}header h3{font-size:14pt}header p{font-size:10pt;margin-top:5px}h4{font-size:10.5pt;border-bottom:.75pt solid #000;margin:13px 0 7px;padding-bottom:2px;break-after:avoid}.resume-row{display:flex;justify-content:space-between;gap:12px}.resume-row>span{white-space:nowrap}.resume-entry{margin:0 0 10px 12px}.resume-entry ul{padding-left:18px;margin:4px 0}.resume-entry li{margin-bottom:3px}.resume-entry p{margin-bottom:3px}.resume-entry strong{font-weight:bold}.resume-awards{margin-top:9px}.resume-awards>ul{padding-left:18px}.resume-awards li{break-inside:avoid}.resume-row{break-after:avoid}
 .resume-awards>ul{display:grid;grid-template-columns:1fr 1fr;gap:11px 22px;list-style:none;padding:0;margin:8px 0 0}.resume-awards li{margin:0;padding-left:9px;border-left:1pt solid #aaa;line-height:1.35}.resume-award-title{display:block;font-weight:bold;font-size:9.5pt}.resume-award-context{display:block;font-size:9pt}
 </style></head><body>${markup}</body></html>`);
 await page.pdf({path:'public/documents/eric-dufitimana-resume.pdf',format:'Letter',printBackground:true,preferCSSPageSize:true});
 fs.writeFileSync('.preview/resume-awards.json',JSON.stringify(honors));
 console.log('PDF created:',fs.statSync('public/documents/eric-dufitimana-resume.pdf').size,'bytes;',honors.length,'honors included.');
} finally {await browser.close();}
