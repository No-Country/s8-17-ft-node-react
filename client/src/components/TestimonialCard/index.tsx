"use client";

import Image from "next/image";

type Testimonial = {
  name: string;
  testimonial: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Laura Rodriguez",
    testimonial:
      "I absolutely love CookMeal! It has been a great help to me. I always find delicious and easy-to-prepare options. Thank you!",
    image: "/home/img_home_testimonials_1.png"
  },
  {
    name: "Maria Gonzalez",
    testimonial:
      "CookMeal has been my savior in the kitchen. It has allowed me to discover new dishes and surprise my family with delicious meals. I highly recommend it!",
    image: "/home/img_home_testimonials_2.png"
  },
  {
    name: "Ana Torres",
    testimonial:
      "CookMeal has simplified my life in the kitchen. I can now plan my meals efficiently and discover new and delicious options. I am very happy with the results!",
    image: "/home/img_home_testimonials_3.png"
  },
  {
    name: "Carlos Lopez",
    testimonial:
      "Since I started using CookMeal, I have experienced an improvement in my culinary skills. I feel more confident and have learned to combine flavors in an incredible way. Thank you for this amazing tool!",
    image: "/home/img_home_testimonials_4.png"
  },
  {
    name: "Luis Garcia",
    testimonial:
      "CookMeal has helped me break free from my culinary routine. Now I can try exciting dishes and amaze my friends and family. It's awesome!",
    image: "/home/img_home_testimonials_5.png"
  },
  {
    name: "Emma Johnson",
    testimonial:
      "I am impressed with CookMeal. It has expanded my culinary repertoire and inspired me to try new flavor combinations. Thank you for this amazing tool!",
    image: "/home/img_home_testimonials_6.png"
  },
  {
    name: "Michael Davis",
    testimonial:
      "CookMeal has been an invaluable tool for my fitness journey. I can easily find and prepare healthy recipes that align with my goals. It has made eating well enjoyable and effortless. I am very grateful!",
    image: "/home/img_home_testimonials_7.png"
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
