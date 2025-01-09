document.addEventListener('DOMContentLoaded', () => {
    // Article sharing
    const articleURL = encodeURIComponent(window.location.href);
    const shareButtons = document.querySelectorAll('.share-button');
    shareButtons?.forEach(button => {
        const href = button.getAttribute('href')?.replace('YOUR_ARTICLE_URL', articleURL);
        if (href) button.setAttribute('href', href);
    });

    // Back to Top functionality
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Visibility based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                backToTopBtn.classList.remove('hide');
            } else {
                backToTopBtn.classList.add('hide');
            }
        });
    } else {
        console.warn('Element with id "back-to-top" not found.');
    }

    // Navigation toggle
    const toggleButton = document.getElementById('toggleButton');
    const nav = document.getElementById('nav');
    if (toggleButton && nav) {
        toggleButton.addEventListener('click', () => {
            nav.classList.toggle('show');
            const isShown = nav.classList.contains('show');
            nav.setAttribute('aria-label', isShown ? 'Main Navigation open' : 'Main Navigation closed');
            toggleButton.setAttribute('aria-expanded', isShown);
        });
    } else {
        console.warn('Navigation toggle elements not found.');
    }

    const navList = document.querySelector('.navlist');
    if (navList && toggleButton) {
        navList.addEventListener('click', () => {
            nav?.classList.remove('show');
            toggleButton.setAttribute('aria-expanded', 'false');
        });
    } else {
        console.warn('Element with class "navlist" not found.');
    }

    // Theme toggle
    const toggleThemeBtn = document.getElementById('toggle-theme');
    const logo = document.querySelector('.logo');
    const prismLightTheme = document.getElementById('prism-light-theme');
    const prismDarkTheme = document.getElementById('prism-dark-theme');

    if (toggleThemeBtn) {
        const logoPaths = {
            light: '/images/auig_light.svg',
            dark: '/images/auig_dark.svg',
            bw: '/images/auig_bw.svg',
        };

        const updateLogo = (theme) => {
            if (logo) logo.src = logoPaths[theme] || logoPaths.light;
        };

        const updateToggleIcon = (theme) => {
            const icons = {
                light: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><title>Moon icon depicting dark mode</title><path d="M21 12.79A9 9 0 1 1 11.21 3 A7 7 0 0 0 21 12.79z"></path></svg>`,
                dark: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><title>Sun icon depicting light mode</title><circle cx="12" cy="12" r="5" fill="currentColor"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
                bw: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-square"><title>Square icon depicting black and white mode</title><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>`,
            };
            toggleThemeBtn.innerHTML = icons[theme] || icons.light;
            toggleThemeBtn.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'Dark' : theme === 'dark' ? 'Black and White' : 'Light'} Mode`);
        };

        const togglePrismTheme = (theme) => {
            if (prismLightTheme && prismDarkTheme) {
                prismLightTheme.disabled = theme !== 'light';
                prismDarkTheme.disabled = theme === 'light';
            }
        };

        toggleThemeBtn.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : currentTheme === 'dark' ? 'bw' : 'light';
            document.body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateLogo(newTheme);
            updateToggleIcon(newTheme);
            togglePrismTheme(newTheme);
            document.body.classList.toggle('bw-mode', newTheme === 'bw');
        });

        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.setAttribute('data-theme', savedTheme);
        updateLogo(savedTheme);
        updateToggleIcon(savedTheme);
        togglePrismTheme(savedTheme);
        document.body.classList.toggle('bw-mode', savedTheme === 'bw');
    } else {
        console.warn('Element with id "toggle-theme" not found.');
    }

    // Font size control
    const root = document.documentElement;
    const increaseBtn = document.getElementById('increase-font');
    const decreaseBtn = document.getElementById('decrease-font');
    let fontSize = parseFloat(getComputedStyle(root).getPropertyValue('--font-size-base')) || 1;

    if (increaseBtn) {
        increaseBtn.addEventListener('click', () => {
            if (fontSize < 2) {
                fontSize = Math.round((fontSize + 0.1) * 10) / 10;
                root.style.setProperty('--font-size-base', `${fontSize}rem`);
            }
        });
    }

    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', () => {
            if (fontSize > 0.8) {
                fontSize = Math.round((fontSize - 0.1) * 10) / 10;
                root.style.setProperty('--font-size-base', `${fontSize}rem`);
            }
        });
    }
});
