export function initSubTituloEl() {
  class SubTituloClass extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var subTituloEl = document.createElement("h2");
      subTituloEl.setAttribute("class", "subtituloDeLaPagina");
      subTituloEl.textContent = "Subtitulo";
      var style = document.createElement("style");

      style.textContent =
        ".subtituloDeLaPagina{margin-top:72px;min-width: 290px;height: 45px;font-family: 'Roboto';font-style: normal;font-weight: 700;font-size: 38px;line-height: 45px;color: #000000;}@media(min-width:600px){.subtituloDeLaPagina{margin-top: 60px;}}";

      shadow.appendChild(style);
      shadow.appendChild(subTituloEl);
    }
  }
  customElements.define("subtitulo-pagina", SubTituloClass);
}
