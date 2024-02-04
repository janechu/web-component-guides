import { addSelectorsToShadowRoot } from "./utilities.js";

class UsingSelectorStyles extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" }).innerHTML = `
      <h1 class="my-component">Shadow DOM H1 with Custom Styles</h1>
    `;

    addSelectorsToShadowRoot(this.shadowRoot, ".my-component"); // look here!
  }
}

customElements.define("using-selector-styles", UsingSelectorStyles);