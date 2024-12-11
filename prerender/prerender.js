const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const cheerio = require('cheerio'); // Ensure Cheerio is installed

(async () => {
    try {
        // Launch Puppeteer browser instance
        const browser = await puppeteer.launch({
            // Optional: Run in headless mode
            // headless: true,
        });
        const page = await browser.newPage();

        const url = 'http://localhost:3000/';

        console.log(`Prerendering ${url}...`);

        // Navigate to the page and wait until network is idle
        await page.goto(url, { waitUntil: 'networkidle0' });

        // Get the fully rendered HTML
        const content = await page.content();

        // Define the output path (placing index.html next to main.html)
        const outputDir = path.join(__dirname, '..'); // Adjust if necessary
        const outputPath = path.join(outputDir, 'index.html');

        // Write the content to index.html
        fs.writeFileSync(outputPath, content, 'utf-8');

        console.log(`Prerendered HTML saved to ${outputPath}`);

        // Read the saved index.html
        let html = fs.readFileSync(outputPath, 'utf-8');

        // Load the HTML into Cheerio
        const $ = cheerio.load(html);

        // Select and remove the <script> tag with src="scripts/loader.js"
        $('script[src="scripts/loader.js"]').remove();

        // (Optional) Log the removal
        const scriptRemoved = $('script[src="scripts/loader.js"]').length === 0;
        if (scriptRemoved) {
            console.log('loader.js script tag successfully removed.');
        } else {
            console.warn('loader.js script tag was not found or could not be removed.');
        }

        // Get the modified HTML
        const cleanedHtml = $.html();

        // Write the cleaned HTML back to index.html
        fs.writeFileSync(outputPath, cleanedHtml, 'utf-8');

        console.log(`Final index.html without loader.js has been saved to ${outputPath}`);

        // Close the Puppeteer browser instance
        await browser.close();
    } catch (error) {
        console.error('Error during prerendering:', error);
    }
})();
