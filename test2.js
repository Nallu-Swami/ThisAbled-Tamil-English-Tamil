const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    try {
        await page.goto('https://speechtyping.com/voice-typing/speech-to-text-tamil');

        console.log('Navigated to the page.');

        await page.waitForSelector('#main > article > section > p > img', { timeout: 10000 });
        console.log('First button selector found.');
        await page.click('#main > article > section > p > img');
        console.log('First button clicked.');

        await new Promise(resolve => setTimeout(resolve, 5000));
        console.log('Waited for 5 seconds.');

        await page.waitForXPath('//*[@id="copy_button"]', { timeout: 10000 });
        console.log('Second button XPath found.');
        const [button] = await page.$x('//*[@id="copy_button"]');


        await new Promise(resolve => setTimeout(resolve, 50000000));
    } catch (error) {
        console.error('Error during the Puppeteer script execution:', error);
    } finally {
        await browser.close();
    }
})();
