Here’s the updated `README.md` reflecting the use of `npm --prefix prerender` to run the `prerender` scripts from the root directory:

---

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

## Build Process

### Building the Project

1. **Generate Static Files**

   ```bash
   npm --prefix prerender run build
   ```

   - Generates all pages into the `pages/` directory with injected components and structured layouts.

### Serving the Build

1. **Serve the Built Files**

   ```bash
   npm --prefix prerender run serve-dist
   ```

   - Hosts the static files in the `pages/` directory at [http://localhost:8080](http://localhost:8080).

### Cleaning Builds

1. **Rebuild the Project**

   ```bash
   npm --prefix prerender run rebuild
   ```

   - Removes the `pages/` directory and prepares for a fresh build.

---

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

- **Build Issues:** Verify that all component paths are correct and accessible in `generateWIP.js`.
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

---

This updated `README.md` explains how to run `prerender` scripts from the root directory using `npm --prefix prerender`. Let me know if further adjustments are needed!