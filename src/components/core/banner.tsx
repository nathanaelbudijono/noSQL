import * as React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider, { CustomArrowProps, Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BannerContent } from "@/constant/banner-content";
import cn from "@/type/clsxm";
import IconButton from "../buttons/icon-button";
import Typography from "./typography";

type BannerProps = React.ComponentPropsWithoutRef<"div">;

function NextArrow({ onClick }: CustomArrowProps) {
  return (
    <IconButton
      onClick={onClick}
      icon={FiChevronRight}
      variant="ghost"
      size="sm"
      className="absolute top-1/2 right-0 z-10 flex -translate-x-1/2 max-sm:translate-x-10 -translate-y-1/2 items-center rounded-full"
    />
  );
}

function PrevArrow({ onClick }: CustomArrowProps) {
  return (
    <IconButton
      onClick={onClick}
      icon={FiChevronLeft}
      variant="ghost"
      size="sm"
      className="absolute top-1/2 left-0 z-10 flex translate-x-1/2 max-sm:-translate-x-10 -translate-y-1/2 items-center rounded-full"
    />
  );
}

const settings: Settings = {
  autoplay: true,
  autoplaySpeed: 6000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

export default function Banner({ className, ...rest }: BannerProps) {
  if (!BannerContent.length) return null;

  return (
    <div
      className={cn(
        "flex items-center bg-d-600 dark:bg-n-300 py-3 px-3",
        "min-h-[4rem] ",
        className
      )}
      {...rest}
    >
      <div className="sm:layout max-w-full px-8 sm:px-0">
        <Slider {...settings}>
          {BannerContent.map((content, index) => (
            <div key={index} className="text-center">
              <Typography variant="small">{content()}</Typography>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
