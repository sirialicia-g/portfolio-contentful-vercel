"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Slider = dynamic(() => import("react-slick"), { ssr: true });

interface Props {
  images: { url: string; width: number; height: number }[];
}

export default function ImageCarousel({ images }: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {},
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <Image
              alt={`Portfolio Image ${index + 1}`}
              src={image.url}
              width={image.width}
              height={image.height}
              className="carousel-img"
              aria-label="Portfolio Image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
