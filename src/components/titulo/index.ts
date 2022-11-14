export function initTituloEl() {
  class TituloPrincipal extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var tituloEl = document.createElement("h1");
      tituloEl.setAttribute("class", "tituloDeLaPagina");
      tituloEl.textContent = "Título de esta página";
      var style = document.createElement("style");

      style.textContent =
        ".tituloDeLaPagina{margin-bottom:23px;min-width: 271px;max-height: 183px;font-family: 'Roboto';font-style: normal;font-weight: 700;font-size: 52px;line-height: 61px;color: #000000; }@media (min-width: 600px){.tituloDeLaPagina {width: 593px;margin: 42px auto;}}";

      shadow.appendChild(style);
      shadow.appendChild(tituloEl);
    }
  }
  customElements.define("titulo-principal", TituloPrincipal);
}
