"use client";

import { useState } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

type CarouselProps<T> = {
  data: T[];
  renderCard: (item: T) => JSX.Element;
};

const Carousel = <T extends unknown>({ data, renderCard }: CarouselProps<T>) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = (): void => {
    setCurrentSlide((currentSlide + 1) % data.length);
  };

  const handlePrevSlide = (): void => {
    setCurrentSlide((currentSlide - 1 + data.length) % data.length);
  };

  const itemsPerView = 4;

  const startIndex = currentSlide * itemsPerView;
  const endIndex = startIndex + itemsPerView;
  const visibleData = data.slice(startIndex, endIndex);

  return (
    <div className="relative mx-auto max-w-full px-6 py-8">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 gap-2">
        {visibleData.map((item, index) => (
          <div key={index} className="w-full h-max">
            <div className={`relative transition-all duration-500 ease-in-out`}>
              {renderCard(item)}
            </div>
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
