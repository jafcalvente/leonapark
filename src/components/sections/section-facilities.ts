import { LitElement, TemplateResult, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./section-facilities.scss?inline";

type Facility = { title: string; description: string | TemplateResult };

const facilities: Facility[] = [
  {
    title: "ESPACIO Y CAPACIDAD",
    description: html`Sala de 100m<sup>2</sup> con capacidad para 60 personas en
      total.`,
  },
  {
    title: "OFFICE",
    description:
      "Un espacio para almacenar cuanto traigas y preparar tu celebración. Contamos con zona de lavado, microondas, cafetera Dolce Gusto, tabla para cortar, utensilios varios de última necesidad, palomitera, inflador eléctrico de globos, arcón refrigerador y nevera combi. Para los deshechos, encontrarás dos cubos grandes con bolsa.",
  },
  {
    title: "ASEOS",
    description: "Diferenciados por sexos y con cambiador para bebés.",
  },
  {
    title: "MOBILIARIO",
    description:
      "Dispones de 5 mesas de 180cm y una de 122cm de largo, así como de 45 sillas apilables.",
  },
  {
    title: "CLIMATIZACIÓN",
    description:
      "Climatizador de alta potencia, tanto para los días calurosos como para los más fríos.",
  },
  {
    title: "PANEL PARA DECORACIÓN",
    description:
      "Panel habilitado para fijar tu decoración y un trono para la persona protagonista del evento ¡O para tod@s!.",
  },
  {
    title: "ZONA JUGUETES",
    description:
      "Espacio con juguetes pensado para quienes quieran disfrutarlos.",
  },
  {
    title: "PARQUE DE BOLAS",
    description:
      "No podía faltar en él la cama elástica y las bolas. Con capacidad para 25 niños y menores de 12 años.",
  },
  {
    title: "TELEVISIÓN",
    description:
      "Para reproducir tu música favorita desde Youtube o lo que más te interese.",
  },
  {
    title: "RED WIFI GRATUITA",
    description: "Encontrarás las claves dentro.",
  },
  {
    title: "ALTAVOZ",
    description:
      "Con conexión Bluetooth para, desde tu dispositivo, reproducir la música que más os guste.",
  },
  {
    title: "LIMPIEZA",
    description: "Escoba y recogedor, fregona y cubo a vuestra disposición.",
  },
];

@customElement("section-facilities")
export class SectionFacilities extends LitElement {
  public static styles = unsafeCSS(styles);

  render() {
    return html`
      <div class="row">
        <div class="col-12">
          <ul class="m-3 ps-0" style="list-style-type: none;">
            ${facilities.map((facility) => this.renderListItem(facility))}
          </ul>
        </div>
      </div>
    `;
  }

  private renderListItem({ title, description }: Facility) {
    return html`<li class="mb-4">
      <div class="fs-4 amatic-sc-bold eucalyptus-color--darker">${title}</div>
      <div class="noto-serif-regular">${description}</div>
    </li>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "section-facilities": SectionFacilities;
  }
}
