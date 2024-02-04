class NotUsingGlobalStyles extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" }).innerHTML = `
        <h1>Shadow DOM H1 without Bootstrap Styles</h1>
        <h2>Shadow DOM H2 without Bootstrap or Global Custom Styles</h2>
      `;
    }
}

customElements.define("not-using-global-styles", NotUsingGlobalStyles);