import {LitElement, html} from "lit";
import {customElement} from "lit/decorators.js";
import {logoIcon} from "../../assets/icons/logo";
import {LeonaParkSection} from "../leona-park-side-menu";
import "./section-home.scss";

type Faq = { question: string; answer: string };

const faqs: Faq[] = [
  {
    question: "¿Qué tipo de eventos privados se pueden celebrar en la sala?",
    answer:
      "En Leona Park puedes organizar eventos privados como cumpleaños, baby showers, reuniones familiares, despedidas, jubilaciones o encuentros corporativos. El espacio está diseñado para adaptarse a diferentes formatos y públicos, con un ambiente cálido y versátil que se personaliza según tus preferencias.",
  },
  {
    question: "¿Puedo alquilar el espacio de forma flexible por horas?",
    answer:
      "Sí, ofrecemos un modelo de alquiler de espacios para eventos con total flexibilidad horaria. Podrás reservar por tramos adaptados a tu celebración, ya sea para unas pocas horas o para eventos de mayor duración. Esta opción permite aprovechar el espacio según tus necesidades, sin pagar más de lo necesario.",
  },
  {
    question: "¿Se pueden celebrar cumpleaños para todas las edades?",
    answer:
      "Claro, nuestra sala de fiestas está pensada para celebraciones de todas las edades. Contamos con zonas para peques, sonido de calidad y un entorno adaptable también para adultos. Decoramos según el estilo y temática deseada, para crear experiencias memorables sin importar la edad del homenajeado.",
  },
  {
    question: "¿Dónde se encuentra ubicada la sala de fiestas Leona Park?",
    answer:
      "Nos encontrarás en una zona accesible y bien comunicada de Alhaurín de la Torre (Málaga), en calle Salvador de Madariaga, edificio Edipsa Dalias, local 10. Contamos con cercanía a tiendas y supermercados, lo que facilita cualquier necesidad de último minuto durante tu evento. El entorno es cómodo y seguro para todos.",
  },
];

@customElement("section-home")
export class SectionHome extends LitElement {
  protected createRenderRoot() {
    return this;
  }

  private changeSection(section: LeonaParkSection) {
    this.dispatchEvent(
      new CustomEvent("request-change-section", {
        detail: { section },
      })
    );
  }

  render() {
    return html`
      <div class="row">
        <div class="col-12">
          <div class="mt-3 mx-3 d-flex flex-column gap-4 fs-5">
            <h1
              class="text-center amatic-sc-regular fw-bold eucalyptus-color--darker fs-2 mb-0"
            >
              Sala de fiestas en Málaga para celebraciones inolvidables
            </h1>
            <p class="mb-0">
              En Leona Park encontrarás una sala de fiestas moderna y
              equipada, perfecta para quienes buscan dónde celebrar
              cumpleaños, alquilar un espacio para eventos privados o
              reuniones familiares. Con capacidad para 50 personas, ofrece un
              entorno acogedor, sonido de calidad, zona infantil y una
              decoración que se adapta totalmente a tu estilo.
            </p>
            <h2
              class="text-center amatic-sc-regular fw-bold golden-amber-color fs-3 mb-0"
            >
              Un espacio acogedor para todo tipo de eventos privados
            </h2>
            <p class="mb-0">
              Leona Park te ofrece un ambiente cálido y acogedor para
              celebrar tus momentos especiales: eventos privados,
              cumpleaños, reuniones familiares y de amig@s,
              <i>baby shower</i>, <i>gender reveal</i>, reuniones
              corporativas o jubilaciones, entre otras. Nuestro servicio de
              alquiler de espacios para eventos se desarrolla en un entorno
              con amplios ventanales que permiten la entrada de luz natural,
              creando un espacio luminoso y agradable. Además, ofrecemos como
              servicio adicional el montaje de mesas dulces con tu temática
              favorita y chuches preferidos.
            </p>
            <p class="mb-0">
              Con una ubicación privilegiada, la accesibilidad y la cercanía a
              establecimientos de alimentación y bazar en caso de últimas
              necesidades son grandes ventajas.
            </p>
            <h2
              class="text-center amatic-sc-regular fw-bold eucalyptus-color--darker fs-3 mb-0"
            >
              Todo lo que necesitas saber sobre el alquiler de espacios para
              eventos
            </h2>
            <div class="card faq-card shadow text-shadow border-2">
              <div class="card-body p-0">
                <div class="accordion accordion-flush" id="homeFaqAccordion">
                  ${faqs.map(
                    (faq, index) => html`
                      <div class="accordion-item">
                        <h3
                          class="accordion-header"
                          id="homeFaqHeading${index}"
                        >
                          <button
                            class="accordion-button ${index !== 0
                              ? "collapsed"
                              : ""}"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#homeFaqCollapse${index}"
                            aria-expanded="${index === 0 ? "true" : "false"}"
                            aria-controls="homeFaqCollapse${index}"
                          >
                            <span class="d-flex align-self-stretch mt-1 list-icon me-2"
                              >${logoIcon}</span
                            >${faq.question}
                          </button>
                        </h3>
                        <div
                          id="homeFaqCollapse${index}"
                          class="accordion-collapse collapse ${index === 0
                            ? "show"
                            : ""}"
                          aria-labelledby="homeFaqHeading${index}"
                          data-bs-parent="#homeFaqAccordion"
                        >
                          <div class="accordion-body">${faq.answer}</div>
                        </div>
                      </div>
                    `
                  )}
                </div>
              </div>
            </div>
            <a
              role="button"
              href="#"
              class="text-center mt-2 amatic-sc-regular golden-amber-color fs-2 fw-bold text-decoration-none"
              @click=${(e: MouseEvent) => {
                e.preventDefault();
                this.changeSection(LeonaParkSection.CONTACT);
              }}
              >Alquila tu espacio ideal y celebra eventos únicos con
              nosotros</a
            >
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "section-home": SectionHome;
  }
}
