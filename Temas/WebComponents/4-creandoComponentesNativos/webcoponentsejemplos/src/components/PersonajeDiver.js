class PersonajeDiver extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
}

  static get styles() {
    return `
   :host {;

   }
 `;
}

  connectedCallback() {
    this.render();
}

  render() {
    this.shadowRoot.innerHTML = `
  <style>${PersonajeDiver.styles}</style>
  <div>
    <h1>Personaje Diver</h1>
  </div>`;
  }
}

customElements.define("personaje-diver", PersonajeDiver);
