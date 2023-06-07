"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string({ required_error: "Name is required" }).max(255),
  email: z.string({ required_error: "Email is required" }).email(),
  message: z.string({ required_error: "Message is required" })
});

type Schema = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Schema>({
    resolver: zodResolver(contactSchema)
  });

  return (
    <form className="w-full flex flex-col justify-center gap-2 my-4">
      <label className="font-medium text-base text-normal" htmlFor="name">
        Full name
      </label>
      <input
        placeholder="John Doe"
        type="text"
        className="w-full text-normal shadow-[0px_0px_6px_rgba(0,0,0,0.25)] rounded-lg px-5 py-3 bg-white outline-none"
        {...register("name")}
      />
      <label className="font-medium text-base text-normal" htmlFor="email">
        Email
      </label>
      <input
        placeholder="johndoe@example.com"
        type="email"
        className="w-full text-normal shadow-[0px_0px_6px_rgba(0,0,0,0.25)] rounded-lg px-5 py-3 bg-white outline-none"
        {...register("email")}
      />
      <label className="font-medium text-base text-normal" htmlFor="message">
        Message
      </label>
      <textarea
        placeholder="Write your message..."
        className="w-full text-normal shadow-[0px_0px_6px_rgba(0,0,0,0.25)] rounded-lg px-5 py-3 bg-white outline-none"
        {...register("message")}
      />
      <button
        type="submit"
        className="w-full self-end lg:w-max px-6 font-bold text-white bg-secondary-500 rounded-lg py-2"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
