import Image from "next/image";
import React, { useState } from "react";

interface SliderProps {
  images: string[];
}

const SliderImages: React.FC<SliderProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage(prevImage => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  const previousImage = () => {
    setCurrentImage(prevImage => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  return (
    <div className="">
      <Image src={images[currentImage]} alt="Slider Image" fill />

      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full"
        onClick={previousImage}
      >
        &lt;
      </button>

      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full"
        onClick={nextImage}
      >
        &gt;
      </button>
    </div>
  );
};

export default SliderImages;
