class IconDetailComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    static get observedAttributes() {
        return ['type']; // React to changes in the 'type' attribute
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'type') {
            this.updateIcon(newValue);
        }
    }

    updateIcon(type) {
        const iconURL = `../images/${type}.svg`; // Use template literals properly
        const iconElement = this.shadowRoot.querySelector('.icon');
        if (iconElement) {
            iconElement.style.backgroundImage = `url('${iconURL}')`; // Correct usage of url in CSS
            iconElement.setAttribute('aria-label', `icon: ${type}`); // Correct interpolation and quoting
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #ffc008;
                    padding: 1rem;
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
                    display: inline-block;
                    font-size: 1.50rem;
                    margin: 0;
                    vertical-align: middle;
                }
            </style>
            <span class="icon icon-space"></span>
            <h4><slot name="title">Default Title</slot></h4>
            <p><slot name="description">Default description</slot></p>
        `;

        // Set initial icon based on type attribute
        const type = this.getAttribute('type');
        if (type) {
            this.updateIcon(type);
        }
    }
}

customElements.define('icon-detail', IconDetailComponent);
