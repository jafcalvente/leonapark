import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { logoIcon } from "../../assets/icons/logo";
import { LeonaParkSection } from "../leona-park-side-menu";
import styles from "./section-protocol.scss?inline";

@customElement("section-protocol")
export class SectionProtocol extends LitElement {
  public static styles = unsafeCSS(styles);

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
          <div class="card shadow text-shadow border-2 m-3">
            <div class="card-header px-4">
              <span class="card-title fs-5"> ¿Cómo funciona? </span>
            </div>
            <div class="card-body">
              <ul class="card-text ps-0 m-md-2">
                <li class="d-flex gap-2 mb-3">
                  <span
                    class="d-flex align-self-stretch mt-1"
                    style="width: 15px; height: 15px; min-width: 15px; min-heigh: 15px;"
                    >${logoIcon}</span
                  ><span
                    >Ponte en contacto con nosotros para consultar si el día que
                    te interesa está disponible. Te enviaremos además toda la
                    información sobre nuestro funcionamiento. Debes ser mayor de
                    25 años y tener en cuenta que las fiestas de adolescentes no
                    están permitidas.</span
                  >
                </li>
                <li class="d-flex gap-2 mb-3">
                  <span
                    class="d-flex align-self-stretch mt-1"
                    style="width: 15px; height: 15px; min-width: 15px; min-heigh: 15px;"
                    >${logoIcon}</span
                  >
                  <div>
                    <div class="mb-2">
                      Abona en concepto de reserva 50€ en efectivo, o por
                      transferencia indicando como concepto &lt;&lt;<i
                        >NOMBRE COMPLETO + DIA DE RESERVA</i
                      >&gt;&gt; al siguiente número de cuenta:
                    </div>
                    <div class="fs-5 text-center">
                      ES02 0182 4290 9502 0160 8213
                    </div>
                  </div>
                </li>
                <li class="d-flex gap-2 mb-3">
                  <span
                    class="d-flex align-self-stretch mt-1"
                    style="width: 15px; height: 15px; min-width: 15px; min-heigh: 15px;"
                    >${logoIcon}</span
                  ><span
                    ><span>La diferencia</span>
                    <a
                      role="button"
                      href="#"
                      class="p-0 link text-shadow"
                      @click=${(e: MouseEvent) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.changeSection(LeonaParkSection.RATES);
                      }}
                      >(ver tarifas)</a
                    >
                    <span
                      >se pagará en efectivo el mismo día del evento a las
                      12:00.</span
                    ></span
                  >
                </li>
                <li class="d-flex gap-2 mb-3">
                  <span
                    class="d-flex align-self-stretch mt-1"
                    style="width: 15px; height: 15px; min-width: 15px; min-heigh: 15px;"
                    >${logoIcon}</span
                  ><span
                    >¿Quieres que te montemos tu mesa dulce? ¡Pregúntanos!</span
                  >
                </li>
                <li class="d-flex gap-2">
                  <span
                    class="d-flex align-self-stretch mt-1"
                    style="width: 15px; height: 15px; min-width: 15px; min-heigh: 15px;"
                    >${logoIcon}</span
                  ><span
                    >Firmaremos un contrato de alquiler... ¡no olvides tu
                    DNI!</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "section-protocol": SectionProtocol;
  }
}
