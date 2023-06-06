"use client";

import Image from "next/image";
import { loginUser } from "@/backend/user";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { alerts } from "@/utils/alert";
import Cookies from "js-cookie";
import { USER_TOKEN } from "@/utils/constants";
import CookMeal from "public/CookMeal.png";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@/components";
import { IconSpinner } from "@/components/icons";

const INITIAL_STATE = {
  email: "",
  password: ""
};

const loginSchema = z.object({
  email: z.string().email("This field must be an email"),
  password: z.string({ required_error: "Password is required" })
});

type Schema = z.infer<typeof loginSchema>;

export default function Login() {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

  const queryClient = useQueryClient();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    trigger
  } = useForm<Schema>({
    resolver: zodResolver(loginSchema),
    defaultValues: INITIAL_STATE,
    mode: "onBlur"
  });

  const { mutate } = useMutation(loginUser, {
    onSuccess: response => {
      // window.localStorage.setItem("loggedUser", JSON.stringify(response.data));
      Cookies.set(USER_TOKEN, response, { sameSite: "Lax", expires: 1 });
      queryClient.invalidateQueries(["user", "authStatus"]);
      router.push("/dashboard");
    },
    onError: (error: any) => {
      alerts({
        title: error.response.data.message,
        icon: "error"
      });
    }
  });

  const onSubmit = async (data: Schema) => {
    await trigger([], { shouldFocus: true });
    mutate(data);
  };

  const handleRegisterGoogle = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    window.location.href = `${baseUrl}/api/auth/google`;
  };

  const handleRegisterFacebook = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    window.location.href = `${baseUrl}/api/auth/facebook`;
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
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center justify-evenly gap-2"
        >
          <div className="w-full h-full flex flex-col gap-1.5 justify-between">
            <input
              placeholder="email"
              type="text"
              className={`w-full text-normal shadow-[0px_0px_6px_rgba(0,0,0,0.25)] rounded-3xl px-5 py-3 bg-white outline-none ${
                touchedFields.email && errors.email ? "shadow-error" : ""
              }`}
              {...register("email")}
            />
            {touchedFields.email && errors.email && (
              <ErrorMessage message={errors.email.message!} />
            )}
          </div>
          <div className="w-full h-full flex flex-col gap-1.5 justify-between">
            <input
              placeholder="password"
              type="password"
              className={`w-full text-normal shadow-[0px_0px_6px_rgba(0,0,0,0.25)] rounded-3xl px-5 py-3 bg-white outline-none ${
                touchedFields.email && errors.email ? "shadow-error" : ""
              }`}
              {...register("password")}
            />
            {touchedFields.password && errors.password && (
              <ErrorMessage message={errors.password.message!} />
            )}
          </div>
          <button
            type="submit"
            className="w-full rounded-3xl mt-4 px-5 py-3 bg-primary-500 font-bold"
            disabled={isSubmitting}
          >
            {isSubmitting ? <IconSpinner className="animate-spin" /> : "Continue"}
          </button>
        </form>
        <div className="flex items-center justify-around gap-5">
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
        <p className="text-[#E63946] mt-5">have you forgotten your password?</p>
      </section>
    </div>
  );
}
