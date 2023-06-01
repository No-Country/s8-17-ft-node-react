"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiUser } from "react-icons/bi";
import { BsArrowUpSquare, BsPatchQuestion } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { useAuth } from "@/hooks/useAuth";
import Cookies from "js-cookie";
import { USER_TOKEN } from "@/utils/constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { Menu, NavBarContent } from "@/components";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  const handleLogOut = () => {
    Cookies.remove(USER_TOKEN, { sameSite: "Lax" });
    router.push("/");
  };

  const firstLetter = user?.name?.charAt(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const optionsList = [
    {
      id: 1,
      url: "/profile",
      text: "Profile",
      icon: <BiUser />,
      activeColor: "primary-500",
      inactiveColor: "light"
    },
    {
      id: 2,
      url: "/",
      text: "Logout",
      icon: <BsArrowUpSquare />,
      activeColor: "primary-500",
      inactiveColor: "light",
      onClick: handleLogOut
    },
    {
      id: 3,
      url: "/settings",
      text: "Settings",
      icon: <IoSettingsOutline />,
      activeColor: "primary-500",
      inactiveColor: "light"
    },
    {
      id: 4,
      url: "/help",
      text: "Help",
      icon: <BsPatchQuestion />,
      activeColor: "primary-500",
      inactiveColor: "light"
    }
  ];

  return (
    <nav className="w-full flex items-center justify-between py-3 px-4 md:pl-20 lg:pr-32">
      <div className="flex items-center md:mr-6">
        <Link href="/">
          <Image
            className="w-full h-full md:w-auto lg:w-auto"
            src="/logo.png"
            alt="logo"
            width={237}
            height={74}
          />
        </Link>
      </div>
      <div>
        {!isLoading && isAuthenticated ? (
          <div className="flex flex-wrap items-center">
            <Link href={"/profile"}>
              <button className="text-white text-lg rounded-3xl bg-normal p-4 font-semibold outline-none uppercase mr-2">
                {firstLetter}
              </button>
            </Link>
            <Link href={"/dashboard"}>
              <button className="block w-40 mr-2 items-center bg-primary-500 text-white hover:bg-white hover:text-primary-500 outline-none text-lg py-3 px-3 rounded-3xl border border-primary-500 font-semibold">
                Dashboard
              </button>
            </Link>
            <Link href={"/pricin3"}>
              <button className="block w-40 mr-2 items-center bg-primary-500 text-white hover:bg-white hover:text-primary-500 outline-none text-lg py-3 px-3 rounded-3xl border border-primary-500 font-semibold">
                Prices
              </button>
            </Link>
            <Link href={"/about"}>
              <button className="block w-40 items-center bg-primary-500 text-white hover:bg-white hover:text-primary-500 outline-none text-lg py-3 px-3 rounded-3xl border border-primary-500 font-semibold">
                About Us
              </button>
            </Link>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-primary-500 hover:bg-gray-100 outline-none text-2xl"
            >
              <GiHamburgerMenu />
            </button>
            <div className="fixed top-24 right-4 z-50">
              {isMenuOpen && (
                <div
                  className={`bg-white ${
                    isMenuOpen
                      ? "transition-transform duration-1000 transform -translate-x-0"
                      : "transition-trasnform duration-1000 transform translate-x-full"
                  }`}
                >
                  <Menu options={optionsList} />
                </div>
              )}
            </div>
          </div>
        ) : (
          <section>
            <div className="lg:hidden">
              <button className="text-primary-500 text-3xl" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <VscChromeClose /> : <GiHamburgerMenu />}
              </button>
            </div>
            <div>
              <NavBarContent isOpen={isOpen} />
            </div>
          </section>
        )}
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
