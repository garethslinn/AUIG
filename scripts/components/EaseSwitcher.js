class EaseSwitcher extends HTMLElement {
    static get observedAttributes() {
        return [
            'status-text',
            'button-fill',
            'button-stroke',
            'border-colour',
            'background-colour',
            'foreground-colour',
            'font-size',
            'button-size',
            'button-hover-colour',
        ];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.currentVersion = 0;

        // Default properties
        this.defaults = {
            statusText: 'Cycle text version',
            buttonFill: '#278ca6',
            buttonStroke: '#f1f1f1',
            borderColour: '#ccc',
            backgroundColour: '#fff',
            foregroundColour: '#000',
            fontSize: '1rem',
            buttonSize: '1.875rem',
            buttonHoverColour: '#000',
        };
    }

    get childrenArray() {
        return Array.from(this.querySelectorAll('[slot]'));
    }

    get totalVersions() {
        return this.childrenArray.length;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    handleToggle = () => {
        this.currentVersion = (this.currentVersion + 1) % this.totalVersions;
        this.updateContent();
    };

    updateContent() {
        const children = this.childrenArray;
        children.forEach((child, index) => {
            const isVisible = index === this.currentVersion;
            child.style.display = isVisible ? 'block' : 'none';
            child.setAttribute('aria-hidden', isVisible ? 'false' : 'true');
        });

        const simplifyText = this.shadowRoot.querySelector('.simplify-text');
        if (simplifyText) {
            simplifyText.textContent = children.length
                ? `${this.getAttribute('status-text') || this.defaults.statusText} ${this.currentVersion + 1} of ${children.length}`
                : 'No versions available';
        }

        const liveRegion = this.shadowRoot.querySelector('.live-region');
        if (liveRegion) {
            liveRegion.textContent = simplifyText.textContent;
        }
    }

    connectedCallback() {
        this.render();
        const slot = this.shadowRoot.querySelector('slot');
        if (slot) {
            slot.addEventListener('slotchange', () => this.updateContent());
        }
        setTimeout(() => this.updateContent(), 0);
    }

    render() {
        const style = document.createElement('style');
        const buttonFill = this.getAttribute('button-fill') || this.defaults.buttonFill;
        const buttonStroke = this.getAttribute('button-stroke') || this.defaults.buttonStroke;
        const borderColour = this.getAttribute('border-colour') || this.defaults.borderColour;
        const backgroundColour = this.getAttribute('background-colour') || this.defaults.backgroundColour;
        const foregroundColour = this.getAttribute('foreground-colour') || this.defaults.foregroundColour;
        const fontSize = this.getAttribute('font-size') || this.defaults.fontSize;
        const buttonSize = this.getAttribute('button-size') || this.defaults.buttonSize;
        const buttonHoverColour = this.getAttribute('button-hover-colour') || this.defaults.buttonHoverColour;

        style.textContent = `
        :host {
            display: block;
            position: relative;
            padding: 1rem;
            border: 0.0625rem solid ${borderColour};
            border-radius: 0.5rem;
            margin-bottom: 1rem;
            background-color: ${backgroundColour};
            color: ${foregroundColour};
            font-size: ${fontSize};
        }

        .toggle-icon {
            position: absolute;
            top: 0.625rem;
            left: 0.625rem;
            background-color: ${buttonFill};
            color: ${foregroundColour};
            border: 0.0625rem solid ${buttonStroke};
            border-radius: 50%;
            width: ${buttonSize};
            height: ${buttonSize};
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }

        .toggle-icon:hover {
            background-color: ${buttonHoverColour};
        }

        .toggle-icon svg {
            width: calc(${buttonSize} / 1.5);
            height: calc(${buttonSize} / 1.5);
            fill: ${buttonStroke};
        }

        .simplify-text {
            position: absolute;
            top: 0.625rem;
            left: calc(${buttonSize} + 1rem);
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-weight: bold;
        }

        .live-region {
            position: absolute;
            width: 1px;
            height: 1px;
            overflow: hidden;
            clip: rect(0 0 0 0);
            clip-path: inset(50%);
            white-space: nowrap;
        }

        .content {
            margin-top: 2.5rem;
        }
    `;

        const slots = this.childrenArray.map(
            (_, index) => `<slot name="${index + 1}"></slot>`
        ).join('');

        this.shadowRoot.innerHTML = `
        <div role="button" aria-label="${this.getAttribute('status-text') || this.defaults.statusText}" tabindex="0" class="toggle-icon" title="${this.getAttribute('status-text') || this.defaults.statusText}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-hidden="true">
                <path d="M25.988 5.503c-7.694-2.198-8.41 7.097-4.122 9.34l10.308 5.377C16.086 28.914 8.439 47.808 13.949 65.244c6.4 20.057 27.848 31.128 47.906 24.728 20.058-6.4 31.129-27.849 24.728-47.907a38.12 38.12 0 0 0-4.728-9.746l-7.525 7.302a27.865 27.865 0 0 1 2.483 5.562c4.679 14.662-3.414 30.34-18.076 35.018-14.662 4.679-30.34-3.414-35.018-18.075-4.009-12.607 1.4-26.296 12.943-32.758l-.742 11.996c-.899 7.21 9.394 8.35 10.098 1.507l1.866-20.298.8-6.073-5.205-2.331Z"/>
            </svg>
        </div>
        <div class="simplify-text" aria-hidden="true">Initialising...</div>
        <div class="live-region" aria-live="polite"></div>
        <div class="content">
            ${slots}
        </div>
    `;

        this.shadowRoot.appendChild(style);

        const toggleButton = this.shadowRoot.querySelector('.toggle-icon');
        toggleButton.addEventListener('click', this.handleToggle);
        toggleButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') this.handleToggle();
        });
    }
}

customElements.define('ease-switcher', EaseSwitcher);
