"use client";

import useForm from "@/hooks/useForm";

const ContactForm = () => {
  const { form, handleChange } = useForm<{ name: string; email: string; message: string }>({
    name: "",
    email: "",
    message: ""
  });
  return (
    <form className="w-full flex flex-col justify-center gap-2 my-4">
      <label className="font-medium text-base text-normal" htmlFor="name">
        Nombre y Apellido
      </label>
      <input
        placeholder="John Doe"
        type="text"
        name="name"
        onChange={handleChange}
        className="w-full text-normal shadow-[0px_0px_6px_rgba(0,0,0,0.25)] rounded-lg px-5 py-3 bg-white outline-none"
      />
      <label className="font-medium text-base text-normal" htmlFor="email">
        Email
      </label>
      <input
        placeholder="johndoe@example.com"
        type="email"
        name="email"
        onChange={handleChange}
        className="w-full text-normal shadow-[0px_0px_6px_rgba(0,0,0,0.25)] rounded-lg px-5 py-3 bg-white outline-none"
      />
      <label className="font-medium text-base text-normal" htmlFor="message">
        Mensaje
      </label>
      <textarea
        placeholder="Write your message..."
        name="message"
        onChange={handleChange}
        className="w-full text-normal shadow-[0px_0px_6px_rgba(0,0,0,0.25)] rounded-lg px-5 py-3 bg-white outline-none"
      />
      <button className="w-full self-end lg:w-max px-6 font-bold text-white bg-secondary-500 rounded-lg py-2">Enviar</button>
    </form>
  );
};

export default ContactForm;
