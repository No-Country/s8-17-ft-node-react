"use client";

import { useState } from "react";
import { FieldError, useForm } from "react-hook-form";
import { alerts } from "@/utils/alert";

// Importación de Iconos
import { BiShow, BiLowVision } from "react-icons/bi";

const ProfileUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const onSubmit = (data: any) => {
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
    <div className="w-full md:w-2/4 lg:w-2/4 py-4 px-4 bg-white rounded-2xl shadow-custom">
      <h1 className="font-semibold text-2xl md:text-3xl mt-12">Profile</h1>
      <p className="text-sm md:text-base lg:text-lg text-justify ">
        Keep your account secure, update your password regularly, and choose a variety of
        characters. Avoid using personal data such as names or date of birth.
      </p>
      <form className="flex flex-col gap-4 my-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-12">
          <label className="font-medium text-base text-normal" htmlFor="name">
            Full Name:
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              className="w-full shadow-custom rounded-lg px-5 py-3  bg-[#F6F6F6] outline-none"
            />
            <span className="absolute bottom-2 right-5 left-5 w-auto h-px bg-[#ABABAB]"></span>
          </div>
        </div>
        <div className="relative">
          <div>
            <label className="font-medium text-base text-normal" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full text-normal shadow-custom rounded-lg px-5 py-3  bg-[#F6F6F6] outline-none"
            />
          </div>
          <span className="absolute bottom-2 right-5 left-5 w-auto h-px bg-[#ABABAB]"></span>
        </div>
        <div>
          <label className="font-medium text-base text-normal" htmlFor="password">
            New Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full text-normal shadow-custom rounded-lg px-5 py-3 bg-[#F6F6F6] outline-none"
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
            <span className="absolute bottom-2 right-5 left-5 w-auto h-px bg-[#ABABAB]"></span>
          </div>
          {errors.password && (
            <span className="text-red-500">
              <b>The field is required</b>
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
              className="w-full text-normal shadow-custom rounded-lg px-5 py-3 bg-[#F6F6F6] outline-none"
              {...register("confirmPassword", {
                required: "The field is required",
                validate: {
                  empty: value => value.trim() !== "" || "The field cannot be empty",
                  match: value => value === password || "Passwords do not match"
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
            <span className="absolute bottom-2 right-5 left-5 w-auto h-px bg-[#ABABAB]"></span>
          </div>
          {errors.confirmPassword && (
            <span className="text-red-500">
              <b>{(errors.confirmPassword as FieldError).message}</b>
            </span>
          )}
        </div>
        <button
          className="self-end lg:w-max px-6 font-bold text-white bg-secondary-500 rounded-lg py-2 mt-4"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default ProfileUser;
