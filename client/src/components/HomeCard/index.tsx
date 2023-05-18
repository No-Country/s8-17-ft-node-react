"use client";

type Props = {
  title: string;
  text: string;
  bgColor: string;
};

const HomeCard = ({ title, text, bgColor }: Props) => {
  return (
    <div
      className={`${bgColor} text-[#FCFBFB] rounded-lg w-full h-full shadow-md px-4 py-6 md:px-6 md:py-8 lg:px-10 lg:py-14 flex flex-col gap-4 items-center justify-center`}
    >
      <h3 className="font-title text-xl font-semibold">{title}</h3>
      <p className="font-title text-xs font-normal">{text}</p>
    </div>
  );
};

export default HomeCard;
