"use client";

import svg1 from "public/home/svg_home_1.svg";
import svg2 from "public/home/svg_home_2.svg";
import img1 from "public/home/img_home_1.png";
import img2 from "public/home/img_home_2.png";
import Image from "next/image";

const HomeInfo = () => {
  return (
    <div className="container h-max flex flex-col justify-center items-center gap-4">
      <div className="w-full flex items-center justify-center gap-8">
        <Image src={svg1} alt="svg 1" />
        <div className="w-full flex items-center justify-between gap-8">
          <Image src={img1} alt="img 1" className="w-1/3 md:w-full" />
          <div className="flex flex-col justify-center gap-5">
            <h2 className="font-title text-primary-500 font-semibold text-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <p className="font-title font-normal text-lg text-dark">
              Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones
              de tipografías o de borradores de diseño para probar el diseño visual antes de
              insertar el texto final.
            </p>
          </div>
        </div>
        <Image src={svg2} alt="svg 2" className="self-start" />
      </div>
      <div className="w-full flex items-center justify-center gap-8">
        <Image src={svg2} alt="svg 2" className="self-end" />
        <div className="w-full flex flex-row-reverse items-center justify-between gap-8">
          <Image src={img2} alt="img 2" className="w-1/3 md:w-full" />
          <div className="flex flex-col justify-center gap-5">
            <h2 className="font-title text-primary-500 font-semibold text-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <p className="font-title font-normal text-lg text-dark">
              Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones
              de tipografías o de borradores de diseño para probar el diseño visual antes de
              insertar el texto final.
            </p>
          </div>
        </div>
        <Image src={svg1} alt="svg 1" className="self-end" />
      </div>
    </div>
  );
};

export default HomeInfo;
