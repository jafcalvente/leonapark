import { Carousel } from "bootstrap";
import { LitElement, html, unsafeCSS } from "lit";
import { customElement, query } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import carouselImage01 from "../../assets/gallery/leona_park_01.jpg";
import carouselImage02 from "../../assets/gallery/leona_park_02.jpg";
import carouselImage03 from "../../assets/gallery/leona_park_03.jpg";
import carouselImage04 from "../../assets/gallery/leona_park_04.jpg";
import carouselImage05 from "../../assets/gallery/leona_park_05.jpg";
import carouselImage06 from "../../assets/gallery/leona_park_06.jpg";
import carouselImage07 from "../../assets/gallery/leona_park_07.jpg";
import carouselImage08 from "../../assets/gallery/leona_park_08.jpg";
import carouselImage09 from "../../assets/gallery/leona_park_09.jpg";
import carouselImage10 from "../../assets/gallery/leona_park_10.jpg";
import carouselImage11 from "../../assets/gallery/leona_park_11.jpg";
import carouselImage12 from "../../assets/gallery/leona_park_12.jpg";
import carouselImage13 from "../../assets/gallery/leona_park_13.jpg";
import carouselImage14 from "../../assets/gallery/leona_park_14.jpg";
import carouselImage15 from "../../assets/gallery/leona_park_15.jpg";
import carouselImage16 from "../../assets/gallery/leona_park_16.jpg";
import carouselImage17 from "../../assets/gallery/leona_park_17.jpg";
import styles from "./section-gallery.scss?inline";

const CAROUSEL_IMAGES = [
  carouselImage01,
  carouselImage02,
  carouselImage03,
  carouselImage04,
  carouselImage05,
  carouselImage06,
  carouselImage07,
  carouselImage08,
  carouselImage09,
  carouselImage10,
  carouselImage11,
  carouselImage12,
  carouselImage13,
  carouselImage14,
  carouselImage15,
  carouselImage16,
  carouselImage17,
];

@customElement("section-gallery")
export class SectionGallery extends LitElement {
  public static styles = unsafeCSS(styles);

  @query("#leonaParkCarousel")
  private leonaParkCarousel!: HTMLDivElement;

  private carousel: Carousel;

  protected firstUpdated(): void {
    this.carousel = new Carousel(this.leonaParkCarousel);
  }

  render() {
    return html`
      <div class="row row-gap-4 mt-3">
        <div class="col-12">
          <div
            id="leonaParkCarousel"
            class="carousel slide mx-auto w-100 p-3"
            data-bs-ride="true"
            style="max-width: 500px; background-color: #5f9e9c"
          >
            <div class="carousel-indicators">
              ${CAROUSEL_IMAGES.map(
                (image, index) => html`
                  <button
                    type="button"
                    data-bs-target="#leonaParkCarousel"
                    data-bs-slide-to="${index}"
                    class="${!index ? "active" : ""}"
                    aria-current="${!index ? "true" : "false"}"
                    aria-label="Slide ${index + 1}"
                    @click=${() => this.carousel.to(index)}
                  ></button>
                `
              )}
            </div>
            <div class="carousel-inner">
              ${CAROUSEL_IMAGES.map(
                (image, index) => html`
                  <div class="carousel-item ${classMap({ active: !index })}">
                    <img
                      src="${image}"
                      class="d-block w-100"
                      alt="Foto de las instalaciones de Leona Park"
                      style="max-width: 500px;"
                    />
                  </div>
                `
              )}
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#leonaParkCarousel"
              data-bs-slide="prev"
              @click=${() => this.carousel.prev()}
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Anterior</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#leonaParkCarousel"
              data-bs-slide="next"
              @click=${() => this.carousel.next()}
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>

        <div class="col-12">
          <div class="d-flex justify-content-center">
            <div class="video-container">
              <iframe
                width="560"
                height="315"
                style="max-width: 560px; max-height: 315px;"
                src="https://www.youtube.com/embed/ms4z5qs88QY?si=Um-4KcIrXsVl-hdT"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "section-gallery": SectionGallery;
  }
}
