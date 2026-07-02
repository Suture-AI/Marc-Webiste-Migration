import puppeteer from "puppeteer-core";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE = "http://localhost:5173/design-4";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await puppeteer.launch({
  executablePath: CHROME, headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars"],
});

// desktop hero (above the fold)
let page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(BASE, { waitUntil: "networkidle0", timeout: 30000 });
await sleep(800);
await page.screenshot({ path: ".shots/d4b-hero-desktop.png" });
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await sleep(700);
await page.evaluate(() => window.scrollTo(0, 0));
await sleep(400);
await page.screenshot({ path: ".shots/d4b-desktop.png", fullPage: true });
await page.close();

// mobile
page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
await page.goto(BASE, { waitUntil: "networkidle0", timeout: 30000 });
await sleep(800);
await page.screenshot({ path: ".shots/d4b-hero-mobile.png" });
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await sleep(700);
await page.evaluate(() => window.scrollTo(0, 0));
await sleep(400);
await page.screenshot({ path: ".shots/d4b-mobile.png", fullPage: true });
// mobile menu open
await page.click(".burger");
await sleep(600);
await page.screenshot({ path: ".shots/d4b-menu-mobile.png" });
await page.close();

await browser.close();
console.log("done");
