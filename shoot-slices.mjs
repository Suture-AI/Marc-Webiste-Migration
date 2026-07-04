import puppeteer from "puppeteer-core";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const OUT = process.env.SHOT_DIR || ".shots";
const path = process.argv[2] || "/";
const prefix = process.argv[3] || "slice";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
await page.goto(`http://localhost:5173${path}`, { waitUntil: "networkidle0", timeout: 30000 });
await page.evaluate(async () => {
  await new Promise((done) => {
    let y = 0;
    const step = () => {
      y += 500;
      window.scrollTo(0, y);
      if (y < document.body.scrollHeight) setTimeout(step, 50);
      else { window.scrollTo(0, 0); setTimeout(done, 500); }
    };
    step();
  });
});
const total = await page.evaluate(() => document.body.scrollHeight);
let i = 0;
for (let y = 0; y < total; y += 844) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await new Promise((r) => setTimeout(r, 350));
  await page.screenshot({ path: `${OUT}/${prefix}-${String(i).padStart(2, "0")}.png` });
  i++;
}
console.log(`${i} slices of ${path} (height ${total})`);
await browser.close();
