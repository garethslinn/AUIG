class ToggleContent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.currentVersion = 0;
    }

    get childrenArray() {
        return Array.from(this.querySelectorAll('[slot]'));
    }

    get totalVersions() {
        return this.childrenArray.length;
    }

    handleToggle = () => {
        this.currentVersion = (this.currentVersion + 1) % this.totalVersions;
        this.updateContent();
    };

    updateContent() {
        const children = this.childrenArray;
        console.log('Assigned elements:', children); // Debug output
        children.forEach((child, index) => {
            child.style.display = index === this.currentVersion ? 'block' : 'none';
        });
        const simplifyText = this.shadowRoot.querySelector('.simplify-text');
        if (simplifyText) {
            simplifyText.textContent = children.length
                ? `Cycle text version ${this.currentVersion + 1} of ${children.length}`
                : 'No versions available';
        }
    }



    connectedCallback() {
        this.render();
        const slot = this.shadowRoot.querySelector('slot');
        if (slot) {
            slot.addEventListener('slotchange', () => this.updateContent());
        }
        setTimeout(() => this.updateContent(), 0); // Delay to allow slot assignment
    }



    render() {
        const style = document.createElement('style');
        style.textContent = `
        :host {
            display: block;
            position: relative;
            padding: 1rem;
            border: 0.0625rem solid #ccc;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
        }

        .toggle-icon {
            position: absolute;
            top: 0.625rem;
            left: 0.625rem;
            background-color: #278ca6;
            color: #fff;
            border-radius: 50%;
            width: 1.875rem;
            height: 1.875rem;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
        
        
        .toggle-icon svg path {
            fill: #fff; /* Ensure the arrow in the middle of the circle is white */
        }

        .toggle-icon:hover {
            background-color: #0056b3;
        }

        .simplify-text {
            position: absolute;
            top: 0.625rem;
            left: 3.125rem;
            color: #000;
            font-size: 0.875rem;
            font-weight: bold;
            background-color: #f8f9fa;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
        }

        .content {
            margin-top: 2.5rem;
            color: #000;
            font-family: Arial, sans-serif;
        }

        ::slotted(*) {
            display: none; /* Hide all by default */
        }

        ::slotted(.active) {
            display: block; /* Show only the active one */
        }
    `;

        this.shadowRoot.innerHTML = `
        <div role="button" aria-label="Cycle text versions" tabindex="0" class="toggle-icon" title="Cycle text version button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="1.25rem" height="1.25rem" aria-hidden="true">
                <path d="M25.988 5.503c-7.694-2.198-8.41 7.097-4.122 9.34l10.308 5.377C16.086 28.914 8.439 47.808 13.949 65.244c6.4 20.057 27.848 31.128 47.906 24.728 20.058-6.4 31.129-27.849 24.728-47.907a38.12 38.12 0 0 0-4.728-9.746l-7.525 7.302a27.865 27.865 0 0 1 2.483 5.562c4.679 14.662-3.414 30.34-18.076 35.018-14.662 4.679-30.34-3.414-35.018-18.075-4.009-12.607 1.4-26.296 12.943-32.758l-.742 11.996c-.899 7.21 9.394 8.35 10.098 1.507l1.866-20.298.8-6.073-5.205-2.331Z"/>
            </svg>
        </div>
        <div class="simplify-text" aria-hidden="true">Initializing...</div>
        <div class="content">
            <slot name="version-1"></slot>
            <slot name="version-2"></slot>
            <slot name="version-3"></slot>
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

customElements.define('toggle-content', ToggleContent);