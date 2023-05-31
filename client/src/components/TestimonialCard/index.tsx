"use client";

import Image from "next/image";

type Testimonial = {
  name: string;
  testimonial: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Lorem Ipsum",
    testimonial:
      "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías",
    image: "/home/img_home_testimonials_1.png"
  },
  {
    name: "Lorem Ipsum",
    testimonial:
      "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías",
    image: "/home/img_home_testimonials_2.png"
  },
  {
    name: "Lorem Ipsum",
    testimonial:
      "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías",
    image: "/home/img_home_testimonials_3.png"
  },
  {
    name: "Lorem Ipsum",
    testimonial:
      "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías",
    image: "/home/img_home_testimonials_4.png"
  },
  {
    name: "Lorem Ipsum",
    testimonial:
      "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografíast",
    image: "/home/img_home_testimonials_5.png"
  },
  {
    name: "Lorem Ipsum",
    testimonial:
      "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías",
    image: "/home/img_home_testimonials_4.png"
  },
  {
    name: "Lorem Ipsum",
    testimonial:
      "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografíast",
    image: "/home/img_home_testimonials_5.png"
  }
];

const TestimonialCard = ({ name, testimonial, image }: Testimonial) => {
  return (
    <div className="max-w-sm flex flex-col items-center justify-start">
      <Image src={image} alt="image" width={155} height={206} />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-center">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
