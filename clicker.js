const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://speechtyping.com/voice-typing/speech-to-text-tamil';

axios.get(url)
    .then(response => {
        if (response.status === 200) {
            const html = response.data;
            console.log('HTML fetched successfully');
            const $ = cheerio.load(html);
            console.log(html);

            const content = $('body > div.wrapper > div.content-wrapper > main > div > div > div.entry-content > div > div > main > article > section > div > div.inner-container > div.text-block > p').text();

            if (content) {
                console.log('Extracted Content:');
                console.log(content);
            } else {
                console.log('No content found at the specified selector.');
            }
        } else {
            console.error(`Failed to fetch the webpage. Status code: ${response.status}`);
        }
    })
    .catch(error => {
        console.error(`Error fetching the webpage: ${error.message}`);
    });
