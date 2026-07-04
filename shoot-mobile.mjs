import puppeteer from "puppeteer-core";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const OUT = process.env.SHOT_DIR || ".shots";
const pages = process.argv.slice(2);

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars"],
});

for (const path of pages) {
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
  await page.goto(`http://localhost:5173${path}`, { waitUntil: "networkidle0", timeout: 30000 });
  // walk the page so every .reveal fires, then return to top
  await page.evaluate(async () => {
    await new Promise((done) => {
      let y = 0;
      const step = () => {
        y += 500;
        window.scrollTo(0, y);
        if (y < document.body.scrollHeight) setTimeout(step, 60);
        else { window.scrollTo(0, 0); setTimeout(done, 500); }
      };
      step();
    });
  });
  const name = path === "/" ? "home" : path.replaceAll("/", "");
  await page.screenshot({ path: `${OUT}/m-${name}.png`, fullPage: true });
  console.log(`shot ${OUT}/m-${name}.png`);
  await page.close();
}
await browser.close();
