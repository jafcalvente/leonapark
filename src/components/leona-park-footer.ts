import {LitElement, html} from "lit";
import {customElement, property} from "lit/decorators.js";
import {classMap} from "lit/directives/class-map.js";
import {LeonaParkSection} from "./leona-park-side-menu";
import "./leona-park-footer.scss";

type FooterLink = { section: LeonaParkSection; label: string };

const footerLinks: FooterLink[] = [
  {section: LeonaParkSection.HOME, label: "Inicio"},
  {section: LeonaParkSection.FACILITIES, label: "Nuestra sala"},
  {section: LeonaParkSection.PROTOCOL, label: "Cómo funciona"},
  {section: LeonaParkSection.RATES, label: "Tarifas"},
  {section: LeonaParkSection.GALLERY, label: "Galería"},
  {section: LeonaParkSection.CONTACT, label: "Contacto"},
];

@customElement("leona-park-footer")
export class LeonaParkFooter extends LitElement {
  protected createRenderRoot() {
    return this;
  }

  @property({ type: String })
  public section?: LeonaParkSection;

  private changeSection(section: LeonaParkSection) {
    this.dispatchEvent(
      new CustomEvent("request-change-section", {
        detail: { section },
      })
    );
  }

  render() {
    return html`
      <footer class="leona-park-footer mt-5 pt-4 pb-4">
        <nav aria-label="Navegación del pie de página">
          <ul
            class="d-flex flex-wrap justify-content-center gap-3 list-unstyled mb-0"
          >
            ${footerLinks.map(
              ({ section, label }) => html`
                <li>
                  <button
                    type="button"
                    class="footer-nav-link amatic-sc-regular fw-bold fs-6 ${classMap(
                      {
                        "golden-amber-color": this.section === section,
                        "eucalyptus-color--darker": this.section !== section,
                      }
                    )}"
                    @click=${() => this.changeSection(section)}
                  >
                    ${label}
                  </button>
                </li>
              `
            )}
          </ul>
        </nav>
      </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "leona-park-footer": LeonaParkFooter;
  }
}
