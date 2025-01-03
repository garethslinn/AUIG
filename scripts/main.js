document.addEventListener('DOMContentLoaded', () => {
    // Existing code...

    // Theme toggle
    const toggleThemeBtn = document.getElementById('toggle-theme');
    const logo = document.querySelector('.logo');
    const logoLight = '/images/auig_light.svg';
    const logoDark = '/images/auig_dark.svg';
    const prismLightTheme = document.getElementById('prism-light-theme');
    const prismDarkTheme = document.getElementById('prism-dark-theme');

    function updateLogo(theme) {
        if (logo) {
            logo.src = theme === 'light' ? logoLight : theme === 'dark' ? logoDark : '/images/auig_bw.svg'; // Add black and white logo
        }
    }

    function updateToggleIcon(theme) {
        let iconHTML;
        if (theme === 'light') {
            iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><title>Moon icon depicting dark mode</title><path d="M21 12.79A9 9 0 1 1 11.21 3 A7 7 0 0 0 21 12.79z"></path></svg>`;
        } else if (theme === 'dark') {
            iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><title>Sun icon depicting light mode</title><circle cx="12" cy="12" r="5" fill="currentColor"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
        } else {
            iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-square"><title>Square icon depicting black and white mode</title><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>`;
        }
        if (toggleThemeBtn) {
            toggleThemeBtn.innerHTML = iconHTML;
            toggleThemeBtn.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'Dark' : theme === 'dark' ? 'Black and White' : 'Light'} Mode`);
        }
    }

    function togglePrismTheme(theme) {
        if (prismLightTheme && prismDarkTheme) {
            if (theme === 'light') {
                prismLightTheme.disabled = false;
                prismDarkTheme.disabled = true;
            } else if (theme === 'dark') {
                prismLightTheme.disabled = true;
                prismDarkTheme.disabled = false;
            } else {
                prismLightTheme.disabled = true;
                prismDarkTheme.disabled = true;
            }
        }
    }

    toggleThemeBtn?.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        let theme = currentTheme === 'light' ? 'dark' : currentTheme === 'dark' ? 'bw' : 'light';
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateToggleIcon(theme);
        updateLogo(theme);
        togglePrismTheme(theme); // Toggle PrismJS theme

        // Apply global styles for Black and White mode
        if (theme === 'bw') {
            document.body.classList.add('bw-mode');
        } else {
            document.body.classList.remove('bw-mode');
        }
    });

    // Initial theme setup
    let initialTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', initialTheme);
    updateToggleIcon(initialTheme);
    updateLogo(initialTheme);
    togglePrismTheme(initialTheme); // Set initial PrismJS theme

    if (initialTheme === 'bw') {
        document.body.classList.add('bw-mode');
    }
});
