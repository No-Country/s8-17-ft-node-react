"use client";

import { ContactForm } from "@/components";
import Image from "next/image";
import image_1 from "public/home/img_home_contact_1.svg";
import image_2 from "public/home/img_home_contact_2.svg";
import image_3 from "public/home/img_home_contact_3.png";
import image_4 from "public/home/img_home_contact_4.png";

//TODO: add images

function Contact() {
  return (
    <section className="w-full md:w-2/4 lg:w-2/4 py-4 px-12 bg-complementary-500 rounded-lg lg:translate-x-1/4 relative">
      <Image
        src={image_1}
        alt="home contact image 1"
        className="hidden md:block absolute top-4 left-4"
      />
      <Image
        src={image_2}
        alt="home contact image 2"
        className="hidden md:block absolute top-4 left-4"
      />
      <h3 className="font-semibold text-2xl md:text-3xl text-dark">Necesitas ayuda?</h3>
      <p className="text-sm md:text-base lg:text-lg font-normal text-normal">
        contáctenos si necesita un asistente furber
      </p>
      <ContactForm />
      <Image
        src={image_3}
        alt="home contact image 3"
        className="hidden md:block absolute top-4 left-4"
      />
      <Image
        src={image_4}
        alt="home contact image 4"
        className="hidden md:block absolute top-4 left-4"
      />
    </section>
  );
}

export default Contact;
