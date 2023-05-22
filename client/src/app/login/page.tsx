"use client";

import Image from "next/image";
import useForm from "@/hooks/useForm";
import { UserAuth } from "@/types";
import { loginUser } from "@/backend";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { alerts } from "@/utils/alert";
import Cookies from "js-cookie";
import { USER_TOKEN } from "@/utils/constants";
import CookMeal from "public/CookMeal.png";

export default function Login() {
  const router = useRouter();
  const { form, handleChange } = useForm<UserAuth>({
    email: "",
    password: ""
  });

  const { mutate } = useMutation(loginUser, {
    onSuccess: response => {
      // window.localStorage.setItem("loggedUser", JSON.stringify(response.data));
      Cookies.set(USER_TOKEN, JSON.stringify(response.data), { sameSite: "Lax", expires: 1 });
      router.push("/");
    },
    onError: (error: any) => {
      alerts({
        title: error.response.data.message,
        icon: "error"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.email === "" && form.password === "") {
      alerts({
        title: "All fields is required!",
        icon: "warning"
      });
    } else if (form.email === "" || form.password === "") {
      alerts({
        title: `${form.email === "" ? "Email" : "Password"} is required!`,
        icon: "warning"
      });
    } else {
      mutate(form);
    }
  };
  return (
    <div className="container h-full bg-white flex items-center justify-center m-auto py-16 px-4">
      <Image src={CookMeal} alt="CookMeal" className="hidden md:block" />
      <section className="w-full md:w-1/3 flex flex-col items-center justify-center gap-5">
        <h1 className="font-semibold text-4xl text-primary-500">Sign in</h1>
        <p className="font-light text-xs text-normal text-center">
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de
          tipografías o de borradores de diseño para probar el diseño visual
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center justify-evenly gap-6"
        >
          <input
            placeholder="Email"
            type="email"
            name="email"
            onChange={handleChange}
            className="w-full text-normal shadow-[0px_0px_6px_rgba(0,0,0,0.25)] rounded-3xl px-5 py-3 bg-white outline-none"
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleChange}
            className="w-full text-normal shadow-[0px_0px_6px_rgba(0,0,0,0.25)] rounded-3xl px-5 py-3 bg-white outline-none"
          />
          <button type="submit" className="w-full rounded-3xl px-5 py-3 bg-primary-500 font-bold">
            Continue
          </button>
        </form>
        <div className="flex items-center justify-around gap-5">
          <button className="w-[50px] h-[50px] shadow-[0px_0px_6px_rgba(0,0,0,0.25)] p-[10px] rounded-[8px]">
            <Image src="/Facebook.png" width={30} height={30} alt="Facebook" />
          </button>
          <button className="w-[50px] h-[50px] shadow-[0px_0px_6px_rgba(0,0,0,0.25)] p-[10px] rounded-[8px]">
            <Image src="/Google.png" width={30} height={30} alt="Google" />
          </button>
        </div>
        <p className="text-[#E63946] mt-5">have you forgotten your password?</p>
      </section>
    </div>
  );
}
