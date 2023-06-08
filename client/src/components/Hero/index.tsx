import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import React from "react";

const Hero = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="relative w-full h-[360px] bg-opacity-50 bg-hero bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center py-4 overflow-hidden px-4">
      <div className="absolute z-0 bg-dark/60 inset-y-0 w-full"></div>
      <div className="w-full lg:w-2/4 flex flex-col items-center justify-center gap-4 z-10">
        <h1 className="font-title leading-snug text-white text-center font-semibold text-4xl shadow-lg">
          What would you like to cook?
        </h1>
        <p className="font-title leading-snug text-white text-center font-semibold text-base shadow-2xl">
          Discover delectable recipes from all over the world, ingeniously crafted by our AI-powered
          chef.
        </p>
        <div className="flex gap-4">
          {isAuthenticated ? (
            <Link
              href={"/dashboard"}
              className="text-center lg:mt-0 py-2 px-4 border border-primary-500 rounded-3xl bg-primary-500 text-white w-50 items-center"
            >
              Go to dashboard
            </Link>
          ) : (
            <Link
              href={"/register"}
              className="text-center lg:mt-0 py-2 px-4 border border-primary-500 rounded-3xl bg-primary-500 text-white w-40 items-center"
            >
              Get Started
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
