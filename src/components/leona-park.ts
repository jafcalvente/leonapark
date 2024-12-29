import { LitElement, html, nothing, unsafeCSS } from "lit";
import { customElement, state } from "lit/decorators.js";
import { choose } from "lit/directives/choose.js";
import { classMap } from "lit/directives/class-map.js";
import { menuIcon } from "../assets/icons/menu";
import leonaParkNoTextLogo from "../assets/leona-park-no-text-logo.svg";
import "../styles.scss";
import "./leona-park-header";
import "./leona-park-side-menu";
import { LeonaParkSection } from "./leona-park-side-menu";
import styles from "./leona-park.scss?inline";
import "./sections/section-contact";
import "./sections/section-facilities";
import "./sections/section-gallery";
import "./sections/section-home";
import "./sections/section-protocol";
import "./sections/section-rates";

const LeonaParkSections = [
  LeonaParkSection.HOME,
  LeonaParkSection.FACILITIES,
  LeonaParkSection.PROTOCOL,
  LeonaParkSection.RATES,
  LeonaParkSection.GALLERY,
  LeonaParkSection.CONTACT,
];

@customElement("leona-park")
export class LeonaPark extends LitElement {
  public static styles = unsafeCSS(styles);

  @state()
  private section?: LeonaParkSection;

  @state()
  private isMenuExpanded = false;

  constructor() {
    super();
    this.section = this.getSectionFromUrl();
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("popstate", this.onPopstate);
  }

  disconnectedCallback() {
    window.removeEventListener("popstate", this.onPopstate);
    super.disconnectedCallback();
  }

  private getSectionFromUrl(): LeonaParkSection | undefined {
    const hash = window.location.hash;
    const regex = new RegExp(`#(${LeonaParkSections.join("|")})(/)?$`);
    const match = hash.match(regex);

    if (match) {
      return match[1] as LeonaParkSection;
    }

    return LeonaParkSection.HOME;
  }

  private onRequestChangeSection(event: CustomEvent) {
    this.section = event.detail.section;
    this.isMenuExpanded = false;
    window.location.hash = `#${this.section}`;
    window.scrollTo({ top: 0 });
  }

  private onPopstate = () => {
    this.section = this.getSectionFromUrl();
  };

  render() {
    return html`<div class="container">
      <!-- Header -->
      ${this.section === LeonaParkSection.HOME
        ? nothing
        : html`<leona-park-header
            @click=${() => (this.isMenuExpanded = false)}
          ></leona-park-header>`}

      <!-- Show menu button -->
      ${this.renderShowMenuButton()}

      <!-- Side menu -->
      <leona-park-side-menu
        .section=${this.section}
        .isMenuExpanded=${this.isMenuExpanded}
        @request-change-section=${this.onRequestChangeSection}
      ></leona-park-side-menu>

      <!-- Main content -->
      <main @click=${() => (this.isMenuExpanded = false)}>
        ${choose(
          this.section,
          [
            [LeonaParkSection.HOME, () => html`<section-home></section-home>`],
            [
              LeonaParkSection.FACILITIES,
              () => html`<section-facilities></section-facilities>`,
            ],
            [
              LeonaParkSection.PROTOCOL,
              () => html`<section-protocol
                @request-change-section=${this.onRequestChangeSection}
              ></section-protocol>`,
            ],
            [
              LeonaParkSection.RATES,
              () => html`<section-rates></section-rates>`,
            ],
            [
              LeonaParkSection.GALLERY,
              () => html`<section-gallery></section-gallery>`,
            ],
            [
              LeonaParkSection.CONTACT,
              () => html`<section-contact></section-contact>`,
            ],
          ],
          () => html`<section-home></section-home>`
        )}
      </main>
    </div> `;
  }

  private renderShowMenuButton() {
    return html`<button
      type="button"
      class="show-menu-btn btn btn-link d-flex p-0 ${classMap({
        "golden-amber-color": this.isMenuExpanded,
        "eucalyptus-color": !this.isMenuExpanded,
      })}"
      @click="${() => (this.isMenuExpanded = !this.isMenuExpanded)}"
    >
      <!-- Collapsed menu icon -->
      <span
        class="leona-park-menu-icon ${classMap({
          "fade-out": this.isMenuExpanded,
        })}"
        >${menuIcon}</span
      >

      <!-- Expanded menu icon -->
      <img
        class="leona-park-menu-icon ${classMap({
          "fade-out": !this.isMenuExpanded,
        })}"
        src=${leonaParkNoTextLogo}
        alt="Leona Park logo icon"
      />
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "leona-park": LeonaPark;
  }
}
