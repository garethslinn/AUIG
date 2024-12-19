const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const cheerio = require('cheerio'); // Ensure Cheerio is installed

(async () => {
    try {
        // Launch Puppeteer browser instance
        const browser = await puppeteer.launch({
            headless: true, // Run in headless mode for efficiency
            args: ['--no-sandbox', '--disable-setuid-sandbox'], // Add arguments for containerized environments
        });
        const page = await browser.newPage();

        const url = 'http://localhost:3000/';
        console.log(`Prerendering, please wait ${url}...`);

        // Navigate to the page and wait until network is idle
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 500000 });

        // Get the fully rendered HTML
        const content = await page.content();

        // Define the output path
        const outputDir = path.join(__dirname, '..'); // Adjust if necessary
        const outputPath = path.join(outputDir, 'index.html');

        // Write the content to index.html
        fs.writeFileSync(outputPath, content, 'utf-8');
        console.log(`Prerendered HTML saved to ${outputPath}`);

        // Read the saved index.html
        let html = fs.readFileSync(outputPath, 'utf-8');

        // Load the HTML into Cheerio
        const $ = cheerio.load(html);

        // Remove specific script tags or other unwanted elements
        const scriptsToRemove = ['scripts/auig.js']; // Extendable list
        scriptsToRemove.forEach((scriptSrc) => {
            const removed = $(`script[src="${scriptSrc}"]`).remove().length > 0;
            console.log(removed ? `Removed script: ${scriptSrc}` : `Script not found: ${scriptSrc}`);
        });

        // Get the cleaned HTML
        const cleanedHtml = $.html();

        // Write the cleaned HTML back to index.html
        fs.writeFileSync(outputPath, cleanedHtml, 'utf-8');
        console.log(`Final index.html cleaned and saved to ${outputPath}`);

        // Close the Puppeteer browser instance
        await browser.close();
    } catch (error) {
        console.error('Error during prerendering:', error.message);
        console.error(error.stack);
    }
})();
