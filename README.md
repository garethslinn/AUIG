# Ca11y: Accessible Recruitment Solutions for Individuals with Cognitive Challenges

![Ca11y Logo](https://raw.githubusercontent.com/garethslinn/ca11y-project/refs/heads/main/images/ca11y_light.svg)


## Link to [website](https://www.ca11y.net)

## Table of Contents

- [Project Overview](#project-overview)
- [Current Status](#current-status)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Runbook](#runbook)
    - [Running Locally](#running-locally)
    - [Testing](#testing)
    - [Deployment](#deployment)
    - [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Project Overview

**Ca11y** is a comprehensive guide and web-based resource dedicated to promoting **inclusive recruitment practices** for individuals with cognitive, neurological, and psychological challenges. Recognizing the diverse needs of potential employees, Ca11y aims to empower HR professionals, recruiters, hiring managers, and organizational leaders to create equitable hiring environments that accommodate and leverage the unique strengths of all candidates.

### Key Components:

- **Abstract:** Provides an overview of the guide's purpose and significance.
- **Unique Benefits:** Highlights the advantages of hiring individuals with specific conditions.
- **Definitions and Challenges:** Clarifies key terms and outlines recruitment challenges for various groups.
- **Job Specifications and Announcements:** Guides on crafting inclusive job descriptions.
- **Application and Interview Processes:** Offers strategies for accessible and equitable recruitment stages.
- **Assessment and Post-Interview Procedures:** Ensures fair evaluation and onboarding practices.
- **Continuous Improvement:** Emphasizes the importance of feedback and regular reviews.
- **Resources and Training:** Supplies additional tools and learning opportunities.
- **Legal and Ethical Considerations:** Outlines compliance with accessibility laws and ethical hiring practices.
- **Glossary and Appendices:** Provides definitions and supplementary materials for reference.

---

## Current Status

**Ca11y** is currently **in development**. The project is actively being expanded to include comprehensive content, interactive features, and enhanced accessibility options. Contributions and feedback are welcome to ensure the guide effectively serves its intended audience.

---

## Features

- **Accessible Design:** Ensures the website adheres to WCAG 2.1 AA standards for accessibility.
- **Responsive Layout:** Optimized for various devices, including desktops, tablets, and mobile phones.
- **Interactive Table of Contents:** Facilitates easy navigation through different sections.
- **"Back to Top" Button:** Enhances user experience by allowing quick navigation to the top of the page.
- **Theme Toggle:** Switch between light and dark modes for improved readability.
- **Font Size Adjustment:** Customize text size to suit individual reading preferences.
- **Inclusive Content:** Comprehensive strategies and guidelines for accessible recruitment practices.

---

## Technologies Used

- **HTML5:** Structuring the content semantically.
- **CSS3:** Styling with responsiveness and accessibility in mind.
- **JavaScript:** Enhancing interactivity, including the "Back to Top" button functionality.
- **SVG Icons:** Scalable and accessible icons for improved UI.
- **Web Accessibility Standards:** Adhering to WCAG 2.1 AA guidelines.

---

## Installation

To set up the project locally for development or testing purposes, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/ca11y.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd ca11y
   ```

3. **Install Dependencies**

   This project is a static website and doesn't require additional dependencies. However, if you plan to extend functionality or use build tools, ensure you have [Node.js](https://nodejs.org/) installed.

   ```bash
   npm install
   ```

4. **Start a Local Server**

   You can use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code or any other local server setup.

   ```bash
   npx live-server
   ```

   Alternatively, simply open the `index.html` file in your preferred browser.

---

## Usage

1. **Explore the Guide**

   Navigate through the various sections using the interactive Table of Contents on the sidebar or scroll manually through the content.

2. **Customize Viewing Preferences**

    - **Theme Toggle:** Click the moon/sun icon to switch between dark and light modes.
    - **Font Size Adjustment:** Use the "A-" and "A+" buttons to decrease or increase the base font size for better readability.

3. **Navigate Efficiently**

    - **"Back to Top" Button:** Once you scroll beyond 200px, a "Back to Top" button appears at the bottom-right corner. Click it to smoothly scroll back to the top.
    - **Skip to Main Content:** Use the "Skip to main content" link for quick navigation, especially beneficial for screen reader users.

---

## Runbook

A runbook provides step-by-step instructions for operating and maintaining the project. Below are the essential procedures for **Ca11y**.

### Running Locally

1. **Ensure Prerequisites are Installed**

    - **Git:** For cloning the repository.
    - **Node.js (Optional):** If using build tools or extensions like Live Server.

2. **Clone and Navigate to the Project**

   ```bash
   git clone https://github.com/yourusername/ca11y.git
   cd ca11y
   ```

3. **Launch the Website**

    - **Using Live Server:**
        - Open the project in VS Code.
        - Install the Live Server extension if not already installed.
        - Right-click on `index.html` and select "Open with Live Server."
    - **Manual Method:**
        - Open `index.html` directly in your web browser.

### Testing

1. **Accessibility Testing**

    - Use tools like [WAVE](https://wave.webaim.org/) or [AXE](https://www.deque.com/axe/) to assess accessibility compliance.
    - Navigate the site using keyboard-only to ensure all interactive elements are reachable.
    - Test with screen readers (e.g., NVDA, VoiceOver) to verify content is announced correctly.

2. **Responsive Design Testing**

    - Resize the browser window or use browser developer tools to simulate different device viewports.
    - Ensure that the layout adjusts appropriately across various screen sizes.

3. **Functionality Testing**

    - **Theme Toggle:** Verify switching between dark and light modes.
    - **Font Size Adjustment:** Ensure the text scales correctly without breaking the layout.
    - **"Back to Top" Button:** Scroll down to trigger the button and click it to test smooth scrolling.

### Deployment

1. **Choose a Hosting Platform**

    - **GitHub Pages:** Ideal for static websites.
    - **Netlify or Vercel:** Offers advanced features like continuous deployment.

2. **Deploy to GitHub Pages**

    - **Push the Repository to GitHub:**

      ```bash
      git add .
      git commit -m "Initial commit"
      git push origin main
      ```

    - **Enable GitHub Pages:**
        - Go to the repository on GitHub.
        - Navigate to **Settings** > **Pages**.
        - Select the source branch (e.g., `main`) and root directory.
        - Save and wait for the site to deploy.

3. **Deploy to Netlify or Vercel**

    - **Sign Up / Log In:** Create an account on [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).
    - **Connect Repository:** Authorize access to your GitHub repository.
    - **Configure Settings:** Set the build command (if any) and the publish directory (`/` for static sites).
    - **Deploy:** Initiate the deployment and monitor the progress via the dashboard.

### Troubleshooting

1. **"Back to Top" Button Not Appearing**

    - **Check Scrollability:**
        - Ensure the page has enough content to scroll beyond 200px.
        - Add temporary placeholder content if necessary.
    - **Inspect Element:**
        - Use Developer Tools to verify if the button is present in the DOM.
        - Check if the `show` class is being added when scrolling.
    - **Console Errors:**
        - Open Developer Tools and look for any JavaScript errors that might prevent the script from executing.

2. **Theme Toggle Not Working**

    - **Verify JavaScript:**
        - Ensure the script handling the theme toggle is correctly placed and free of errors.
    - **Check CSS Variables:**
        - Confirm that CSS variables for themes are defined and applied appropriately.

3. **Font Size Adjustment Issues**

    - **Review JavaScript Logic:**
        - Ensure event listeners for font size buttons are correctly implemented.
    - **Check CSS Responsiveness:**
        - Make sure text scaling doesn't break the layout.

4. **Component Loading Failures (If Reintroduced)**

    - **Ensure Placeholders Exist:**
        - Verify that all `id` attributes in HTML match those referenced in JavaScript.
    - **Network Issues:**
        - Check if all component files are correctly linked and accessible.
    - **Console Logs:**
        - Look for warnings about missing placeholders or fetch errors.

---

## Contributing

We welcome contributions from the community to enhance **Ca11y**. Whether it's refining content, improving accessibility features, or fixing bugs, your input is valuable.

### How to Contribute

1. **Fork the Repository**

   Click the "Fork" button on the repository page to create a personal copy.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/yourusername/ca11y.git
   cd ca11y
   ```

3. **Create a New Branch**

   ```bash
   git checkout -b feature/YourFeatureName
   ```

4. **Make Changes**

    - Edit the HTML, CSS, or JavaScript files as needed.
    - Add new sections or improve existing content.

5. **Commit Your Changes**

   ```bash
   git add .
   git commit -m "Add [Your Feature/Improvement]"
   ```

6. **Push to Your Fork**

   ```bash
   git push origin feature/YourFeatureName
   ```

7. **Submit a Pull Request**

    - Navigate to your fork on GitHub.
    - Click "Compare & pull request."
    - Provide a clear description of your changes and submit.

### Guidelines

- **Code Quality:** Ensure that your code adheres to best practices and is free of errors.
- **Accessibility:** Maintain and improve the site's accessibility features.
- **Consistency:** Follow the existing design and coding conventions.
- **Documentation:** Update or add documentation if your changes affect existing features.

---

## License

This project is licensed under the [License](LICENSE.md).

---

## Contact

For questions, suggestions, or support, please reach out to:

- **Project Lead:** Gareth Slinn
- **Email:** [gslinn@gmail.com](mailto:gslinn@gmail.com)
- **Website:** [www.ca11y.net](https://www.ca11y.net)

---
# ca11y-project
