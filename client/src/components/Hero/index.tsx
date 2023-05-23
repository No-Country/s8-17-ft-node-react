import React from "react";
import { SearchBar } from "@/components";

const Hero = () => {
  return (
    <div className="relative w-full h-[360px] bg-opacity-50 bg-hero bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center py-4 overflow-hidden px-4">
      <div className="absolute z-0 bg-dark/60 inset-y-0 w-full"></div>
      <div className="w-full lg:w-2/4 flex flex-col items-center justify-center gap-4 z-10">
        <h1 className="font-title leading-snug text-white text-center font-semibold text-4xl lg:text-5xl">
          Lorem ipsum es el texto que se usa habitualmente
        </h1>
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
