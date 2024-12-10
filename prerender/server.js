const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Define a regex to detect search engine crawlers
const crawlerRegex = /(googlebot|bingbot|slurp|duckduckbot|baiduspider)/i;

// 1. Serve static files first
app.use(express.static(path.join(__dirname, '..')));

// 2. Define the root route with User-Agent detection
app.get('/', (req, res) => {
    const userAgent = req.headers['user-agent'] || '';

    if (crawlerRegex.test(userAgent)) {
        // If it's a crawler, serve the prerendered index.html
        const prerenderPath = path.join(__dirname, '..', 'index.html');

        if (fs.existsSync(prerenderPath)) {
            res.sendFile(prerenderPath);
        } else {
            console.warn('Prerendered index.html not found. Serving main.html instead.');
            res.sendFile(path.join(__dirname, '..', 'main.html'));
        }
    } else {
        // For regular users, serve main.html
        res.sendFile(path.join(__dirname, '..', 'main.html'));
    }
});

// 3. Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Prerender server is running at http://localhost:${PORT}`);
});