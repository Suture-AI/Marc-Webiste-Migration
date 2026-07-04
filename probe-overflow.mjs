import puppeteer from "puppeteer-core";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const pages = process.argv.slice(2);

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars"],
});

for (const path of pages) {
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(`http://localhost:5173${path}`, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 600));
  const report = await page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const out = [];
    for (const el of document.querySelectorAll("*")) {
      const r = el.getBoundingClientRect();
      if (r.right > vw + 1 || r.left < -1) {
        // skip elements whose parent is already reported (keep roots of overflow)
        out.push({
          tag: el.tagName.toLowerCase(),
          cls: (el.className && el.className.baseVal !== undefined ? el.className.baseVal : el.className || "").toString().slice(0, 60),
          left: Math.round(r.left),
          right: Math.round(r.right),
          w: Math.round(r.width),
        });
      }
    }
    return { vw, scrollW: document.documentElement.scrollWidth, bodyW: document.body.scrollWidth, count: out.length, sample: out.slice(0, 25) };
  });
  console.log(`\n=== ${path} === viewport ${report.vw}, doc scrollWidth ${report.scrollW}, body ${report.bodyW}, offenders ${report.count}`);
  for (const o of report.sample) console.log(`  <${o.tag} class="${o.cls}"> left=${o.left} right=${o.right} w=${o.w}`);
  await page.close();
}
await browser.close();
