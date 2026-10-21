// Renders the app icons into docs/ with Playwright. Run: node scripts/make-icons.mjs
// (needs Playwright; set PLAYWRIGHT_MODULE to its path if it isn't installed locally)
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || "playwright");
const face = (scale) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#5b4bc4"/>
  <g transform="translate(256 256) scale(${scale}) translate(-27 -27)">
    <circle cx="27" cy="27" r="25" fill="#f0c35a"/>
    <circle cx="19" cy="22" r="2.8" fill="#23212e"/>
    <circle cx="35" cy="22" r="2.8" fill="#23212e"/>
    <path d="M16 33 Q27 43 38 33" stroke="#23212e" stroke-width="3" fill="none" stroke-linecap="round"/>
  </g>
</svg>`;
const browser = await chromium.launch();
const page = await browser.newPage();
for (const [file, size, scale] of [["icon-192.png", 192, 7.2], ["icon-512.png", 512, 7.2], ["icon-maskable-512.png", 512, 5.6]]) {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(`<style>body{margin:0}svg{display:block;width:${size}px;height:${size}px}</style>${face(scale)}`);
  await page.screenshot({ path: new URL(`../docs/${file}`, import.meta.url).pathname });
}
await browser.close();
console.log("Icons written to docs/");
