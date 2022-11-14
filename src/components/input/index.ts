export function initInputName() {
  class Inputclass extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var divEl = document.createElement("div");
      divEl.setAttribute("class", "input-name");
      var style = document.createElement("style");
      style.textContent =
        ".input-name{display: flex;flex-direction: column;gap: 16px;margin: 69px auto;}, label .nombre{font-family: 'Roboto';font-style: normal;font-weight: 400;font-size: 18px;line-height: 21px;color: #000000;},.input{Width:312px;Height:55px;border: 2px solid #000000;border-radius: 4px;},.button{Width:312px;Height:55px;font-family: 'Roboto';font-style: normal;font-weight: 500;font-size: 22px;line-height: 26px;text-align: center;color: #000000;background: #9CBBE9;border-radius: 4px;}";
      shadow.appendChild(style);
      shadow.appendChild(divEl);

      var labelEl = document.createElement("label");
      labelEl.textContent = "Nombre";
      labelEl.setAttribute("class", "nombre");
      labelEl.setAttribute("for", "fname");

      var inputEl = document.createElement("input");
      inputEl.setAttribute("class", "input");
      inputEl.setAttribute("id", "fname");
      inputEl.setAttribute("type", "text");
      inputEl.setAttribute("name", "name");
      inputEl.setAttribute("placeholder", "Ingresa tu nombre");

      shadow.querySelector("div")?.appendChild(labelEl);
      shadow.querySelector("div")?.appendChild(inputEl);
      console.log(shadow);
    }
  }
  customElements.define("input-name", Inputclass);
}
