import { chromium } from "@playwright/test";
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});
await page.setContent(`<!doctype html><html lang="en"><head><meta charset="UTF-8"><style>
*{box-sizing:border-box}body{margin:0;background:#080b10;color:#f3f5f7;font-family:Arial,sans-serif;padding:65px 75px;height:630px;overflow:hidden;background-image:linear-gradient(#ffffff04 1px,transparent 1px),linear-gradient(90deg,#ffffff04 1px,transparent 1px);background-size:50px 50px}.label{color:#63f29a;font:14px monospace;letter-spacing:3px}.name{font-size:18px;letter-spacing:3px;margin-top:40px}h1{font-size:72px;line-height:1.02;letter-spacing:-3px;margin:22px 0}h1 span{color:#63f29a}.foot{position:absolute;bottom:50px;left:75px;font:16px monospace;letter-spacing:2px;color:#a0aab8}.portal{position:absolute;right:75px;top:160px;width:190px;height:280px;border:13px solid #284434;box-shadow:inset 0 0 0 3px #63f29a,0 0 90px #63f29a22;transform:skewY(-8deg);background:linear-gradient(135deg,#183325,#080b10)}
</style></head><body><div class="label">VL. / GAMEPLAY DEVELOPMENT</div><div class="name">VISHWJEET LILHARE</div><h1>BUILDING WORLDS.<br><span>PROGRAMMING<br>GAMEPLAY.</span></h1><div class="portal"></div><div class="foot">UEFN / VERSE / INTERACTIVE SYSTEMS</div></body></html>`);
await page.screenshot({ path: "public/social-card.png" });
await browser.close();
