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
  activeColor: string;
  inactiveColor: string;
};

type Props = {
  options: Option[];
};

const Menu = ({ options }: Props) => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  console.log(options);
  return (
    <section className="w-full lg:w-[234px] h-fit flex flex-col items-center lg:text-left px-6 py-11 gap-6 shadow-custom rounded-xl overflow-hidden">
      {options.map(option => (
        <Link
          href={option.url}
          key={option.id}
          passHref
          className={`flex justify-start items-center ${
            isActive(option.url) ? "text-" + option.activeColor : "text-" + option.inactiveColor
          }`}
        >
          <h1
            className={`lg:w-[200px] flex text-2xl font-medium ml-4 gap-2 rounded-md hover:shadow-custom ${
              isActive(option.url) ? "shadow-custom" : "shadow-transparent"
            } lg:py-1 lg:px-3`}
          >
            {option.icon}
            {option.text}
          </h1>
        </Link>
      ))}
    </section>
  );
};

export default Menu;
