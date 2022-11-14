export function initH3El() {
  class H3class extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var h3El = document.createElement("h1");
      h3El.setAttribute("class", "h3__debajo_del_titulo");
      h3El.textContent = "Esta página sin dudas es la mejor";
      var style = document.createElement("style");

      style.textContent =
        ".h3__debajo_del_titulo{font-family: 'Roboto';font-style: normal;font-weight: 400;font-size: 18px;line-height: 21px;color: #000000;margin:0 auto}@media (min-width:600px){.h3__debajo_del_titulo{width: auto;display: flex;align-items: center;}}";

      shadow.appendChild(style);
      shadow.appendChild(h3El);
    }
  }
  customElements.define("h3-el", H3class);
}
