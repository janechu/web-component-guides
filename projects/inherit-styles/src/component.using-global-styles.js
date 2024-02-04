import { addGlobalStylesToShadowRoot } from "./utilities.js";

class UsingGlobalStyles extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" }).innerHTML = `
      <h1>Shadow DOM H1 with Bootstrap Styles</h1>
      <h2>Shadow DOM H2 with Bootstrap and Global Custom Styles</h2>
    `;

    addGlobalStylesToShadowRoot(this.shadowRoot); // look here!
  }
}

customElements.define("using-global-styles", UsingGlobalStyles);