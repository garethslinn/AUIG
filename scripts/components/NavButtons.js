class NavButtons extends HTMLElement {
    static get observedAttributes() {
        return ['url', 'title'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    get url() {
        return this.getAttribute('url') || '#';
    }

    get title() {
        return this.getAttribute('title') || 'Link';
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: inline-block;
            }

            a {
                text-decoration: none;
                font-size: var(--font-size-base);
                padding: 0.5rem 1rem;
                border: 1px solid var(--button-border);
                background-color: var(--button-bg);
                color: var(--button-text);
                transition: background-color var(--transition-speed), color var(--transition-speed);
            }

            a:hover,
            a:focus {
                background-color: var(--breadcrumb-hover);
                color: #fff;
                outline: 2px solid var(--breadcrumb-outline);
                outline-offset: 2px;
            }

            a:active {
                background-color: var(--button-border);
                color: var(--button-text);
            }
        `;

        this.shadowRoot.innerHTML = `
            <a href="${this.url}" title="${this.title}" aria-label="${this.title}">
                ${this.title}
            </a>
        `;
        this.shadowRoot.appendChild(style);
    }
}

customElements.define('nav-buttons', NavButtons);
