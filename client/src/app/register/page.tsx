"use client";
import { google, registerUser } from "@/backend";
import useForm from "@/hooks/useForm";
import { UserRegister } from "@/types";
import { alerts } from "@/utils/alert";
import { USER_TOKEN } from "@/utils/constants";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Register() {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;
  const router = useRouter();
  const { form, handleChange } = useForm<UserRegister>({
    name: "",
    email: "",
    password: ""
  });

  const handleRegisterGoogle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
      Cookies.set(USER_TOKEN, JSON.stringify(response.data), { sameSite: "Lax", expires: 1 });

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
    <div className="w-screen h-screen bg-white flex items-center justify-center">
      <main className="w-[800px] h-[600px] flex items-center">
        <section className="h-[460px] w-[60%] flex flex-col items-center">
          <h1 className="font-semibold text-4xl text-primary-500 gap-18 leading-[57px]">
            Create account
          </h1>
          <p className="w-[335px] font-light text-[12px] leading-[18px] text-fg-normal text-center">
            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de
            tipografías o de borradores de diseño para probar el diseño visual Name is email
            password Continue
          </p>
          <form
            onSubmit={handleSubmit}
            className="w-[50%] h-[300px] flex flex-col items-center justify-evenly"
          >
            <input
              placeholder="Name is"
              onChange={handleChange}
              name="name"
              value={form.name}
              type="text"
              className="w-[335px] h-[47px] text-fg-normal shadow-[0px_0px_6px_rgba(0,0,0,0.25)] rounded-[20px] px-[20px] py-[10px] gap-[10px] bg-[#FCFBFB] outline-none"
            />
            <input
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={form.email}
              type="email"
              className="w-[335px] h-[47px] text-[#514B46] shadow-[0px_0px_6px_rgba(0,0,0,0.25)] rounded-[20px] px-[20px] py-[10px] gap-[10px] bg-[#FCFBFB] outline-none"
            />
            <input
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={form.password}
              type="password"
              className="w-[335px] h-[47px] text-[#514B46] shadow-[0px_0px_6px_rgba(0,0,0,0.25)] rounded-[20px] px-[20px] py-[10px] gap-[10px] bg-[#FCFBFB] outline-none"
            />
            <button
              type="submit"
              className="w-[335px] h-[47px] rounded-[20px] px-[20px] py-[10px] gap-10 bg-[#FF8811] font-bold text-[16px] leading[27px]"
            >
              Continue
            </button>
          </form>
          <div className="w-[150px] flex items-center justify-around">
            <button
              onClick={handleRegisterFacebook}
              className="w-[50px] h-[50px] shadow-[0px_0px_6px_rgba(0,0,0,0.25)] p-[10px] rounded-[8px]"
            >
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
        <section className="h-[520px] w-[40%] flex items-center justify-center">
          <Image src="/CookMeal.png" alt="CookMeal" width={305} height={520} />
        </section>
      </main>
    </div>
  );
}
