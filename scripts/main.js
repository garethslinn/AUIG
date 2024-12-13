document.addEventListener('DOMContentLoaded', () => {

    function setupToggleButton() {
        const toggleButton = document.getElementById("toggleButton");
        const toc = document.getElementById("toc");
        const nav = document.getElementById("nav");
        const anchors = nav.querySelectorAll('a');

        const handleToggle = () => {
            // Toggle the 'show' class on the toc
            toc.classList.toggle("show");

            // Check if the 'show' class is present
            const isShown = toc.classList.contains("show");

            // Update the aria-label based on the visibility
            nav.setAttribute("aria-label", isShown ? "Main Navigation open" : "Main Navigation closed");

            // Optionally, update aria-expanded on the toggle button for better accessibility
            toggleButton.setAttribute("aria-expanded", isShown);
        }

        anchors.forEach(anchor => {
            anchor.addEventListener("click", () => {
                handleToggle();
                nav.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });

        if (toggleButton && toc && nav) {
            toggleButton.addEventListener("click", () => {
                handleToggle();
            });
        } else {
            console.warn("toggleButton, toc, or nav element not found.");
        }
    }

    // Use MutationObserver to detect when elements are added to the DOM
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                setupToggleButton(); // Check and set up the toggle button when DOM changes
            }
        });
    });

    // Start observing the body for changes
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial setup if elements are already in the DOM
    setupToggleButton();

    // Initialize Accessibility Controls
    const increaseBtn = document.getElementById('increase-font');
    const decreaseBtn = document.getElementById('decrease-font');
    const root = document.documentElement;
    let fontSize = 1;

    if (increaseBtn && decreaseBtn) {
        increaseBtn.addEventListener('click', () => {
            if (fontSize < 2) {
                fontSize += 0.1;
                root.style.setProperty('--font-size-base', `${fontSize}rem`);
            }
        });

        decreaseBtn.addEventListener('click', () => {
            if (fontSize > 0.8) {
                fontSize -= 0.1;
                root.style.setProperty('--font-size-base', `${fontSize}rem`);
            }
        });
    } else {
        console.warn('Font size control buttons not found.');
    }

    // Theme Toggle
    const toggleThemeBtn = document.getElementById('toggle-theme');

    const sunIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun">
    <title>Sun icon depicting light mode</title>
    <circle cx="12" cy="12" r="5" fill="currentColor"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
    `;

    const moonIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon">
    <title>Moon icon depicting dark mode</title>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 A7 7 0 0 0 21 12.79z"></path>
    </svg>
    `;

    // Select the logo image
    const logo = document.querySelector('.logo');
    const logoLight = '/images/auig_light.svg';
    const logoDark = '/images/auig_dark.svg';

    // Function to update the logo based on theme
    function updateLogo(theme) {
        if (logo) {
            if (theme === 'light') {
                logo.src = logoLight;
            } else {
                logo.src = logoDark;
            }
        } else {
            console.warn('Logo element with class "logo" not found.');
        }
    }

    // Select the PrismJS theme links
    const prismLightTheme = document.getElementById('prism-light-theme');
    const prismDarkTheme = document.getElementById('prism-dark-theme');

    // Function to update PrismJS theme by toggling 'disabled' attribute
    function updatePrismTheme(theme) {
        if (prismLightTheme && prismDarkTheme) {
            if (theme === 'light') {
                prismLightTheme.disabled = false;
                prismDarkTheme.disabled = true;
            } else {
                prismLightTheme.disabled = true;
                prismDarkTheme.disabled = false;
            }
            // Re-highlight code blocks after theme change
            if (typeof Prism !== 'undefined') {
                Prism.highlightAll();
            }
        } else {
            console.warn('PrismJS theme link elements not found.');
        }
    }

    if (toggleThemeBtn) {
        // Retrieve saved theme from localStorage or default to 'light'
        let currentTheme = localStorage.getItem('theme') || 'light';
        document.body.setAttribute('data-theme', currentTheme);
        updateToggleIcon(currentTheme);
        updatePrismTheme(currentTheme);
        updateLogo(currentTheme); // Initialize logo based on current theme

        toggleThemeBtn.addEventListener('click', () => {
            let theme = document.body.getAttribute('data-theme');
            theme = theme === 'light' ? 'dark' : 'light';
            document.body.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            updateToggleIcon(theme);
            updatePrismTheme(theme);
            updateLogo(theme); // Update logo when theme changes
        });
    } else {
        console.warn('Theme toggle button with id "toggle-theme" not found.');
    }

    function updateToggleIcon(theme) {
        if (toggleThemeBtn) {
            if (theme === 'light') {
                toggleThemeBtn.innerHTML = moonIcon;
                toggleThemeBtn.setAttribute('aria-label', 'Switch to Dark Mode');
            } else {
                toggleThemeBtn.innerHTML = sunIcon;
                toggleThemeBtn.setAttribute('aria-label', 'Switch to Light Mode');
            }
        }
    }

    // Smooth Scroll and Focus Management for In-Page Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetID = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetID);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Set focus to the target element for accessibility
                targetElement.setAttribute('tabindex', '-1');
                targetElement.focus();

                // Remove the tabindex after focus to maintain natural tab order
                targetElement.addEventListener('blur', function() {
                    targetElement.removeAttribute('tabindex');
                }, { once: true });
            }
        });
    });

});
