const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    "https://www2.correios.com.br/sistemas/rastreamento/default.cfm"
  );
  await page.waitForSelector('textarea[name="objetos"]', {
    timeout: 20000,
  });

  await page.type('textarea[name="objetos"]', "LE279405455SE");
  await page.click('input[name="btnPesq"]');
})();
