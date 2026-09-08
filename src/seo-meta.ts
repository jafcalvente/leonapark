import {LeonaParkSection} from "./components/leona-park-side-menu";

type SeoMeta = { title: string; description: string };

const sectionSeoMeta: Partial<Record<LeonaParkSection, SeoMeta>> = {
  [LeonaParkSection.HOME]: {
    title: "Sala de fiestas en Málaga para eventos únicos y personalizados",
    description:
      "Alquila una sala de fiestas en Málaga con luz natural, decoración a tu gusto y mesas dulces para cumpleaños, baby shower y eventos inolvidables",
  },
  [LeonaParkSection.FACILITIES]: {
    title: "Local para fiestas infantiles y otros eventos privados en Málaga",
    description:
      "Descubre un local para fiestas infantiles y eventos privados en Málaga, con parque de bolas, juegos y un espacio versátil para celebraciones familiares",
  },
  [LeonaParkSection.PROTOCOL]: {
    title: "Alquiler para eventos en Málaga fácil, rápido y sin complicaciones",
    description:
      "Descubre cómo funciona el alquiler para eventos en Málaga. Reserva tu salón para fiestas privadas o cumpleaños de forma sencilla y sin sorpresas en el proceso",
  },
  [LeonaParkSection.RATES]: {
    title: "Alquiler de espacios para eventos con tarifas claras en Málaga",
    description:
      "Consulta nuestras tarifas de alquiler de espacios para eventos en Málaga. Elige tu sala ideal para cumpleaños, celebraciones privadas o reuniones familiares",
  },
  [LeonaParkSection.CONTACT]: {
    title: "Tu lugar para celebrar cumpleaños y eventos especiales en Málaga",
    description:
      "Contacta con nosotros y encuentra el lugar para celebrar cumpleaños en Málaga. Te ayudamos a organizar fiestas y celebraciones que no olvidarás jamás",
  },
};

export function applySeoMeta(section: LeonaParkSection | undefined): void {
  const meta = (section && sectionSeoMeta[section]) ?? sectionSeoMeta[LeonaParkSection.HOME]!;

  document.title = meta.title;

  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", meta.description);

  document
    .querySelector('meta[property="og:title"]')
    ?.setAttribute("content", meta.title);

  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute("content", meta.description);
}
