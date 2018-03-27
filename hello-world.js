class HelloWorld extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.createShadowRoot();
        this._msg = "World";
    }

    static get observedAttributes() {
        return[ 'msg' ];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this._msg = newVal;
        this.render();
        console.log(name, oldVal, newVal);
    }

    connectedCallback() {
        console.log("Connected");
        this.render();
    }

    render() {
        var template = `
            <style>
            .hello-text {
                color: var(--text-color, red);
                font-family: var(--font-family, Arial);
                font-size: var(--font-size, 14px);
            }
            </style>
            <div class='hello-text'>
                Hello ${this._msg}
            </div>
        `;
        this.shadow.innerHTML = template;
    }
}

customElements.define('hello-world', HelloWorld);