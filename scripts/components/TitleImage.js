class TitleImage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['alt', 'src'];
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
        const baseUrl = '../../images/articles/';
        const alt = this.getAttribute('alt') || "missing image";
        const src = this.getAttribute('src') ? `${baseUrl}${this.getAttribute('src')}` : `${baseUrl}missing.svg`;

        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: block;
                margin: 0 auto;
                text-align: center;
            }

            img {
                width: 100%;
                height: auto;
            }
        `;

        this.shadowRoot.innerHTML = `
            <img 
                alt="${alt}" 
                src="${src}" 
            />
        `;
        this.shadowRoot.appendChild(style);
    }
}

customElements.define('title-image', TitleImage);
