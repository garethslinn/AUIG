# AUIG: Accessible User Interface Guidelines

![AUIG Logo](https://raw.githubusercontent.com/garethslinn/auig-project/main/images/auig_light.svg)

## [Visit the Website](https://www.auig.org)

## Table of Contents

- [Overview](#overview)
- [Status](#status)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Runbook](#runbook)
   - [Local Setup](#local-setup)
   - [Prerendering](#prerendering)
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
- **Prerendered Content:** Enhanced SEO and accessibility.

---

## Tech Stack

- **HTML5 & CSS3:** Semantic structure and styling.
- **JavaScript:** Interactive functionalities.
- **Node.js & Express:** Local server and prerendering.
- **Puppeteer:** Automated prerendering.
- **PrismJS:** Syntax highlighting.
- **Web Standards:** Compliance with accessibility guidelines.

---

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/auig.git
   cd auig
   ```

2. **Install Dependencies**

   ```bash
   cd prerender
   npm install
   ```

3. **Start the Local Server & Prerender**

   ```bash
   npm run prerender-all
   ```

   This command starts the server, prerenders `index.html`, and saves it in the project root.

---

## Usage

1. **View the Guidelines**

   Open [http://localhost:3000](http://localhost:3000) in your browser to explore the guidelines.

2. **Customize View**

   - **Toggle Theme:** Switch between light and dark modes.
   - **Adjust Font Size:** Increase or decrease text size for better readability.
   - **Navigate:** Use the Table of Contents or "Back to Top" button for easy navigation.

---

## Runbook

### Local Setup

1. **Ensure Prerequisites**

   - **Git**
   - **Node.js**

2. **Clone & Navigate**

   ```bash
   git clone https://github.com/yourusername/auig.git
   cd auig
   ```

3. **Install Dependencies**

   ```bash
   cd prerender
   npm install
   ```

4. **Launch**

   ```bash
   npm run prerender-all
   ```

### Prerendering

1. **Navigate to Prerender Directory**

   ```bash
   cd prerender
   ```

2. **Run Prerender Script**

   ```bash
   npm run prerender
   ```

3. **Verify `index.html`**

   Open `index.html` to ensure all components are correctly injected.

### Testing

- **Accessibility Tools:** Use [WAVE](https://wave.webaim.org/) or [AXE](https://www.deque.com/axe/) for compliance checks.
- **Responsive Testing:** Utilize browser dev tools to test on various devices.
- **Functionality Checks:** Verify interactive elements like theme toggles and font adjustments.

### Deployment

1. **Choose Platform**

   - **GitHub Pages**
   - **Netlify**
   - **Vercel**

2. **Deploy**

   Follow platform-specific instructions to deploy the static site, ensuring `index.html` is served correctly.

### Troubleshooting

- **Missing Components:** Ensure all component paths are correct and accessible.
- **JavaScript Errors:** Check browser console for errors during prerendering.
- **Server Issues:** Verify the local server is running and not conflicting on ports.

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

This project is licensed under the [MIT License](LICENSE.md).

---

## Contact

- **Lead Developer:** Gareth Slinn
- **Email:** [gslinn@gmail.com](mailto:gslinn@gmail.com)
- **Website:** [www.auig.org](https://www.auig.org)

---

Feel free to customize this template further to better fit your project's specific needs!