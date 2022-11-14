export function initFooter() {
  class Footerclass extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      var footerEl = document.createElement("footer");
      footerEl.textContent = "Footer";
      footerEl.setAttribute("class", "footerComp");
      var stylefooterEl = document.createElement("style");
      stylefooterEl.textContent =
        ".footerComp{width:100%;height:18vh;background: #FFA0EA;display:flex;align-items: center;justify-content: center;font-family: 'Roboto';font-style: normal;font-weight: 500;font-size: 22px;line-height: 26px; color: #000000;}";
      shadow.appendChild(stylefooterEl);
      shadow.appendChild(footerEl);
    }
  }
  customElements.define("footer-el", Footerclass);
}
