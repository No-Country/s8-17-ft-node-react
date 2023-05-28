// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// type props = {
//   href: string;
// };

// export default function Menu({ href }: props) {
//   // console.log(href);
//   return (
//     <section className="w-[234px] h-[250px] flex flex-col items-center justify-center gap-8 border shadow-[0px_0px_6px_rgba(0,0,0,0.25) rounded-[8px]">
//       <Link href={"/dashboard"} className="w-[70%]">
//         <button className="flex items-center">
//           {href === "home" ? (
//             <Image
//               src="/menu/homeSelected.png"
//               alt="home"
//               width="25"
//               height="25"
//               className="pointer-events-none"
//             />
//           ) : (
//             <Image
//               src="/menu/home.png"
//               alt="home"
//               width="23"
//               height="20"
//               className="pointer-events-none"
//             />
//           )}
//           <h1
//             className={`text-[26px] pointer-events-none ${
//               href === "home" ? "text-[#FF0087]" : "text-[#ABABAB]"
//             } font-[500] leading-[39px] ml-3`}
//           >
//             Home
//           </h1>
//         </button>
//       </Link>

//       <Link href={"/recipesfav"} className="w-[70%]">
//         <button className="flex items-center">
//           {href === "recipesfav" ? (
//             <Image
//               src="/menu/StarSelected.png"
//               alt="home"
//               width="25"
//               height="25"
//               className="pointer-events-none"
//             />
//           ) : (
//             <Image
//               src="/menu/star.png"
//               alt="home"
//               width="23"
//               height="20"
//               className="pointer-events-none"
//             />
//           )}
//           <h1
//             className={`text-[26px] ${
//               href === "recipesfav" ? "text-[#FF0087]" : "text-[#ABABAB]"
//             } font-[500] leading-[39px] ml-3`}
//           >
//             Favorites
//           </h1>
//         </button>
//       </Link>

//       <Link href={"/generator"} className="w-[70%]">
//         <button className="flex items-center">
//           {href === "generator" ? (
//             <Image
//               src="/menu/CookingPotSelected.png"
//               alt="home"
//               width="25"
//               height="25"
//               className="pointer-events-none"
//             />
//           ) : (
//             <Image
//               src="/menu/CookingPot.png"
//               alt="home"
//               width="23"
//               height="20"
//               className="pointer-events-none"
//             />
//           )}
//           <h1
//             className={`text-[26px] ${
//               href === "generator" ? "text-[#FF0087]" : "text-[#ABABAB]"
//             } font-[500] leading-[39px] ml-3`}
//           >
//             Create
//           </h1>
//         </button>
//       </Link>
//     </section>
//   );
// }

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Option = {
  id: number;
  url: string;
  text: string;
  icon: React.ReactNode;
};

type Props = {
  options: Option[];
};

const Menu = ({ options }: Props) => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <section className="w-[254px] h-fit flex flex-col items-center justify-items-start gap-6 border shadow-0px_0px_8px_1px_rgba(0,0,0,0.25)] rounded-xl py-2 overflow-hidden">
      {options.map(option => (
        <Link
          href={option.url}
          key={option.id}
          passHref
          className={`flex items-center ${
            isActive(option.url) ? "text-secondary-500" : "text-light"
          }`}
        >
          <h1 className="inline-flex items-center text-[26px] font-medium leading-[39px] ml-4 gap-2 hover:text-secondary-500 hover:shadow-[0px_0px_8px_1px_rgba(0,0,0,0.25)] hover:w-11/12 px-8 py-1">
            {option.icon}
            {option.text}
          </h1>
        </Link>
      ))}
    </section>
  );
};

export default Menu;
