class SaludoFachero extends HTMLElement {
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
  <style>${SaludoFachero.styles}</style>
  <div>
    <h1>Hola ${this.getAttribute("nombre")}</h1>
  </div>`;
 }
}

customElements.define("saludo-fachero", SaludoFachero);
