# AUIG: Accessible User Interface Guidelines

![AUIG Logo](https://raw.githubusercontent.com/garethslinn/AUIG/refs/heads/main/images/auig_light.svg)

> [!IMPORTANT]
> **AUIG is now closed.** This project is archived and is no longer actively maintained. The final published website version was **1.0.0.4**, dated **23 April 2025**. The repository remains available for open-source and historical reference, but its material should not be treated as current accessibility guidance.

## [Read about the AUIG archive](https://cogainstitute.com/archive/auig)

AUIG covered general user-interface accessibility. It was not adopted as a COGAI standard or as a cognitive-accessibility framework. For current web-accessibility standards and implementation support, use the [W3C Web Accessibility Initiative](https://www.w3.org/WAI/).

### Quick Start

1. Clone the repository.
2. Run `npm install` in both the root and `prerender` directories.
3. Start the project with `npm run watch`.

---

## Table of Contents

- [Overview](#overview)
- [Closure and archive status](#closure-and-archive-status)
- [Key components](#key-components)
- [Historical features](#historical-features)
- [Tech stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

**AUIG** provided comprehensive guidelines for designing accessible and inclusive user interfaces. It was created to help designers and developers build interfaces for a broad range of users, with an emphasis on usability and recognised accessibility standards.

## Closure and archive status

- Final published version: **1.0.0.4**
- Final publication date: **23 April 2025**
- Current status: **Closed and archived; no active development or support**
- Archive information: [cogainstitute.com/archive/auig](https://cogainstitute.com/archive/auig)

Web standards and recommended practices continue to change. Review any example from this repository against current authoritative sources before using it in a live service.

## Key components

- **Design Principles**: Foundational guidelines for accessible UI design.
- **Component Guidelines**: Best practices for accessible UI elements.
- **Responsive Design**: Guidance intended to support usability across devices.
- **Interactive Features**: Enhancements such as theme toggles and font adjustments.
- **Resources**: Additional tools and references.

---

## Historical features

- **WCAG 2.1 AA focus**: The project was designed around recognised accessibility standards.
- **Responsive Layout**: Optimised for desktops, tablets, and mobile devices.
- **Customisable Preferences**: Theme and font controls intended to improve the user experience.
- **Static Content Generation**: Efficient, SEO-friendly builds.

---

## Tech stack

- **HTML5 and CSS3**: Semantic structure and styling.
- **JavaScript**: Interactive functionality.
- **Node.js**: Local server and build automation.
- **PrismJS**: Syntax highlighting.
- **Web Standards**: Accessibility-focused implementation guidance.

---

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/garethslinn/AUIG.git
   cd AUIG
   ```

2. **Install the root dependencies**

   ```bash
   npm install
   ```

3. **Install the prerender dependencies**

   ```bash
   cd prerender
   npm install
   cd ..
   ```

---

## Usage

### Start the development server

From the repository root, run:

```bash
npm run serve
```

In a separate terminal, start the file watcher:

```bash
npm run watch
```

### Workflow

- **Important:** To change page content, update the templates in `components` only. Files in `pages`, `articles`, and the root HTML files are generated automatically when component files change.
- The project rebuilds when changes are detected in the `components`, `scripts`, `images`, or `styles` directories.
- Static files are served from the `pages` and `articles` directories.

---

## Contributing

AUIG is closed and this repository is retained as a historical archive. It is not accepting new features or content contributions.

---

## License

This project is licensed under the terms described in [LICENSE.md](LICENSE.md).

---

## Contact

- **Lead Developer**: Gareth Slinn
- **Email**: [gslinn@gmail.com](mailto:gslinn@gmail.com)
- **Archive page**: [cogainstitute.com/archive/auig](https://cogainstitute.com/archive/auig)
