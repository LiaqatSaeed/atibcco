import Banner1 from "@/app/assets/images/banner/banner1.jpg";
import Banner2 from "@/app/assets/images/banner/banner2.jpg";
import Banner3 from "@/app/assets/images/banner/banner3.jpg";
import { BannerItem1, BannerItem2, BannerItem3 } from "./banner-item";

const NextArrow = () => (
  <button
    type="button"
    className="carousel-control left"
    aria-label="carousel-control"
  >
    <i className="fas fa-chevron-left"></i>
  </button>
);

const PrevArrow = () => (
  <button
    type="button"
    className="carousel-control right"
    aria-label="carousel-control"
  >
    <i className="fas fa-chevron-right"></i>
  </button>
);

export const Banner = () => {
  return (
    <div className="banner-carousel banner-carousel-1 mb-0">
      <BannerItem1 src={Banner1.src} />
      <BannerItem2 src={Banner2.src} />
      <BannerItem3 src={Banner3.src} />
    </div>
  );
};
