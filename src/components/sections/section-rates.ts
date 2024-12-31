import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { logoIcon } from "../../assets/icons/logo";
import styles from "./section-rates.scss?inline";

@customElement("section-rates")
export class SectionRates extends LitElement {
  public static styles = unsafeCSS(styles);

  render() {
    return html`
      <div class="row">
        <div class="col-12 d-flex flex-column">
          <div class="card shadow text-shadow border-2 m-3">
            <div
              class="card-header px-4 d-flex align-items-baseline gap-1 flex-wrap"
            >
              <span class="card-title fs-5 mb-0"> Tarifa por día </span>
              <span class="card-subtitle lh-lg"> (de 12:00 a 21:55) </span>
            </div>
            <div class="card-body">
              <ul class="card-text ps-0 m-md-2">
                <li class="mb-2 d-flex gap-2">
                  <span
                    class="d-flex align-self-stretch mt-1"
                    style="width: 15px; height: 15px; min-width: 15px; min-heigh: 15px;"
                    >${logoIcon}</span
                  ><span>140€, lunes a jueves (no festivos).</span>
                </li>
                <li class="d-flex gap-2">
                  <span
                    class="d-flex align-self-stretch mt-1"
                    style="width: 15px; height: 15px; min-width: 15px; min-heigh: 15px;"
                    >${logoIcon}</span
                  ><span>170€, viernes, sábados, domingos y festivos.</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="card shadow text-shadow border-2 m-3">
            <div
              class="card-header px-4 d-flex align-items-baseline gap-1 flex-wrap"
            >
              <span class="card-title fs-5 mb-0">
                Tarifa por días y eventos especiales</span
              >
              <span class="card-subtitle lh-lg"> (de 10:00 a 21:55) </span>
            </div>
            <div class="card-body">
              <ul class="card-text ps-0 m-md-2">
                <li class="d-flex gap-2">
                  <span
                    class="d-flex align-self-stretch mt-1"
                    style="width: 15px; height: 15px; min-width: 15px; min-heigh: 15px;"
                    >${logoIcon}</span
                  ><span
                    >230€, 1 de enero, 5 de enero, 6 de enero, 31 de octubre, 24
                    de diciembre, 25 de diciembre, 31 de diciembre, bautizos y
                    comuniones.</span
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
    "section-rates": SectionRates;
  }
}
