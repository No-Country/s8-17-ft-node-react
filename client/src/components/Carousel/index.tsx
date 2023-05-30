"use client";

import { useEffect, useState } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { useResponsiveBreakpoint } from "@/hooks/useResponsiveBreakpoint";

type CarouselProps<T> = {
  data: T[];
  renderCard: (item: T) => JSX.Element;
};

const Carousel = <T extends unknown>({ data, renderCard }: CarouselProps<T>) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const { breakpoint } = useResponsiveBreakpoint();

  useEffect(() => {
    console.log("effect");
    if (breakpoint === "sm") {
      setItemsPerView(1);
    } else if (breakpoint === "md") {
      setItemsPerView(2);
    } else if (breakpoint === "lg") {
      setItemsPerView(3);
    } else if (breakpoint === "xl") {
      setItemsPerView(4);
    } else if (breakpoint === "2xl") {
      setItemsPerView(5);
    }
  }, [breakpoint]);

  const handleNextSlide = (): void => {
    const nextSlide = currentSlide + 1;
    const lastSlide = Math.ceil(data.length / itemsPerView) - 1;
    setCurrentSlide(nextSlide > lastSlide ? 0 : nextSlide);
  };

  const handlePrevSlide = (): void => {
    const prevSlide = currentSlide - 1;
    const lastSlide = Math.ceil(data.length / itemsPerView) - 1;
    setCurrentSlide(prevSlide < 0 ? lastSlide : prevSlide);
  };

  const startIndex = currentSlide * itemsPerView;
  const endIndex = startIndex + itemsPerView;
  const visibleData = data.slice(startIndex, endIndex);

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-6 py-8">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 gap-2">
        {visibleData.map((item, index) => (
          <div key={index} className="w-full h-full px-2">
            {renderCard(item)}
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-2">
        <div className="block">
          <button
            onClick={handlePrevSlide}
            className="p-6 rounded-full hover:scale-90 text-slate-950 ease-in-out duration-200 absolute inset-y-0 left-0"
          >
            <BsFillArrowLeftCircleFill size={28} />
          </button>
        </div>
        <div className="block">
          <button
            onClick={handleNextSlide}
            className="p-6 rounded-full hover:scale-90 text-slate-950 ease-in-out duration-200 absolute inset-y-0 right-0"
          >
            <BsFillArrowRightCircleFill size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
