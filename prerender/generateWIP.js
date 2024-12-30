const fs = require('fs');
const path = require('path');

// Directories
const componentsDir = '../components';
const sectionsDir = '../components/sections';
const outputDir = '../dist';

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

// Common <head> content
const headContent = `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Cache Control for Security and Performance -->
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">

    <title>Accessible User Interface Guidelines (AUIG)</title>

    <!-- Updated Meta Description to Reflect AUIG -->
    <meta name="description" content="AUIG provides comprehensive accessibility guidelines for designing and developing inclusive user interfaces. Ensure your digital platforms are accessible, user-friendly, and compliant with current accessibility standards.">

    <meta name="keywords" content="accessible UI, accessibility guidelines, inclusive design, accessible user interfaces, UI accessibility, AUIG, accessible web design, inclusive user experience">

    <!-- Link to Main Stylesheet with Versioning for Cache Busting -->
    <link rel="stylesheet" href="../styles/main.css?v=1.3">

    <!-- PrismJS Light Theme (Enabled by default) -->
    <link id="prism-light-theme" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.css" rel="stylesheet" />
    <!-- PrismJS Dark Theme (Disabled by default) -->
    <link id="prism-dark-theme" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-okaidia.min.css" rel="stylesheet" disabled />

    <!-- Favicon -->
    <link rel="icon" href="../images/favi_1.ico" type="image/x-icon">

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
</head>
`;

// Assemble pages
fs.readdirSync(sectionsDir).forEach((file) => {
    if (file.endsWith('.html')) {
        const sectionContent = fs.readFileSync(path.join(sectionsDir, file), 'utf8');
        const pageTitle = file.replace('.html', ''); // Extract title from filename

        // Assemble the full page
        const pageHTML = `
<!DOCTYPE html>
<html lang="en">
${headContent}
<body>
    ${loadComponent('header.html')}
    ${loadComponent('nav.html')}
    <main>
        ${sectionContent}
    </main>
    ${loadComponent('footer.html')}
</body>
</html>`;

        // Write the page to the output directory
        const outputPath = path.join(outputDir, file);
        fs.writeFileSync(outputPath, pageHTML, 'utf8');
        console.log(`Generated: ${outputPath}`);
    }
});
