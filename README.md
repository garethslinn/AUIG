# AUIG: Accessible User Interface Guidelines

![AUIG Logo](https://raw.githubusercontent.com/garethslinn/AUIG/refs/heads/main/images/auig_light.svg)

> [!IMPORTANT]
> **This project is archived and is no longer actively maintained.** The final published website version was **1.0.0.4**, dated **23 April 2025**. Its source and history remain available for open-source and historical reference, but the material should not be treated as current accessibility guidance.

## [Read about the AUIG archive](https://cogainstitute.com/archive/auig)

AUIG covered general user-interface accessibility. It has not been adopted as a COGAI standard or as a cognitive-accessibility framework. For current web-accessibility standards and implementation support, use the [W3C Web Accessibility Initiative](https://www.w3.org/WAI/).

### **Quick Start**
1. Clone the repo.
2. Run `npm install` in both root and prerender folder.
3. Start the project with `npm run watch`.

---

## Table of Contents

- [Overview](#overview)
- [Archive status](#archive-status)
- [Historical features](#historical-features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

**AUIG** was an independent reference project that brought together practical information about accessible and inclusive user-interface design and development.

## Archive status

- Final published version: **1.0.0.4**
- Final publication date: **23 April 2025**
- Current status: **Archived; no active development or support**
- Archive information: [cogainstitute.com/archive/auig](https://cogainstitute.com/archive/auig)

Web standards and recommended practices continue to change. Review any example from this repository against current authoritative sources before using it in a live service.

### Key Components

- **Design Principles**: Foundational guidelines for accessible UI design.
- **Component Guidelines**: Best practices for accessible UI elements.
- **Responsive Design**: Ensures usability across devices.
- **Interactive Features**: Enhancements like theme toggles and font adjustments.
- **Resources**: Additional tools and references.

---

## Historical features

- **Responsive Layout**: Optimized for desktops, tablets, and mobiles.
- **Customizable Preferences**: Theme and font controls for enhanced user experience.
- **Static Content Generation**: Efficient and SEO-friendly builds.

---

## Tech Stack

- **HTML5 & CSS3**: Semantic structure and styling.
- **JavaScript**: Interactive functionalities.
- **Node.js**: Local server and build automation.
- **PrismJS**: Syntax highlighting.
- **Web Standards**: Compliance with accessibility guidelines.

---

## Installation

1. **Clone the Repository**  
   Clone the repository to your local machine:
   ```bash
   git clone https://github.com/garethslinn/auig.git
   cd auig
   ```

2. **Install Dependencies**  
   Install all required dependencies:
   ```bash
   npm install
   ```
   **NOTE: in both root and prerender folder**

---

## Usage

### Start the Development Server
Run the following command (in the root) to start the server and watch for changes:
```bash
npm run serve
```
In a different terminal run "watch"
```bash
npm run watch
```

### Workflow

- **Important:** If you want to change the content of the pages, make updates in the `components` templates only. The `./pages`, `./articles` and root HTML files are automatically generated each time the component files are changed.
- The project automatically rebuilds when changes are detected in the `components`, `scripts`, `images`, or `styles` directories.
- Static files are served from the `./pages` and `./articles` directory.

---

## Contributing

This repository is retained as a read-only historical archive and is not accepting new features or content contributions.

---

## License

This project is licensed under the [License](LICENSE.md).

---

## Contact

- **Lead Developer**: Gareth Slinn
- **Archive page**: [cogainstitute.com/archive/auig](https://cogainstitute.com/archive/auig)

---
