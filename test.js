const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    try {
        console.log('Navigating to the page...');
        await page.goto('https://speechtyping.com/voice-typing/speech-to-text-tamil', { waitUntil: 'networkidle2' });

        console.log('Waiting for the button to be visible...');
        await page.waitForSelector('#main > article > section > p > img', { visible: true });

        console.log('Clicking the button...');
        await page.click('#main > article > section > p > img');

        console.log('Button clicked. Keeping the browser open...');
        await new Promise(resolve => setTimeout(resolve, 50000000));
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await browser.close();
    }
})();
