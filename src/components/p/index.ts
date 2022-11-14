export function initPEl() {
  class EtiquetaPClass extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var tituloEl = document.createElement("p");
      tituloEl.setAttribute("class", "etiqueta_p");
      tituloEl.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quisquam ullam nam nesciunt nemo hic architecto magnam neque deleniti, veniam ducimus sequi dolore ipsam assumenda quaerat quas, voluptatum non fugiat?";
      var style = document.createElement("style");

      style.textContent =
        ".etiqueta_p{ min-width: 315px;font-family: 'Roboto';font-style: normal;font-weight: 400;font-size: 18px;line-height: 21px;color: #000000;} @media(min-width:600px){.etiqueta_p{width: 584px;}} ";

      shadow.appendChild(style);
      shadow.appendChild(tituloEl);
    }
  }
  customElements.define("etiqueta-p", EtiquetaPClass);
}
