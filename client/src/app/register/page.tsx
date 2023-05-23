"use client";
import { registerUser } from "@/backend";
import useForm from "@/hooks/useForm";
import { UserRegister } from "@/types";
import { alerts } from "@/utils/alert";
import { USER_TOKEN } from "@/utils/constants";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CookMeal from "public/CookMeal.png";

export default function Register() {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;
  const router = useRouter();
  const { form, handleChange } = useForm<UserRegister>({
    name: "",
    email: "",
    password: ""
  });

  const handleRegisterGoogle = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    window.location.href = `${baseUrl}/api/auth/google`;
  };

  const handleRegisterFacebook = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    window.location.href = `${baseUrl}/api/auth/facebook`;
  };

  const { mutate } = useMutation(registerUser, {
    onSuccess: response => {
      // window.localStorage.setItem("loggedUser", JSON.stringify(response.data));
      Cookies.set(USER_TOKEN, response, { sameSite: "Lax", expires: 1 });

      alerts({
        title: "User registered succesfully!",
        icon: "success"
      }).then(() => {
        router.push("/");
      });
    },
    onError: (error: any) => {
      alerts({
        title: error.response.data.message
          ? error.response.data.message
          : error.response.data[0].matches,
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
    } else if (form.email === "") {
      alerts({
        title: "Email is required!",
        icon: "warning"
      });
    } else if (form.password === "") {
      alerts({
        title: "Password is required!",
        icon: "warning"
      });
    } else if (form.name === "") {
      alerts({
        title: "Name is required!",
        icon: "warning"
      });
    } else {
      mutate(form);
    }
  };
  return (
    <div className="container h-full bg-white flex items-center justify-center m-auto py-16 px-4">
      <section className="w-full md:w-1/3 flex flex-col items-center justify-center gap-5">
        <h1 className="text-center font-semibold text-4xl text-primary-500">Create account</h1>
        <p className="font-light text-xs text-normal text-center">
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de
          tipografías o de borradores de diseño para probar el diseño visual Name is email password
          Continue
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center justify-evenly gap-6"
        >
          <input
            placeholder="Name is"
            onChange={handleChange}
            name="name"
            value={form.name}
            type="text"
            className="w-full text-normal shadow-[0px_0px_6px_rgba(0,0,0,0.25)] rounded-3xl px-5 py-3 bg-white outline-none"
          />
          <input
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={form.email}
            type="email"
            className="w-full text-normal shadow-[0px_0px_6px_rgba(0,0,0,0.25)] rounded-3xl px-5 py-3 bg-white outline-none"
          />
          <input
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={form.password}
            type="password"
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
          <button
            onClick={handleRegisterGoogle}
            className="w-[50px] h-[50px] shadow-[0px_0px_6px_rgba(0,0,0,0.25)] p-[10px] rounded-[8px]"
          >
            <Image src="/Google.png" width={30} height={30} alt="Google" />
          </button>
        </div>
      </section>
      <Image src={CookMeal} alt="CookMeal" className="hidden md:block" />
    </div>
  );
}
