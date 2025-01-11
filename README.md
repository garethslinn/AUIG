# AUIG: Accessible User Interface Guidelines

![AUIG Logo](https://raw.githubusercontent.com/garethslinn/AUIG/refs/heads/main/images/auig_light.svg)

## [Visit the Website](https://www.auig.org)

## Table of Contents

- [Overview](#overview)
- [Status](#status)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Build Process](#build-process)
   - [Building the Project](#building-the-project)
   - [Serving the Build](#serving-the-build)
   - [Cleaning Builds](#cleaning-builds)
- [Testing](#testing)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

**AUIG** provides comprehensive guidelines for designing accessible and inclusive user interfaces. It empowers designers and developers to create interfaces that cater to all users, ensuring usability and compliance with accessibility standards.

### Key Components

- **Design Principles:** Foundational guidelines for accessible UI design.
- **Component Guidelines:** Best practices for accessible UI elements.
- **Responsive Design:** Ensures usability across devices.
- **Interactive Features:** Enhancements like theme toggles and font adjustments.
- **Resources:** Additional tools and references.

---

## Status

**AUIG** is **actively developed** with ongoing enhancements to content, interactivity, and accessibility features. Contributions are encouraged to enrich the guidelines.

---

## Features

- **WCAG 2.1 AA Compliance:** Adheres to recognized accessibility standards.
- **Responsive Layout:** Optimized for desktops, tablets, and mobiles.
- **Interactive TOC:** Easy navigation through sections.
- **Theme & Font Controls:** Customizable viewing preferences.
- **Static Content Generation:** Efficient and SEO-friendly builds.

---

## Tech Stack

- **HTML5 & CSS3:** Semantic structure and styling.
- **JavaScript:** Interactive functionalities.
- **Node.js:** Local server and build automation.
- **PrismJS:** Syntax highlighting.
- **Web Standards:** Compliance with accessibility guidelines.

---

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/garethslinn/auig.git
   cd auig
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

---

## Usage

### View the Guidelines Locally

1. **Start the Development Server**

   ```bash
   npm start
   ```

2. **Access the Local Site**

   Open [http://localhost:3000](http://localhost:3000) in your browser to explore the guidelines.

---

### **Build Process**

#### **Building the Project**

1. **Generate Articles Data**

   The first step is to generate the required articles data from the navigation component. This creates a JSON file used for building dynamic pages.

   ```bash
   npm --prefix prerender run build
   ```

   - This executes `generate.js` to extract data from `navArticles.html` and save it as a JSON file in the `prerender/` directory.

2. **Build Articles Page**

   After generating the articles data, this script creates a responsive articles grid in the `index.html` file under the `articles/` directory.

   ```bash
   npm --prefix prerender run articles
   ```

   - This runs `buildArticlesPage.js`, ensuring the grid is updated dynamically based on the latest articles data.

3. **Full Build**

   To execute both steps sequentially:

   ```bash
   npm --prefix prerender run build:full
   ```

   - Runs `generate.js` first and then `buildArticlesPage.js`.

---

### **Clean Build**

To clean and rebuild the project:

```bash
npm --prefix prerender run rebuild
```

- Removes the `pages/` directory and regenerates all files.

---

### **Troubleshooting**

- **Missing Articles Data:**
  Ensure `generate.js` runs successfully before `buildArticlesPage.js`. Use the `build:full` script for sequential execution.

- **Issues with Articles Page:**
  Check that the `navArticles.html` file contains valid `aria-label`, `href`, and `data-image` attributes for all articles.

- **JavaScript Errors:**
  Verify the logic in both `generate.js` and `buildArticlesPage.js`. Debug any Cheerio-related manipulations in case of malformed HTML.


## Testing

- **Accessibility Tools:** Use [WAVE](https://wave.webaim.org/) or [AXE](https://www.deque.com/axe/) for compliance checks.
- **Responsive Testing:** Utilize browser dev tools to test on various devices.
- **Functionality Checks:** Verify interactive elements like theme toggles and font adjustments.

---

## Deployment

1. **Choose a Deployment Platform**

   - **GitHub Pages**
   - **Netlify**
   - **Vercel**

2. **Deploy the Static Build**

   Upload the contents of the `pages/` directory to your chosen platform, ensuring that `index.html` is served correctly.

---

## Troubleshooting

- **Build Issues:** Verify that all component paths are correct and accessible in `generate.js`.
- **JavaScript Errors:** Check browser console for errors in interactive features.
- **Server Issues:** Ensure no port conflicts when running the development or static servers.

---

## Contributing

Contributions are welcome! To contribute:

1. **Fork the Repository**
2. **Create a Branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit Changes**

   ```bash
   git commit -m "Add feature"
   ```

4. **Push & Submit PR**

   ```bash
   git push origin feature/YourFeature
   ```

Ensure your contributions adhere to project standards and enhance accessibility features.

---

## License

This project is licensed under the [License](LICENSE.md).

---

## Contact

- **Lead Developer:** Gareth Slinn
- **Email:** [gslinn@gmail.com](mailto:gslinn@gmail.com)
- **Website:** [www.auig.org](https://www.auig.org)
