import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto("https://www.leaderlawaz.com/", { waitUntil: "networkidle2", timeout: 45000 });
await sleep(1500);
// hero (above the fold)
await page.screenshot({ path: ".shots/leader-hero.png" });
// a bit taller — first ~2 screens
await page.setViewport({ width: 1440, height: 1800, deviceScaleFactor: 1 });
await sleep(600);
await page.screenshot({ path: ".shots/leader-top.png" });
await browser.close();
console.log("done");
