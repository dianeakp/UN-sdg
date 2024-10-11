import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class UNSdg extends DDDSuper(LitElement) {
  static get tag() {
    return "UN-sdg";
  }

  constructor() {
    super();
    this.goal = "1";
    this.img =
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Sustainable_Development_Goal_01NoPoverty.svg";
    this.alt = "";
  }

  static get properties() {
    return {
      goal: { type: String },
      img: { type: String },
      alt: { type: String },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
          font-size: var(--UN-sdg-font-size, var(--ddd-font-size-s));
          width: 254px;
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        div {
          padding: 0;
          margin: 0;
        }
      `,
    ];
  }

  // numAssign(goal) {
  //   switch (goal) {
  //     case "1":
  //       this.img =
  //         "https://upload.wikimedia.org/wikipedia/commons/5/50/Sustainable_Development_Goal_01NoPoverty.svg";
  //       break;
  //     case "2":
  //       this.img = "";
  //       break;
  //     case "3":
  //       this.img = "";
  //       break;
  //     case "4":
  //       this.img = "";
  //       break;
  //     case "5":
  //       this.img = "";
  //       break;
  //   }
  // }

  updated(changedProperties) {
    if (changedProperties.has("goal")) {
      this.updateGoalImage();
      //switch statement assigns the goal
      switch (this.goal) {
        case "1":
          this.img =
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Sustainable_Development_Goal_01NoPoverty.svg/1280px-Sustainable_Development_Goal_01NoPoverty.svg.png";
          break;
        case "2":
          this.img = "";
          break;
        case "3":
          this.img = "";
          break;
        case "4":
          this.img = "";
          break;
        case "5":
          this.img = "";
          break;
      }
    }
  }

  render() {
    return html` <img src="${this.img}" alt="${this.alt}" /> `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(UNSdg.tag, UNSdg);
