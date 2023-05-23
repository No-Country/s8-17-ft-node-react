"use client";

import { ContactForm } from "@/components";

//TODO: add images

function Contact() {
  return (
    <section className="w-full md:w-2/4 lg:w-2/4 py-4 px-12 bg-complementary-500 rounded-lg lg:translate-x-1/4">
      <h3 className="font-semibold text-2xl md:text-3xl text-dark">Necesitas ayuda?</h3>
      <p className="text-sm md:text-base lg:text-lg font-normal text-normal">
        contáctenos si necesita un asistente furber
      </p>
      <ContactForm />
    </section>
  );
}

export default Contact;
