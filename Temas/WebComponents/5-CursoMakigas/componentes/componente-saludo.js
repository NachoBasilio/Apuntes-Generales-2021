class SaludoFachero extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
   }

  static get styles() {
    return `
   :host {;

   }
   h1 {
    font-size: 30px;
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
    <p>${this.getAttribute("mensaje")}</p>
  </div>`;
 }
}

customElements.define("saludo-fachero", SaludoFachero);
