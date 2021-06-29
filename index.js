const puppeteer = require("puppeteer");

(async () => {
  const userName = "username";
  const password = "password";

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://twitter.com/login");

  await page.waitForSelector('input[name="session[username_or_email]"]', {
    timeout: 20000,
  });
  await page.type('input[name="session[username_or_email]"]', userName);
  await page.type('input[name="session[password]"', password);
  await page.click("div[role=button]");

  await page.screenshot({ path: "twitter_login_page.png" });
})();
