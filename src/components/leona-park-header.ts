import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import leonaParkLogo from "../assets/leona-park-logo.svg";
import { LeonaParkSection } from "./leona-park-side-menu";
import styles from "./leona-park-header.scss?inline";

@customElement("leona-park-header")
export class LeonaParkHeader extends LitElement {
  public static styles = unsafeCSS(styles);

  private goHome() {
    this.dispatchEvent(
      new CustomEvent("request-change-section", {
        detail: { section: LeonaParkSection.HOME },
      })
    );
  }

  render() {
    return html`
      <button
        type="button"
        class="logo-button p-0 border-0 bg-transparent"
        aria-label="Ir a inicio"
        @click=${() => this.goHome()}
      >
        <img src=${leonaParkLogo} alt="Leona Park logo" />
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "leona-park-header": LeonaParkHeader;
  }
}
