export function initInputName() {
  class Inputclass extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      //creacion del div contenedor//
      var divEl = document.createElement("div");
      divEl.setAttribute("class", "input-name");
      var styleInputName = document.createElement("style");
      styleInputName.textContent =
        ".input-name{display: flex;flex-direction: column;gap: 16px;margin: 69px auto;}";
      shadow.appendChild(styleInputName);
      shadow.appendChild(divEl);

      //creacion del elemento label//
      var labelEl = document.createElement("label");
      labelEl.textContent = "Nombre";
      labelEl.setAttribute("class", "nombre");
      var styleLabelEl = document.createElement("style");
      styleLabelEl.textContent =
        ".nombre{font-family: 'Roboto';font-style: normal;font-weight: 400;font-size: 18px;line-height: 21px;color: #000000;}";
      labelEl.appendChild(styleLabelEl);
      labelEl.setAttribute("for", "fname");

      //creacion del input//
      var inputEl = document.createElement("input");
      inputEl.setAttribute("class", "input");
      var styleInputEl = document.createElement("style");
      styleInputEl.textContent =
        ".input{min-Width:312px;Height:55px;border: 2px solid #000000;border-radius: 4px;}";
      inputEl.appendChild(styleInputEl);
      inputEl.setAttribute("id", "fname");
      inputEl.setAttribute("type", "text");
      inputEl.setAttribute("name", "name");
      inputEl.setAttribute("placeholder", "Ingresa tu nombre");

      //creacion del boton//
      var botonEl = document.createElement("button");
      botonEl.textContent = "Button";
      botonEl.setAttribute("class", "button");
      var stylebotonEl = document.createElement("style");
      stylebotonEl.textContent =
        ".button{display:grid; align-items:center;min-Width:312px;Height:55px;font-family: 'Roboto';font-style: normal;font-weight: 500;font-size: 22px;line-height: 26px;text-align: center;color: #000000;background: #9CBBE9;border-radius: 4px;}";
      botonEl.appendChild(stylebotonEl);

      //agrego los elementos hijos al div padre//
      shadow.querySelector("div")?.appendChild(labelEl);
      shadow.querySelector("div")?.appendChild(inputEl);
      shadow.querySelector("div")?.appendChild(botonEl);
    }
  }
  customElements.define("input-name", Inputclass);
}
