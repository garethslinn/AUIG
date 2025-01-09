const fs = require('fs');
const path = require('path');

// Directories
const componentsDir = '../components';
const sectionsDir = path.join(componentsDir, 'sections');
const articlesDir = path.join(componentsDir, 'articles');
const outputDir = '../pages';
const articlesOutputDir = '../articles';
const rootDir = '../';

// Function to load reusable components
const loadComponent = (filename) => {
    const filePath = path.join(componentsDir, filename);
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, 'utf8');
    } else {
        console.error(`Component not found: ${filename}`);
        return '';
    }
};

// Ensure output directories exist
[outputDir, articlesOutputDir].forEach((dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

// Common <head> content template
const headTemplate = (title) => `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">
    <title>${title}</title>
    <meta name="description" content="AUIG provides comprehensive accessibility guidelines for designing and developing inclusive user interfaces.">
    <meta name="keywords" content="accessible UI, accessibility guidelines, inclusive design, accessible user interfaces, UI accessibility, AUIG, accessible web design, inclusive user experience">
    <link rel="stylesheet" href="../styles/main.css?v=1.7">
    <link rel="icon" href="../images/favi_1.ico" type="image/x-icon">
    <link rel="canonical" href="https://auig.org/">
</head>`;

// Function to assemble pages with dynamic navigation
const assemblePages = (inputDir, outputDir, navFile) => {
    if (!fs.existsSync(inputDir)) {
        console.error(`Directory not found: ${inputDir}`);
        return;
    }

    // Load the navigation HTML
    const navContent = loadComponent(navFile);

    fs.readdirSync(inputDir).forEach((file) => {
        if (file.endsWith('.html')) {
            const content = fs.readFileSync(path.join(inputDir, file), 'utf8');
            const pageTitle = file
                .replace('.html', '')
                .replace(/-/g, ' ')
                .replace(/\b\w/g, char => char.toUpperCase());

            const headContent = headTemplate(`${pageTitle} - Accessible User Interface Guidelines (AUIG)`);

            // Assemble the full page
            const pageHTML = `
<!DOCTYPE html>
<html lang="en">
${headContent}
<body data-theme="light">

<!-- Skip to main content link -->
<a href="#main-content" class="sr-only">Skip to main content</a>

<!-- Accessibility Controls -->
<aside class="controls" aria-label="Accessibility controls">
    <img class="logo" width="auto" height="40" src="/images/auig_light.svg" alt="AUIG logo" />
    <span>
        <button id="decrease-font" aria-label="Decrease text size">A-</button>
        <button id="increase-font" aria-label="Increase text size">A+</button>
        <button id="toggle-theme" aria-label="Toggle dark and light mode">🌙</button>
    </span>
</aside>

<div class="container">
    <!-- Sidebar -->
    <aside id="toc" class="nav" aria-label="Table of Contents">
        <nav id="nav" aria-label="Main Navigation">
            ${navContent}
        </nav>
    </aside>

    <!-- Main Content -->
    <main id="main-content">
        <div class="section-container">
            ${content}
        </div>
    </main>
</div>

<!-- Footer (removed to aid scrolling) -->

<!-- Back to Top Button -->
<button id="back-to-top" class="hide" aria-label="Back to Top">Back to top</button>

<script src="../scripts/loader.js?v=1.6.1"></script>
<script src="../scripts/main.js?v=1.6.1" defer></script>
</body>
</html>`;

            const outputPath = path.join(outputDir, file);
            fs.writeFileSync(outputPath, pageHTML, 'utf8');
            console.log(`Generated: ${outputPath}`);
        }
    });
};

// Process sections with primary navigation
assemblePages(sectionsDir, outputDir, 'nav.html');

// Process articles with articles navigation
assemblePages(articlesDir, articlesOutputDir, 'navArticles.html');

// Copy index.html to the root directory
const sourceFileIndex = path.join(outputDir, 'index.html');
const destinationFileIndex = path.join(rootDir, 'index.html');
if (fs.existsSync(sourceFileIndex)) {
    fs.copyFileSync(sourceFileIndex, destinationFileIndex);
    console.log(`Copied index.html to root: ${destinationFileIndex}`);
} else {
    console.error('index.html not found in the output directory.');
}
