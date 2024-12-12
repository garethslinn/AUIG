class IconDetailComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.headingElement = null; // Reference to the heading element
        this.render();
    }

    static get observedAttributes() {
        return ['type', 'heading-level'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'type' && oldValue !== newValue) {
            this.updateIcon(newValue);
            this.updateColors(newValue);
        }

        if (name === 'heading-level' && oldValue !== newValue) {
            this.updateHeadingTag(newValue);
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
                backgroundColor = '#7c5064';
                foregroundColor = '#ffffff';
                break;
            case 'consideration':
                backgroundColor = '#777c50';
                foregroundColor = '#ffffff';
                break;
            case 'information':
                backgroundColor = '#507c7c';
                foregroundColor = '#ffffff';
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
     * Updates the heading tag based on the heading-level attribute.
     * @param {string} level - The desired heading level (e.g., 'h2', 'h3').
     */
    updateHeadingTag(level) {
        const validLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
        const headingLevel = validLevels.includes(level) ? level : 'h4';

        if (this.headingElement) {
            // Create a new heading element
            const newHeading = document.createElement(headingLevel);

            // Transfer the slot content to the new heading
            const slot = this.headingElement.querySelector('slot[name="title"]');
            const assignedNodes = slot.assignedNodes({ flatten: true });

            assignedNodes.forEach(node => {
                newHeading.appendChild(node.cloneNode(true));
            });

            // Replace the old heading with the new one
            this.shadowRoot.querySelector('.content').replaceChild(newHeading, this.headingElement);
            this.headingElement = newHeading;
        }
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
                    position: relative;
                    margin: 0.5rem 0;
                }
                .icon {
                    width: 3rem;
                    height: 3rem;
                    background-size: cover;
                    background-position: center;
                    display: inline-block;
                    vertical-align: middle;
                    position: absolute;
                    right: 1rem;
                    top: 1rem;
                }
                .icon-space {
                    margin-right: 0.8rem;
                }
                .content {
                    padding-right: 3rem; /* To prevent overlap with the icon */
                }
                h4, h2, h3, h1, h5, h6 {
                    display: inline;
                    font-size: 1rem;
                    margin: 0;
                    vertical-align: middle;
                    color: var(--foreground-color, #000000);
                }
                h1 { font-size: 2.5rem; }
                h2 { font-size: 2rem; }
                h3 { font-size: 1.75rem; }
                h4 { font-size: 1.50rem; }
                h5 { font-size: 1.25rem; }

                p {
                    margin-top: 0.5rem;
                    color: var(--foreground-color, #000000);
                    font-size: 1rem;
                }
                
                @media (max-width: 800px) {
                    h3 {
                        font-size: 1.25rem;
                    }
                     h4 {
                        font-size: 1.25rem;
                    }
                }
            </style>
            <div class="icon" role="img"></div>
            <div class="content">
                <h4><slot name="title">Default Title</slot></h4>
                <p><slot name="description">Default description</slot></p>
            </div>
        `;

        // Reference to the heading element
        this.headingElement = this.shadowRoot.querySelector('h4');

        // Set initial icon and colors based on type attribute
        const type = this.getAttribute('type');
        if (type) {
            this.updateIcon(type);
            this.updateColors(type);
        } else {
            // Apply default colors if type is not specified
            this.updateColors('default');
        }

        // Set initial heading level
        const headingLevel = this.getAttribute('heading-level') || 'h4';
        this.updateHeadingTag(headingLevel);
    }
}

customElements.define('icon-detail', IconDetailComponent);
