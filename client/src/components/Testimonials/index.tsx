import { Carousel } from "@/components";
import TestimonialCard, { testimonials } from "../TestimonialCard";

const Testimonials = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl text-secondary-500 font-bold">Las opiniones</h1>
      <Carousel data={testimonials} renderCard={TestimonialCard} />
    </div>
  );
};

export default Testimonials;
