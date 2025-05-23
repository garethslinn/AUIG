const fs = require('fs');
const path = require('path');

// Directories
const componentsDir = '../components';
const sectionsDir = path.join(componentsDir, 'sections');
const articlesDir = path.join(componentsDir, 'articles');
const cogDir = path.join(componentsDir, 'cog');
const outputDir = '../pages';
const articlesOutputDir = '../articles';
const cogOutputDir = '../cog';
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
    <!-- Cache Control for Security and Performance -->
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">

    <title>${title}</title>

    <!-- Updated Meta Description to Reflect AUIG -->
    <meta name="description" content="AUIG provides comprehensive accessibility guidelines for designing and developing inclusive user interfaces. Ensure your digital platforms are accessible, user-friendly, and compliant with current accessibility standards.">

    <meta name="keywords" content="accessible UI, accessibility guidelines, inclusive design, accessible user interfaces, UI accessibility, AUIG, accessible web design, inclusive user experience">

    <!-- Link to Main Stylesheet with Versioning for Cache Busting -->
    <link rel="stylesheet" href="../styles/main.css?v=1.7">

    <!-- PrismJS Light Theme -->
    <link id="prism-light-theme" href="../styles/external/prism-light-theme.css" rel="stylesheet" />
    <!-- PrismJS Dark Theme -->
    <link id="prism-dark-theme" href="../styles/external/prism-dark-theme.css" rel="stylesheet" disabled />

    <!-- Favicon -->
    <link rel="icon" href="../images/favi_1.ico" type="image/x-icon">
    
    <link rel="canonical" href="https://auig.org/">

    <!-- Structured Data for Organization -->
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Accessible User Interface Guidelines (AUIG)",
            "url": "https://www.auig.org",
            "logo": "https://www.auig.org/images/auig_light.svg",
            "description": "AUIG provides comprehensive accessibility guidelines for designing and developing inclusive user interfaces, ensuring digital platforms are accessible, user-friendly, and compliant with current accessibility standards.",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "",
                "contactType": "Customer Service",
                "areaServed": "UK",
                "availableLanguage": ["English"]
            }
        }
    </script>
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
        <nav id="nav" class="navlist" aria-label="Main Navigation">
            <button id="toggleButton" class="toggle-button">
                <div class="icon icon-hamburger"><span>Menu</span></div>
                <div class="icon icon-close"><span>Close</span></div>
            </button>
            ${navContent}
        </nav>
    </aside>

    <!-- Main Content -->
    <main id="main-content">
        <nav class="main-nav">
            <nav-buttons url="/" title="Home"></nav-buttons>
            <nav-buttons url="/articles" title="Articles"></nav-buttons>
            <nav-buttons url="/cog" title="Cog"></nav-buttons>
        </nav>
        <div class="section-container">
            ${content}
        </div>
    </main>
</div>

<!-- Footer (removed to aid scrolling) -->

<!-- Back to Top Button -->
<button id="back-to-top" class="hide" aria-label="Back to Top">Back to top</button>

<!-- PrismJS Library -->
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.js"></script>

<script src="../scripts/loader.js?v=1.6.1"></script>
<script src="../scripts/components/iconDetail.js?v=1.6.1"></script>
<script src="../scripts/components/EaseSwitcher.js?v=1.6.1"></script>
<script src="../scripts/components/ShareButtons.js?v=1.6.1"></script>
<script src="../scripts/components/TitleImage.js?v=1.6.1"></script>
<script src="../scripts/components/NavButtons.js?v=1.6.1"></script>
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

// Process Cog pages with cog-specific navigation
assemblePages(cogDir, cogOutputDir, 'navCog.html');

// Copy index.html to the root directory
const sourceFileIndex = path.join(outputDir, 'index.html');
const destinationFileIndex = path.join(rootDir, 'index.html');
if (fs.existsSync(sourceFileIndex)) {
    fs.copyFileSync(sourceFileIndex, destinationFileIndex);
    console.log(`Copied index.html to root: ${destinationFileIndex}`);
} else {
    console.error('index.html not found in the output directory.');
}
