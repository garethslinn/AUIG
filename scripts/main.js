document.addEventListener('DOMContentLoaded', () => {

    const toggleButton = document.getElementById("toggleButton");
    function handleToggle() {
        nav.classList.toggle("show");
        const isShown = nav.classList.contains("show");
        nav.setAttribute("aria-label", isShown ? "Main Navigation open" : "Main Navigation closed");
        toggleButton.setAttribute("aria-expanded", isShown);
    }

    toggleButton?.addEventListener("click", handleToggle);

    const nav1 = document.getElementById("navlist");

    nav1.addEventListener('click', (event) => {
        handleToggle();
    });


    // Accessibility font size controls
    const root = document.documentElement;
    const increaseBtn = document.getElementById('increase-font');
    const decreaseBtn = document.getElementById('decrease-font');
    let fontSize = 1;

    increaseBtn?.addEventListener('click', () => {
        if (fontSize < 2) { // Maximum font size
            fontSize += 0.1;
            root.style.setProperty('--font-size-base', `${fontSize}rem`);
        }
    });

    decreaseBtn?.addEventListener('click', () => {
        if (fontSize > 0.8) { // Minimum font size
            fontSize -= 0.1;
            root.style.setProperty('--font-size-base', `${fontSize}rem`);
        }
    });

    // Theme toggle
    const toggleThemeBtn = document.getElementById('toggle-theme');
    const logo = document.querySelector('.logo');
    const logoLight = '/images/auig_light.svg';
    const logoDark = '/images/auig_dark.svg';
    const prismLightTheme = document.getElementById('prism-light-theme');
    const prismDarkTheme = document.getElementById('prism-dark-theme');

    function updateLogo(theme) {
        if (logo) {
            logo.src = theme === 'light' ? logoLight : logoDark;
        }
    }

    function updateToggleIcon(theme) {
        const iconHTML = theme === 'light' ?
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><title>Moon icon depicting dark mode</title><path d="M21 12.79A9 9 0 1 1 11.21 3 A7 7 0 0 0 21 12.79z"></path></svg>' :
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><title>Sun icon depicting light mode</title><circle cx="12" cy="12" r="5" fill="currentColor"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
        if (toggleThemeBtn) {
            toggleThemeBtn.innerHTML = iconHTML;
            toggleThemeBtn.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`);
        }
    }

    function togglePrismTheme(theme) {
        if (prismLightTheme && prismDarkTheme) {
            if (theme === 'light') {
                prismLightTheme.disabled = false;
                prismDarkTheme.disabled = true;
            } else {
                prismLightTheme.disabled = true;
                prismDarkTheme.disabled = false;
            }
        }
    }

    toggleThemeBtn?.addEventListener('click', () => {
        let theme = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateToggleIcon(theme);
        updateLogo(theme);
        togglePrismTheme(theme); // Toggle PrismJS theme
    });

    // Initial theme setup
    let initialTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', initialTheme);
    updateToggleIcon(initialTheme);
    updateLogo(initialTheme);
    togglePrismTheme(initialTheme); // Set initial PrismJS theme

    // Smooth Scroll and Focus Management for In-Page Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetID = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetID);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                targetElement.setAttribute('tabindex', '-1');
                targetElement.focus();
                targetElement.addEventListener('blur', () => {
                    targetElement.removeAttribute('tabindex');
                }, { once: true });
            }
        });
    });
});
