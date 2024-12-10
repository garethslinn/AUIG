const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        const url = 'http://localhost:3000/';

        console.log(`Prerendering ${url}...`);

        // Navigate to the page and wait until network is idle
        await page.goto(url, { waitUntil: 'networkidle0' });

        // Get the fully rendered HTML
        const content = await page.content();

        // Define the output path (placing index.html next to main.html)
        const outputDir = path.join(__dirname, '..');
        const outputPath = path.join(outputDir, 'index.html');

        // Write the content to index.html
        fs.writeFileSync(outputPath, content);

        console.log(`Prerendered HTML saved to ${outputPath}`);

        await browser.close();
    } catch (error) {
        console.error('Error during prerendering:', error);
    }
})();
