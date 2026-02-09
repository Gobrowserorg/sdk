import { chromium } from "playwright";

export async function runBrowser(url: string) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(url);
  console.log("Visited:", url);

  await browser.close();
}
