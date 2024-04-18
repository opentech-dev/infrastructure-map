import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import SwiperCore from "swiper";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { StrapiImage } from "@/store/types";
import { baseUrl } from "@/lib/config";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export interface SwiperCarouselProps {
  images: StrapiImage[];
  initialSlide: number;
}

export const SwiperCarousel: React.FC<SwiperCarouselProps> = ({
  images,
  initialSlide = 0,
}) => {
  return (
    <div className="flex h-full max-w-full select-none flex-wrap overflow-hidden">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        initialSlide={initialSlide}
        className="[&>.swiper-button-next]:text-zinc-200 [&>.swiper-button-prev]:text-zinc-200 
        [&>.swiper-pagination>.swiper-pagination-bullet.swiper-pagination-bullet-active]:bg-blue-700 
        [&>.swiper-pagination>.swiper-pagination-bullet]:bg-zinc-200
        [&>.swiper-pagination>.swiper-pagination-bullet]:opacity-100
        [&>.swiper-scrollbar]:hidden"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full w-full items-center justify-center">
              <img
                src={baseUrl + image.attributes.url}
                alt={image.attributes.name}
                className="h-[calc(100vh-210px)] object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
