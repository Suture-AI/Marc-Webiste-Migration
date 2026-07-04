import puppeteer from "puppeteer-core";
const OUT = process.env.SHOT_DIR || ".shots";
const browser = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: "new", args: ["--no-sandbox", "--hide-scrollbars"] });
for (const w of [320, 360, 430, 520, 620, 740, 860]) {
  const page = await browser.newPage();
  await page.setViewport({ width: w, height: 780, deviceScaleFactor: 1 });
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 900));
  await page.screenshot({ path: `${OUT}/w${w}.png` });
  await page.close();
}
console.log("done");
await browser.close();
