const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Generate a random hash
const generateHash = () => crypto.randomBytes(8).toString('hex');

// Directories
const componentsDir = '../components';
const sectionsDir = '../components/sections';
const outputDir = '../pages';
const rootDir = '../'; // Root directory to copy the index.html file

// Load reusable components
const loadComponent = (filename) => {
    const filePath = path.join(componentsDir, filename);
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, 'utf8');
    } else {
        console.error(`Component not found: ${filename}`);
        return '';
    }
};

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Generate random hashes for versioning
const cssVersion = generateHash();
const jsVersion = generateHash();

// Common <head> content
const headContent = `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">

    <title>Accessible User Interface Guidelines (AUIG)</title>

    <meta name="description" content="AUIG provides comprehensive accessibility guidelines for designing and developing inclusive user interfaces. Ensure your digital platforms are accessible, user-friendly, and compliant with current accessibility standards.">

    <meta name="keywords" content="accessible UI, accessibility guidelines, inclusive design, accessible user interfaces, UI accessibility, AUIG, accessible web design, inclusive user experience">

    <link rel="stylesheet" href="../styles/main.css?v=${cssVersion}">
    <link id="prism-light-theme" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.css" rel="stylesheet" />
    <link id="prism-dark-theme" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-okaidia.min.css" rel="stylesheet" disabled />

    <link rel="icon" href="../images/favi_1.ico" type="image/x-icon">

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
</head>
`;

// Adjust resource paths for the root version

const adjustPathsForRoot = (html) => {
    return html
        .replace(/"\.\.\//g, '"') // Remove ../ and ensure the leading " remains
        .replace(/href="\.\//g, 'href="') // Adjust relative href paths
        .replace(/src="\.\//g, 'src="'); // Adjust relative src paths
};

// Assemble pages
fs.readdirSync(sectionsDir).forEach((file) => {
    if (file.endsWith('.html')) {
        const sectionContent = fs.readFileSync(path.join(sectionsDir, file), 'utf8');
        const pageTitle = file.replace('.html', '');

        const pageHTML = `
<!DOCTYPE html>
<html lang="en">
${headContent}
<body data-theme="light">
    <a href="#main-content" class="sr-only">Skip to main content</a>
    <aside class="controls" aria-label="Accessibility controls">
        <img class="logo" width="auto" height="40" src="../images/ca11y_light.svg" alt="Ca11y logo depicting cognitive accessibility" />
        <span>
            <button id="decrease-font" aria-label="Decrease text size">A-</button>
            <button id="increase-font" aria-label="Increase text size">A+</button>
            <button id="toggle-theme" aria-label="Toggle dark and light mode">🌙</button>
        </span>
    </aside>
    <div class="container">
        <aside id="toc" class="nav" aria-label="Table of Contents">
            <nav id="nav" aria-label="Main Navigation">
                <button id="toggleButton" class="toggle-button">
                    <div class="icon-hamburger">Menu</div>
                    <div class="icon-close" style="display: none;">Close</div>
                </button>
                <div class="navlist" id="navlist"></div>
            </nav>
        </aside>
        <main id="main-content">
            <div class="section-container">
                ${sectionContent}
            </div>
        </main>
    </div>
    <footer id="footer">
        ${loadComponent('footer.html')}
    </footer>
    <button id="back-to-top" class="hide" aria-label="Back to Top">Back to top</button>
    <script src="../scripts/loader.js?v=${jsVersion}"></script>
    <script src="../scripts/components/iconDetail.js?v=${jsVersion}"></script>
    <script src="../scripts/main.js?v=${jsVersion}" defer></script>
    <script src="../scripts/auig.js?v=${jsVersion}" defer></script>
</body>
</html>`;

        const outputPath = path.join(outputDir, file);
        fs.writeFileSync(outputPath, pageHTML, 'utf8');
        console.log(`Generated: ${outputPath}`);

        // If the file is index.html, copy it to the root directory with adjusted paths
        if (file === 'index.html') {
            const rootOutputPath = path.join(rootDir, file);
            const adjustedHTML = adjustPathsForRoot(pageHTML);
            fs.writeFileSync(rootOutputPath, adjustedHTML, 'utf8');
            console.log(`Copied index.html to root with adjusted paths: ${rootOutputPath}`);
        }
    }
});
