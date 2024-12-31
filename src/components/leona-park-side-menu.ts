import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { instagramIcon } from "../assets/icons/instagram";
import { mapsIcon } from "../assets/icons/maps";
import { whatsappIcon } from "../assets/icons/whatsapp";
import styles from "./leona-park-side-menu.scss?inline";

export enum LeonaParkSection {
  HOME = "home",
  FACILITIES = "facilities",
  PROTOCOL = "protocol",
  RATES = "rates",
  GALLERY = "gallery",
  CONTACT = "contact",
}

@customElement("leona-park-side-menu")
export class LeonaParkSideMenu extends LitElement {
  public static styles = unsafeCSS(styles);

  @property({ type: String })
  public section?: LeonaParkSection;

  @property({ type: Boolean, attribute: "is-menu-expanded", reflect: true })
  public isMenuExpanded = false;

  private changeSection(section: LeonaParkSection) {
    this.dispatchEvent(
      new CustomEvent("request-change-section", {
        detail: { section },
      })
    );
  }

  render() {
    return html`
      <ul class="nav flex-column mt-5">
        <li
          class="nav-item ${classMap({
            active: this.section === LeonaParkSection.HOME,
          })}"
        >
          <button
            type="button"
            class="nav-link w-100 text-start"
            @click=${() => this.changeSection(LeonaParkSection.HOME)}
          >
            Inicio
          </button>
        </li>
        <li
          class="nav-item ${classMap({
            active: this.section === LeonaParkSection.FACILITIES,
          })}"
        >
          <button
            type="button"
            class="nav-link w-100 text-start"
            @click=${() => this.changeSection(LeonaParkSection.FACILITIES)}
          >
            Nuestra sala
          </button>
        </li>
        <li
          class="nav-item ${classMap({
            active: this.section === LeonaParkSection.PROTOCOL,
          })}"
        >
          <button
            type="button"
            class="nav-link w-100 text-start"
            @click=${() => this.changeSection(LeonaParkSection.PROTOCOL)}
          >
            Cómo funciona
          </button>
        </li>
        <li
          class="nav-item ${classMap({
            active: this.section === LeonaParkSection.RATES,
          })}"
        >
          <button
            type="button"
            class="nav-link w-100 text-start"
            @click=${() => this.changeSection(LeonaParkSection.RATES)}
          >
            Tarifas
          </button>
        </li>
        <li
          class="nav-item ${classMap({
            active: this.section === LeonaParkSection.GALLERY,
          })}"
        >
          <button
            type="button"
            class="nav-link w-100 text-start"
            @click=${() => this.changeSection(LeonaParkSection.GALLERY)}
          >
            Galería
          </button>
        </li>
        <li
          class="nav-item ${classMap({
            active: this.section === LeonaParkSection.CONTACT,
          })}"
        >
          <button
            type="button"
            class="nav-link w-100 text-start"
            @click=${() => this.changeSection(LeonaParkSection.CONTACT)}
          >
            Contacto
          </button>
        </li>
      </ul>

      <footer class="mt-auto p-3 d-flex justify-content-center gap-3">
        <a href="https://instagram.com/leonapark10/" target="_blank">
          ${instagramIcon}
        </a>
        <a href="https://maps.app.goo.gl/PtdZDKtbBz9Ah8vc9" target="_blank">
          ${mapsIcon}
        </a>
        <a href="https://wa.me/34644365646" target="_blank">
          ${whatsappIcon}
        </a>
      </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "leona-park-side-menu": LeonaParkSideMenu;
  }
}
