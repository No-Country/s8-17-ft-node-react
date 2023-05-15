import React from "react";
import { SearchBar } from "@/components";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-title text-center font-semibold text-5xl">
        Lorem ipsum dolor sit amet, qui minim labore adipisicing
      </h1>
      <SearchBar />
    </div>
  );
};

export default Hero;
