export function initH4El() {
  class H4class extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var h4El = document.createElement("h1");
      h4El.setAttribute("class", "h4__debajo_del_titulo");
      h4El.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit";
      var style = document.createElement("style");

      style.textContent =
        ".h4__debajo_del_titulo{min-width: 272px;font-family: 'Roboto';font-style: normal;font-weight: 500;font-size: 22px;line-height: 26px;color: #000000;margin: 100px auto;text-align: center}@media (min-width:600px){.h4__debajo_del_titulo{width: 505px;}}";

      shadow.appendChild(style);
      shadow.appendChild(h4El);
    }
  }
  customElements.define("h4-el", H4class);
}
