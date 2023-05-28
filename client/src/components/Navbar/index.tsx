// "use client";

// import { useAuth } from "@/hooks/useAuth";
// import { colors, USER_TOKEN } from "@/utils/constants";
// import Cookies from "js-cookie";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import { HiLogout } from "react-icons/hi";

// export default function Navbar() {
//   const { user, isAuthenticated, isLoading } = useAuth();
//   const router = useRouter();

//   const handleLogOut = () => {
//     // window.localStorage.removeItem("loggedUser");
//     Cookies.remove(USER_TOKEN, { sameSite: "Lax" });
//     router.refresh();
//   };

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const token = params.get("token");
//   }, []);

//   return (
//     <header className="w-full h-[97px] flex justify-between items-center px-8">
//       <Link href="/">
//         <Image src="/logo.png" alt="logo" width={209} height={38} />
//       </Link>
//       <nav className="flex space-x-10">
//         <div className="flex items-center space-x-10 text-primary-500 font-semibold">
//           <Link href="/">
//             <span>Home</span>
//           </Link>
//           <Link href="/about">
//             <span>About Us</span>
//           </Link>
//           <Link href="/contact">
//             <span>Contact</span>
//           </Link>
//         </div>
//         <div className="flex items-center space-x-3">
//           {!isLoading && isAuthenticated ? (
//             <div className="w-[180px] flex items-center justify-evenly bg-primary-500 text-primary-500 border border-primary-500 p-2 rounded-full">
//               <h1 className="text-lg font-bold text-white">Hola {user?.name}</h1>
//               <HiLogout onClick={handleLogOut} color={"#FFF"} />
//             </div>
//           ) : (
//             <>
//               <Link href="/login">
//                 <button className="text-primary-500 font-semibold border border-primary-500 border-solid rounded-full px-4 py-2 bg-white shadow-lg">
//                   Sign in
//                 </button>
//               </Link>
//               <Link href="/register">
//                 <button className="text-white font-semibold border border-primary-500 border-solid rounded-full px-4 py-2 bg-primary-500 shadow-lg">
//                   Create Account
//                 </button>
//               </Link>
//             </>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// }

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu } from "@/components";
import { BiUser } from "react-icons/bi";
import { BsArrowUpSquare, BsPatchQuestion } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { useAuth } from "@/hooks/useAuth";
import Cookies from "js-cookie";
import { USER_TOKEN } from "@/utils/constants";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  const handleLogOut = () => {
    Cookies.remove(USER_TOKEN, { sameSite: "Lax" });
    router.push("/");
  };

  const name = user?.name;
  const firstLetter = name?.substring(0, 1);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { id: 1, url: "/", text: "Home" },
    { id: 2, url: "/about", text: "About Us" },
    { id: 3, url: "/contact", text: "Contact" }
  ];

  const buttons = [
    {
      id: 4,
      url: "/login",
      text: "Sign in",
      bgColor: "bg-white",
      textColor: "text-primary-500"
    },
    {
      id: 5,
      url: "/register",
      text: "Sign up",
      bgColor: "bg-primary-500",
      textColor: "text-white"
    }
  ];

  const options = [
    { id: 1, url: "/profile", text: "Profile", icon: <BiUser /> },
    { id: 2, url: "/", text: "Logout", icon: <BsArrowUpSquare /> },
    { id: 3, url: "/settings", text: "Settings", icon: <IoSettingsOutline /> },
    { id: 4, url: "/help", text: "Help", icon: <BsPatchQuestion /> }
  ];

  return (
    <nav className="flex items-center justify-between flex-wrap md:pl-12 py-7">
      <div className="flex items-center flex-shrink-0 text-white md:mr-6 lg:mr-72">
        <Link href="/">
          <Image
            className="w-full h-full mr-2"
            src="/logo.png"
            alt="logo"
            width={209}
            height={38}
          />
        </Link>
      </div>
      {!isLoading && isAuthenticated ? (
        <div className="flex flex-wrap items-center">
          <Link href={"/profile"}>
            <button className="text-white text-lg rounded-3xl bg-normal p-4 font-semibold outline-none uppercase mr-2">
              {firstLetter}
            </button>
          </Link>
          <Link href={"/about"}>
            <button className="block w-40 items-center bg-primary-500 text-white hover:bg-white hover:text-primary-500 outline-none text-lg py-3 px-4 rounded-3xl border border-primary-500 font-semibold">
              About Us
            </button>
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-primary-500 hover:bg-gray-100 outline-none text-2xl"
          >
            <svg
              className="fill-primary-500 h-7 w-7"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
          <div className="fixed top-24 right-4 z-50">
            <div
              className={`bg-white ${
                isMenuOpen
                  ? "transition-transform duration-1000 transform -translate-x-0"
                  : "transition-trasnform duration-1000 transform translate-x-full"
              }`}
            >
              {isMenuOpen && <Menu options={options} />}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
            >
              <svg
                className={`fill-primary-500 h-7 w-7 ${isOpen ? "hidden" : "block"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-primary-500 h-7 w-7 ${isOpen ? "block" : "hidden"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>
          <div
            className={`w-full block flex-grow md:flex md:items-center md:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="w-full text-lg items-center font-semibold justify-center md:flex md:gap-6  ">
              {links.map(link => (
                <Link href={link.url} key={link.id}>
                  <p className="text-primary-500 block mt-4 items-center lg:inline-block lg:mt-0 text-white-200 mr-4 opacity-70 hover:opacity-100 duration-300 ">
                    {link.text}
                  </p>
                </Link>
              ))}
              {buttons.map(button => (
                <Link href={button.url} key={button.id}>
                  <button
                    className={`w-40 block mt-4 items-center lg:inline-block lg:mt-0 mr-4 py-2 px-4 border border-primary-500 ${button.bgColor} ${button.textColor} rounded-3xl`}
                  >
                    {button.text}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
