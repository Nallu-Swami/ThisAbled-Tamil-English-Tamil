const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({ headless: false }); // Set headless: false to see the browser in action
    const page = await browser.newPage();


    const url = 'https://speechtyping.com/voice-typing/speech-to-text-tamil';
    await page.goto(url);

    await page.waitForSelector('body > div.wrapper > div.content-wrapper > main > div > div > div.entry-content > div > div > main > article > section > div > div.inner-container > div.text-block > p');

    const content = await page.$eval('body > div.wrapper > div.content-wrapper > main > div > div > div.entry-content > div > div > main > article > section > div > div.inner-container > div.text-block > p', element => element.textContent);

    console.log('Extracted Content:');
    console.log(content);

    await browser.close();
})();
