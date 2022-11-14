export function initHeaderEl() {
  class headerEl extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var header = document.createElement("div");
      header.setAttribute("class", "header");
      header.textContent = "Header";
      var style = document.createElement("style");

      style.textContent =
        ".header { height: 60px;width: 100%;background: #FF8282;font-family: 'Roboto';font-style: normal;font-weight: 500;font-size: 22px;line-height: 26px;display: flex;align-items: center;justify-content: center;}@media (min-width:600px){.header{height: 80px;}      }";

      shadow.appendChild(style);
      shadow.appendChild(header);
    }
  }
  customElements.define("header-el", headerEl);
}
