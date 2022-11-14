export function initButton() {
  class Buttonclass extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      var botonEl = document.createElement("button");
      botonEl.textContent = "Volver";
      botonEl.setAttribute("class", "button");
      var stylebotonEl = document.createElement("style");
      stylebotonEl.textContent =
        ".button{width:312px;height:55px; border: 2px solid #000000;border-radius: 4px; font-family: 'Roboto';font-style: normal;font-weight: 500;font-size: 22px;line-height: 26px;text-align: center;color: #000000;background:#E5E5E5}";
      shadow.appendChild(stylebotonEl);
      shadow.appendChild(botonEl);
    }
  }
  customElements.define("boton-volver", Buttonclass);
}
