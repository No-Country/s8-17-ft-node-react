import { Carousel } from "@/components";
import TestimonialCard, { testimonials } from "../TestimonialCard";

const Testimonials = () => {
  return (
    <div className="w-full h-full my-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl text-secondary-500 font-bold">User testimonials</h1>
      <Carousel data={testimonials} renderCard={TestimonialCard} />
    </div>
  );
};

export default Testimonials;
