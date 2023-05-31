import About from "@/components/About";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="w-full min-h-screen flex flex-wrap md:flex-nowrap justify-around gap-7 px-4 py-[38px]">
      <About />
    </main>
  );
}
