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
        <Image src={svg1} alt="svg 1" className="hidden lg:block" />
        <div className="w-full flex items-center justify-between gap-8">
          <Image src={img1} alt="img 1" className="w-1/3 md:w-full" />
          <div className="flex flex-col justify-center gap-5">
            <h2 className="font-title text-primary-500 font-semibold text-3xl">
              Cookmeal: The revolution that will transform the way you cook.
            </h2>
            <p className="font-title font-normal text-lg text-dark text-justify">
              Discover a new way to cook with ease and enjoy delicious meals in the blink of an eye!
              With Cookmeal, leading a healthy and tasty life has never been so easy. Surprise your
              loved ones with effortlessly exquisite dishes, thanks to our innovative culinary
              technology. Save time and energy in the kitchen, while enjoying quality home-cooked
              meals. Explore new recipes and spark your culinary creativity.
            </p>
          </div>
        </div>
        <Image src={svg2} alt="svg 2" className="self-start hidden lg:block" />
      </div>
      <div className="w-full flex items-center justify-center gap-8">
        <Image src={svg2} alt="svg 2" className="self-end hidden lg:block" />
        <div className="w-full flex flex-row-reverse items-center justify-between gap-8">
          <Image src={img2} alt="img 2" className="w-1/3 md:w-full" />
          <div className="flex flex-col justify-center gap-5">
            <h2 className="font-title text-primary-500 font-semibold text-3xl">
              Unleash your culinary creativity with Cookmeal and dazzle everyone with unique and
              easy-to-prepare recipes!
            </h2>
            <p className="font-title font-normal text-lg text-dark text-justify">
              Discover an infinite range of surprising dishes that will allow you to experiment in
              the kitchen like never before. From delicious desserts to exquisite main courses,
              Cookmeal gives you the freedom to create extraordinary meals with simple ingredients.
              Surprise your loved ones and become a renowned chef with Cookmeal: where creativity
              and simplicity come together in the kitchen!
            </p>
          </div>
        </div>
        <Image src={svg1} alt="svg 1" className="self-end hidden lg:block" />
      </div>
    </div>
  );
};

export default HomeInfo;
