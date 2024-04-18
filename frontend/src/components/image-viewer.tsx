import { useState } from "react";

import { SwiperCarousel } from "./swiper-carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { StrapiImage } from "@/store/types";
import { baseUrl } from "@/lib/config";

export interface ImageViewerProps {
  images: StrapiImage[];
}

export const ImageViewer: React.FC<ImageViewerProps> = ({ images }) => {
  const [clickedImage, setClickedImage] = useState<number>(0);

  return (
    <Dialog>
      {images.map((img, i) => (
        <DialogTrigger
          key={i}
          className="focus-visible:outline-none"
          onClick={() => {
            setClickedImage(i);
          }}
        >
          <img
            src={baseUrl + img.attributes.url}
            alt={img.attributes.name}
            className="max-h-full max-w-full rounded-xl object-contain"
          />
        </DialogTrigger>
      ))}
      <DialogContent className="h-[calc(100vh-100px)] max-w-[calc(100vw-100px)] border-none bg-zinc-900 rounded-lg">
        {images.length === 1 && (
          <div className="flex h-full w-full items-center justify-center">
            <img
              src={baseUrl + images[0].attributes.url}
              alt={images[0].attributes.name}
              className="h-[calc(100vh-210px)] object-contain"
            />
          </div>
        )}

        {images.length > 1 && (
          <SwiperCarousel initialSlide={clickedImage} images={images} />
        )}
      </DialogContent>
    </Dialog>
  );
};
