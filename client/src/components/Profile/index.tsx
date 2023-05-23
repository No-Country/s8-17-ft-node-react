"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { FieldError, useForm } from "react-hook-form";
import { alerts } from "@/utils/alert";

//Importación de Iconos
import { BiShow, BiLowVision } from "react-icons/bi";

const ProfileUser = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
    }
  }, [user]);

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const onSubmit = (data: any) => {
    console.log(data);
    alerts({
      title: "User updated successfully!",
      icon: "success",
      timer: 2000
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="w-full md:w-2/4 lg:w-2/4 py-4 px-12 bg-yellow-200 rounded-lg lg:translate-x-1/4">
      <h1 className="font-semibold text-2xl md:text-3xl text-dark">Profile</h1>
      <p className="text-sm md:text-base lg:text-lg font-normal text-justify">
        Keep your account secure, update your password regularly, and choose a variety of
        characters. Avoid using personal data such as names or date of birth.
      </p>
      <form
        className="w-full flex flex-col justify-center gap-2 my-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="font-medium text-base text-normal" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="w-full text-normal shadow-[0px_0px_6px_rgba(0,0,0,0.25)] rounded-lg px-5 py-3 bg-white outline-none"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="font-medium text-base text-normal" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full text-normal shadow-[0px_0px_6px_rgba(0,0,0,0.25)] rounded-lg px-5 py-3 bg-white outline-none"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="font-medium text-base text-normal" htmlFor="password">
            New Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full text-normal shadow-[0px_0px_6px_rgba(0,0,0,0.25)] rounded-lg px-5 py-3 bg-white outline-none"
              {...register("password", { required: true })}
            />
            <span className="absolute right-4 top-3">
              {showPassword ? (
                <BiLowVision
                  className="text-dark-500 cursor-pointer text-2xl"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <BiShow
                  className="text-dark-500 cursor-pointer text-2xl"
                  onClick={togglePasswordVisibility}
                />
              )}
            </span>
          </div>
          {errors.password && (
            <span className="text-red-500">
              <b>Este campo es requerido</b>
            </span>
          )}
        </div>
        <div>
          <label className="font-medium text-base text-normal" htmlFor="confirmPassword">
            Confirm Password:
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="w-full text-normal shadow-[0px_0px_6px_rgba(0,0,0,0.25)] rounded-lg px-5 py-3 bg-white outline-none"
              {...register("confirmPassword", {
                required: "Este campo es requerido",
                validate: {
                  empty: value => value.trim() !== "" || "El campo no puede estar vacío ",
                  match: value => value === password || "Las contraseñas no coinciden"
                }
              })}
            />
            <span className="absolute right-4 top-3">
              {showConfirmPassword ? (
                <BiLowVision
                  className="text-dark-500 cursor-pointer text-2xl"
                  onClick={toggleConfirmPasswordVisibility}
                />
              ) : (
                <BiShow
                  className="text-dark-500 cursor-pointer text-2xl"
                  onClick={toggleConfirmPasswordVisibility}
                />
              )}
            </span>
          </div>

          {errors.confirmPassword && (
            <span className="text-red-500">
              <b>{(errors.confirmPassword as FieldError).message}</b>
            </span>
          )}
        </div>
        <div className="flex gap-2 mt-4">
          <button
            className="flex-1 px-6 font-bold text-white bg-lime-500 rounded-lg py-2"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
      <div className="flex gap-2">
        <button className="flex-1 px-6 font-bold text-white bg-red-500 rounded-lg py-2">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProfileUser;
