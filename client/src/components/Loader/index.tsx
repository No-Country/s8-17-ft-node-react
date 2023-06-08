import React from "react";
import { IconSpinner } from "../icons";
import Image from "next/image";

type Props = {
  type: "spinner" | "gif";
  text?: string;
};

const Loader = ({ type = "spinner", text = "" }: Props) => {
  if (type === "gif") {
    return (
      <div className="w-full h-screen bg-black/60 absolute inset-y-0 inset-x-0 z-50 flex flex-col justify-center items-center gap-2">
        <Image src="/recipes/loading_gif.gif" alt="loading" width={256} height={256} />
        <p className="text-xl text-white">{text}</p>
      </div>
    );
  }
  return <IconSpinner className="animate-spin text-2xl" />;
};

export default Loader;
