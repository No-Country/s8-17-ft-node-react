"use client";

import { registerUser } from "@/backend";
import { alerts } from "@/utils/alert";
import { API_BASE_URL, USER_TOKEN } from "@/utils/constants";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CookMeal from "public/CookMeal.png";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@/components";
import { ImSpinner8 } from "react-icons/im";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const registerSchema = z
  .object({
    name: z.string().min(1, "This field is required").max(100),
    email: z.string().email("This field must be an email"),
    password: z
      .string()
      .min(8, "Password must have a minimum length of 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one lowercase letter, one uppercase letter, and one number"
      ),
    confirmPassword: z.string({ required_error: "Password confirmation is required" })
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match"
  });

type Schema = z.infer<typeof registerSchema>;

export default function Register() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    trigger
  } = useForm<Schema>({
    resolver: zodResolver(registerSchema),
    defaultValues: INITIAL_STATE,
    mode: "onBlur"
  });

  const handleRegisterGoogle = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    window.location.href = `${API_BASE_URL}/api/auth/google`;
  };

  const handleRegisterFacebook = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    window.location.href = `${API_BASE_URL}/api/auth/facebook`;
  };

  const { mutate } = useMutation(registerUser, {
    onSuccess: response => {
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

  const onSubmit = async (data: Schema) => {
    await trigger([], { shouldFocus: true });
    mutate(data);
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
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center justify-evenly"
        >
          <div className="w-full h-full flex flex-col gap-1.5 justify-between pt-2">
            <input
              placeholder="Name is"
              type="text"
              className={`w-full text-normal shadow-[0px_0px_6px_rgba(0,0,0,0.25)] rounded-3xl px-5 py-3 bg-white outline-none ${
                touchedFields.name && errors.name ? "shadow-error" : ""
              }`}
              {...register("name")}
            />
            {touchedFields.name && errors.name && <ErrorMessage message={errors.name.message!} />}
          </div>
          <div className="w-full flex flex-col gap-1.5 justify-between pt-2">
            <input
              placeholder="Email"
              type="email"
              className={`w-full text-normal shadow-[0px_0px_6px_rgba(0,0,0,0.25)] rounded-3xl px-5 py-3 bg-white outline-none ${
                touchedFields.email && errors.email ? "shadow-error" : ""
              }`}
              {...register("email")}
            />
            {touchedFields.email && errors.email ? (
              <ErrorMessage message={errors.email.message!} />
            ) : null}
          </div>
          <div className="w-full flex flex-col gap-1.5 justify-between pt-2">
            <input
              placeholder="Password"
              type="password"
              className={`w-full text-normal shadow-[0px_0px_6px_rgba(0,0,0,0.25)] rounded-3xl px-5 py-3 bg-white outline-none ${
                touchedFields.password && errors.password ? "shadow-error" : ""
              }`}
              {...register("password")}
            />
            {touchedFields.password && errors.password && (
              <ErrorMessage message={errors.password.message!} />
            )}
          </div>
          <div className="w-full flex flex-col gap-1.5 justify-between pt-2">
            <input
              placeholder="Confirm password"
              type="password"
              className={`w-full text-normal shadow-[0px_0px_6px_rgba(0,0,0,0.25)] rounded-3xl px-5 py-3 bg-white outline-none ${
                touchedFields.confirmPassword && errors.confirmPassword ? "shadow-error" : ""
              }`}
              {...register("confirmPassword")}
            />
            {touchedFields.confirmPassword && errors.confirmPassword && (
              <ErrorMessage message={errors.confirmPassword.message!} />
            )}
          </div>
          <button
            type="submit"
            className="w-full rounded-3xl mt-4 px-5 py-3 bg-primary-500 font-bold"
            disabled={isSubmitting}
          >
            {isSubmitting ? <ImSpinner8 className="animate-spin" /> : "Continue"}
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
      </section>
      <Image src={CookMeal} alt="CookMeal" className="hidden md:block" />
    </div>
  );
}
