class ShareButtons extends HTMLElement {
    static get observedAttributes() {
        return ['article-url'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    get articleUrl() {
        const baseUrl = 'https://auig.org/articles/';
        const articlePath = this.getAttribute('article-url') || '';
        return `${baseUrl}${articlePath}`;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'article-url' && oldValue !== newValue) {
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
                display: flex;
                align-items: center;
                gap: 10px;
                font-family: Arial, sans-serif;
            }

            .share-button img {
                width: 1.5rem;
                height: 1.5rem;
            }

            .share-button {
                display: flex;
                align-items: center;
                text-decoration: none;
                color: inherit;
            }

            .share-text {
                font-size: 1rem;
            }
        `;

        this.shadowRoot.innerHTML = `
            <span class="share-text">Share:</span>
            <a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20article&url=${encodeURIComponent(
            this.articleUrl
        )}" target="_blank" class="share-button" aria-label="Share on X. Opens in new tab">
                <img src="../../images/socialMedia/x.svg" alt="X logo" />
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            this.articleUrl
        )}" target="_blank" class="share-button" aria-label="Share on Facebook. Opens in new tab">
                <img src="../../images/socialMedia/facebook.svg" alt="Facebook logo" />
            </a>
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
            this.articleUrl
        )}&title=Check%20out%20this%20article" target="_blank" class="share-button" aria-label="Share on LinkedIn. Opens in new tab">
                <img src="../../images/socialMedia/linkedin.svg" alt="LinkedIn logo" />
            </a>
            <a href="mailto:?subject=Check%20out%20this%20article&body=Read%20this%20amazing%20article:%20${encodeURIComponent(
            this.articleUrl
        )}" class="share-button" aria-label="Share via Email. Opens in new tab">
                <img src="../../images/socialMedia/email.svg" alt="Email logo" />
            </a>
        `;
        this.shadowRoot.appendChild(style);
    }
}

customElements.define('share-buttons', ShareButtons);
