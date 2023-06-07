import React from "react";
import { ContactForm } from "@/components";
import Image from "next/image";
import image_1 from "public/home/img_home_contact_1.png";
import image_2 from "public/home/img_home_contact_2.png";
import image_3 from "public/home/img_home_contact_3.png";
import image_4 from "public/home/img_home_contact_4.png";

const Contact = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative mt-20">
      <section className="w-full md:w-2/4 lg:w-2/4 py-4 px-12 bg-white rounded-lg shadow-[0px_0px_6px_rgba(0,0,0,0.25)] relative">
        <Image
          src={image_1}
          alt="home contact image 1"
          className="hidden md:w-1/3 lg:w-max md:block absolute top-14 right-full"
        />
        <Image
          src={image_2}
          alt="home contact image 2"
          className="hidden md:w-1/3 lg:w-max md:block absolute bottom-8 -left-1/3"
        />
        <h3 className="font-semibold text-2xl md:text-3xl text-dark">Necesitas ayuda?</h3>
        <p className="text-sm md:text-base lg:text-lg font-normal text-normal">
          contáctenos si necesita un asistente furber
        </p>
        <ContactForm />
        <Image
          src={image_4}
          alt="home contact image 4"
          className="w-max h-max hidden md:w-1/3 lg:w-max md:block absolute bottom-8 left-full"
        />
        <Image
          src={image_3}
          alt="home contact image 3"
          className="hidden md:w-1/3 lg:w-max md:block absolute top-8 -right-1/3"
        />
      </section>
    </div>
  );
};

export default Contact;
