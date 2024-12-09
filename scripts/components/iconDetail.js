class IconDetailComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    static get observedAttributes() {
        return ['type'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'type' && oldValue !== newValue) {
            this.updateIcon(newValue);
            this.updateColors(newValue);
        }
    }

    /**
     * Updates the icon based on the type attribute.
     * @param {string} type - The type attribute value.
     */
    updateIcon(type) {
        const iconURL = `../images/${type}.svg`;
        const iconElement = this.shadowRoot.querySelector('.icon');
        if (iconElement) {
            iconElement.style.backgroundImage = `url('${iconURL}')`;
            iconElement.setAttribute('aria-label', `icon: ${type}`);
        }
    }

    /**
     * Updates both background and foreground colors based on the type attribute.
     * @param {string} type - The type attribute value.
     */
    updateColors(type) {
        let backgroundColor;
        let foregroundColor;

        switch (type) {
            case 'priority':
                backgroundColor = '#d40000';
                foregroundColor = '#ffffff';
                break;
            case 'consideration':
                backgroundColor = '#ffc008';
                foregroundColor = '#000000';
                break;
            default:
                backgroundColor = '#ffffff';
                foregroundColor = '#000000';
        }

        // Apply the background and foreground colors using CSS variables
        this.shadowRoot.host.style.setProperty('--background-color', backgroundColor);
        this.shadowRoot.host.style.setProperty('--foreground-color', foregroundColor);
    }

    /**
     * Renders the component's HTML and applies initial styles.
     */
    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: var(--background-color, #ffffff); 
                    color: var(--foreground-color, #000000);
                    padding: 1rem;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    transition: background-color 0.3s ease, color 0.3s ease;
                    font-family: Arial, sans-serif;
                }
                .icon {
                    width: 2rem;
                    height: 2rem;
                    background-size: cover;
                    background-position: center;
                    display: inline-block;
                    vertical-align: middle;
                }
                .icon-space {
                    margin-right: 0.8rem;
                }
                h4 {
                    display: inline;
                    font-size: 1.5rem;
                    margin: 0;
                    vertical-align: middle;
                    color: var(--foreground-color, #000000);
                }
                p {
                    margin-top: 0.5rem;
                    color: var(--foreground-color, #000000);
                    font-size: 1rem;
                }
            </style>
            <i class="icon icon-space" role="img"></i>
            <div class="content">
                <h4><slot name="title">Default Title</slot></h4>
                <p><slot name="description">Default description</slot></p>
            </div>
        `;

        // Set initial icon and colors based on type attribute
        const type = this.getAttribute('type');
        if (type) {
            this.updateIcon(type);
            this.updateColors(type);
        } else {
            // Apply default colors if type is not specified
            this.updateColors('default');
        }
    }
}

customElements.define('icon-detail', IconDetailComponent);
