import puppeteer from "puppeteer-core";
import fs from "fs";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = "https://suture-ai.github.io/Marc-Webiste-Migration";
const OUT = process.argv[2] || ".";

const pages = [
  { path: "/", name: "home" },
  { path: "/meet-marc/", name: "meet-marc" },
  { path: "/contact-marc/", name: "contact-marc" },
];

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars"],
});

const results = [];

for (const vp of viewports) {
  for (const p of pages) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 2 });
    const url = `${BASE}${p.path}`;
    try {
      await page.goto(url, { waitUntil: "networkidle0", timeout: 45000 });
      // above-the-fold viewport-only screenshot first
      const aboveFoldPath = `${OUT}/${vp.name}-${p.name}-abovefold.png`;
      await page.screenshot({ path: aboveFoldPath, fullPage: false });

      // check horizontal overflow
      const overflow = await page.evaluate(() => {
        return {
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          bodyScrollWidth: document.body.scrollWidth,
        };
      });

      // full page screenshot
      const fullPath = `${OUT}/${vp.name}-${p.name}-full.png`;
      await page.screenshot({ path: fullPath, fullPage: true });

      results.push({ url, viewport: vp.name, page: p.name, overflow, aboveFoldPath, fullPath, status: "ok" });
      console.log(`OK ${vp.name} ${p.name} overflow=${JSON.stringify(overflow)}`);
    } catch (err) {
      results.push({ url, viewport: vp.name, page: p.name, status: "error", error: String(err) });
      console.log(`ERR ${vp.name} ${p.name}: ${err}`);
    }
    await page.close();
  }
}

fs.writeFileSync(`${OUT}/results.json`, JSON.stringify(results, null, 2));
await browser.close();
