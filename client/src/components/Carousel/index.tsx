"use client";

import Image from "next/image";
import { createRef, useState } from "react";

type Testimonial = {
  name: string;
  testimonial: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Maximiliano",
    testimonial:
      "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías",
    image: "/home/img_home_testimonials_1.png"
  },
  {
    name: "Maximiliano",
    testimonial:
      "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías",
    image: "/home/img_home_testimonials_2.png"
  },
  {
    name: "Maximiliano",
    testimonial:
      "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías",
    image: "/home/img_home_testimonials_3.png"
  },
  {
    name: "Maximiliano",
    testimonial:
      "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías",
    image: "/home/img_home_testimonials_4.png"
  },
  {
    name: "Maximiliano",
    testimonial:
      "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías",
    image: "/home/img_home_testimonials_5.png"
  }
];

const TestimonialCard = ({ name, testimonial, image }: Testimonial) => {
  return (
    <div className="w-full h-full p-4">
      <Image src={image} alt="image" width={500} height={500} className="object-contain" />
      <h3>name</h3>
      <p>testimonial</p>
    </div>
  );
};

const Carousel = () => {
  // We will start by storing the index of the current image in the state.
  const [currentImage, setCurrentImage] = useState(0);

  // We are using react ref to 'tag' each of the images. Below will create an array of
  // objects with numbered keys. We will use those numbers (i) later to access a ref of a
  // specific image in this array.
  const refs = testimonials.reduce((acc: any, _, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToImage = (i: number) => {
    // First let's set the index of the image we want to see next
    setCurrentImage(i);
    // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,
    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into
    // your current view! To do so we pass an index of the image, which is then use to identify our current
    // image's ref in 'refs' array above.
    refs[i].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start"
    });
  };

  // Some validation for checking the array length could be added if needed
  const totalImages = testimonials.length;

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousImage method.
  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
  const arrowStyle =
    "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

  // Let's create dynamic buttons. It can be either left or right. Using
  // isLeft boolean we can determine which side we'll be rendering our button
  // as well as change its position and content.
  const SliderControl = ({ isLeft }: { isLeft: boolean }) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
      style={{ top: "40%" }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? "◀" : "▶"}
      </span>
    </button>
  );

  return (
    // Images are placed using inline flex. We then wrap an image in a div
    // with flex-shrink-0 to stop it from 'shrinking' to fit the outer div.
    // Finally the image itself will be 100% of a parent div. Outer div is
    // set with position relative, so we can place our cotrol buttons using
    // absolute positioning on each side of the image.
    <div className="p-10 flex flex-row justify-center w-full md:w-1/2 items-center">
      <div className="relative w-full">
        <div className="carousel">
          <SliderControl isLeft={true} />
          {testimonials.map((testimonial, i) => (
            <div className="w-full" key={testimonial.image} ref={refs[i]}>
              <TestimonialCard key={testimonial.image} {...testimonial} />
            </div>
          ))}
          <SliderControl isLeft={false} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
