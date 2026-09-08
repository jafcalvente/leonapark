import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { logoIcon } from "../../assets/icons/logo";
import "./section-rates.scss";

@customElement("section-rates")
export class SectionRates extends LitElement {
  protected createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="row">
        <div class="col-12 d-flex flex-column">
          <div class="m-3 d-flex flex-column gap-3">
            <h1
              class="text-center amatic-sc-regular fw-bold eucalyptus-color--darker fs-2 mb-0"
            >
              Conoce nuestras tarifas de alquiler de espacios para eventos
            </h1>
            <p class="mb-0">
              Prepárate para celebrar en grande con nuestras tarifas de
              alquiler de espacios para eventos en un encantador salón de
              celebraciones.
            </p>
          </div>
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
                    class="d-flex align-self-stretch mt-1 list-icon"
                    >${logoIcon}</span
                  ><span>140€, lunes a jueves (no festivos).</span>
                </li>
                <li class="d-flex gap-2">
                  <span
                    class="d-flex align-self-stretch mt-1 list-icon"
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
                    class="d-flex align-self-stretch mt-1 list-icon"
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

          <div class="card shadow text-shadow border-2 m-3">
            <div
              class="card-header px-4 d-flex align-items-baseline gap-1 flex-wrap"
            >
              <span class="card-title fs-5 mb-0"> Fianza </span>
            </div>
            <div class="card-body">
              <ul class="card-text ps-0 m-md-2">
                <li class="d-flex gap-2">
                  <span
                    class="d-flex align-self-stretch mt-1 list-icon"
                    >${logoIcon}</span
                  ><span
                    >El día del evento se entregarán 50€ de fianza en efectivo que,
                    en caso de no producirse daños o desperfectos, se devolverán al
                    finalizar el alquiler.</span
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
