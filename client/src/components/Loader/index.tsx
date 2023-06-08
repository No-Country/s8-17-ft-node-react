import React from "react";
import { IconSpinner } from "../icons";
import Image from "next/image";

type Props = {
  type: "spinner" | "gif";
};

const Loader = ({ type = "spinner" }: Props) => {
  if (type === "gif") {
    return (
      <div className="w-full h-screen bg-black/40 absolute inset-y-0 inset-x-0 z-50 flex justify-center items-center">
        <Image src="/recipes/loading_gif.gif" alt="loading" width={256} height={256} />
      </div>
    );
  }
  return <IconSpinner />;
};

export default Loader;
