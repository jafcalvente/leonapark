import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { instagramIcon } from "../../assets/icons/instagram";
import { whatsappIcon } from "../../assets/icons/whatsapp";
import styles from "./section-contact.scss?inline";

@customElement("section-contact")
export class SectionContact extends LitElement {
  public static styles = unsafeCSS(styles);

  render() {
    return html`
      <div class="row">
        <div class="col-12">
          <div class="m-3">
            <div class="mb-3 eucalyptus-color--darker">
              Encuéntranos en calle Salvador de Madariaga, edificio Edipsa
              Dalias, local 10, Alhaurín de la Torre.
            </div>
            <div class="leona-park-map h-100">
              <iframe
                class="w-100"
                style="height: 500px;"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.293652524739!2d-4.563932823748403!3d36.667439975171305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72fb037bf8d171%3A0x1b7f76dff9c0fee!2sLeona%20Park!5e0!3m2!1ses!2ses!4v1734372879676!5m2!1ses!2ses"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div
            class="m-3 d-flex justify-content-center flex-wrap column-gap-4 row-gap-3"
          >
            <a
              class="d-flex align-items-center gap-1 text-decoration-none"
              href="https://instagram.com/leonapark10/"
              target="_blank"
              style="fill: #a97038; color: #5f9e9c"
            >
              <span style="width: 32px; height: 32px;">${instagramIcon}</span>
              <span class="fs-5">@leonapark10</span></a
            >
            <a
              class="d-flex align-items-center gap-1 text-decoration-none"
              href="https://wa.me/34644365646"
              target="_blank"
              style="fill: #a97038; color: #5f9e9c"
            >
              <span style="width: 32px; height: 32px;">${whatsappIcon}</span>
              <span class="fs-5">644 365 646</span></a
            >
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "section-contact": SectionContact;
  }
}
