import Image from "next/image";

type Testimonial = {
  name: string;
  testimonial: string;
  image: string;
};

export const testimonials: Testimonial[] = [
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
    testimonial: "ttext2text2text2text2text2ext2",
    image: "/home/img_home_testimonials_3.png"
  },
  {
    name: "Maximiliano",
    testimonial: "text3text3text3text3text3text3",
    image: "/home/img_home_testimonials_4.png"
  },
  {
    name: "Maximiliano",
    testimonial: "text4text4text4text4text4text4",
    image: "/home/img_home_testimonials_5.png"
  }
];

const TestimonialCard = ({ name, testimonial, image }: Testimonial) => {
  return (
    <div className="w-full max-w-md h-full flex flex-col items-center justify-start">
      <Image src={image} alt="image" width={155} height={206} />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-center">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
