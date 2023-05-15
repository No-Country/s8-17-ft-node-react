"use client";
import useForm from "@/hooks/useForm";
import { UserRegister } from "@/Interfaces";
import Image from "next/image";

export default function Register() {
  const { form, handleChange } = useForm<UserRegister>({
    name: "",
    email: "",
    password: ""
  });

  console.log(form);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault;
  };

  return (
    <div className="w-screen h-screen bg-[#fff] flex items-center justify-center">
      <main className="w-[800px] h-[600px] flex items-center">
        <section className="h-[460px] w-[60%] flex flex-col items-center">
          <h1 className="font-semibold text-4xl text-[#FF8811] gap-18 leading-[57px]">
            Create account
          </h1>
          <p className="w-[335px] font-light text-[12px] leading-[18px] text-[#514B46] text-center">
            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de
            tipografías o de borradores de diseño para probar el diseño visual Name is email
            password Continue
          </p>
          <form className="w-[50%] h-[300px] flex flex-col items-center justify-evenly">
            <input
              placeholder="Name is"
              onChange={handleChange}
              name="name"
              value={form.name}
              type="text"
              className="w-[335px] h-[47px] text-[#514B46] shadow-[0px_0px_6px_rgba(0,0,0,0.25)] rounded-[20px] px-[20px] py-[10px] gap-[10px] bg-[#FCFBFB] outline-none"
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
            <button className="w-[50px] h-[50px] shadow-[0px_0px_6px_rgba(0,0,0,0.25)] p-[10px] rounded-[8px]">
              <Image src="/Facebook.png" width={30} height={30} alt="Facebook" />
            </button>
            <button className="w-[50px] h-[50px] shadow-[0px_0px_6px_rgba(0,0,0,0.25)] p-[10px] rounded-[8px]">
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
