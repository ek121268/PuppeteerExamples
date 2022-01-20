const puppeteer = require('puppeteer');
const PuppeteerHar = require('puppeteer-har');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  const har = new PuppeteerHar(page);
  await har.start({ path: 'book_demo.har' });

  await page.goto('https://www.packtpub.com/');

  await har.stop();
  await browser.close();
})();