const DEFAULT_FOTO_PERFIL = "https://images.vexels.com/media/users/3/160249/isolated/lists/14fab0425b54f10ea6f8e23265d4c620-silueta-de-pluma.png";

class PersonajeDiver extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
   :host {;
      display: block;
      background-color: #f5f5f5;
   }
    img {
      width: 100px;
    }

    :host(.color){
      background-color: red;
    }
 `;
  }

  connectedCallback() {
    this.fotoPerfil = this.getAttribute("fotoPerfil") ?? DEFAULT_FOTO_PERFIL;
    this.render();
    this.shadowRoot.querySelector("div").addEventListener("click", () => this.emitEvent());
  }

  emitEvent() {
    const event = new CustomEvent("MainInfo", { detail: this.fotoPerfil, composed: true, bubbles: true });
    this.dispatchEvent(event);
  }

  setColor() {
    this.classList.toggle("color");
  };

  render() {
    this.shadowRoot.innerHTML = `
  <style>${PersonajeDiver.styles}</style>
  <div>
    <img src="${this.fotoPerfil}" alt="">
    <slot></slot>
    <h2>Personaje Diver</h2>
  </div>`;
  }
}

customElements.define("personaje-diver", PersonajeDiver);
