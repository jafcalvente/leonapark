import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import leonaParkLogo from "../assets/leona-park-logo.svg";
import styles from "./leona-park-header.scss?inline";

@customElement("leona-park-header")
export class LeonaParkHeader extends LitElement {
  public static styles = unsafeCSS(styles);

  render() {
    return html`
      <div>
        <img src=${leonaParkLogo} alt="Leona Park logo" />
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "leona-park-header": LeonaParkHeader;
  }
}
