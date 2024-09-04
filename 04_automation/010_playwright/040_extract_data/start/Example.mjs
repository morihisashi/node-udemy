import { chromium } from "@playwright/test";

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");
  // css セレクター
  const htmlStr = await page.content();
  const pageTitleLocator = page.locator('.navbar-brand');
  const pageTitle = await pageTitleLocator.innerText();
  // console.log(pageTitle);
  // 文字列で要素を取得
  const textLocator = page.locator("text=名刺管理アプリ");
  const pageText = await textLocator.innerText();
  console.log(pageText);
  await browser.close();
})();
