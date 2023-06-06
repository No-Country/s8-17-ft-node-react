"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconUser,
  IconPatchQuestion,
  IconArrowUpSquare,
  IconSettingsOutline,
  IconHamburgerMenu,
  IconCloseOutline
} from "@/components/icons";
import { useAuth } from "@/hooks/useAuth";
import { Menu, NavBarContent } from "@/components";
import Logo from "public/logo.png";

const links = [
  { id: 1, url: "/", text: "Home" },
  { id: 4, url: "/pricing", text: "Pricing" },
  { id: 2, url: "/about", text: "About Us" },
  { id: 3, url: "/contact", text: "Contact" }
];

const optionsList = [
  {
    id: 1,
    url: "/profile",
    text: "Profile",
    icon: <IconUser />,
    activeColor: "primary-500",
    inactiveColor: "light"
  },
  {
    id: 3,
    url: "/settings",
    text: "Settings",
    icon: <IconSettingsOutline />,
    activeColor: "primary-500",
    inactiveColor: "light"
  },
  {
    id: 4,
    url: "/help",
    text: "Help",
    icon: <IconPatchQuestion />,
    activeColor: "primary-500",
    inactiveColor: "light"
  },
  {
    id: 2,
    url: "/",
    text: "Logout",
    icon: <IconArrowUpSquare />,
    activeColor: "primary-500",
    inactiveColor: "light"
  }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isAuthenticated, isLoading } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-full flex flex-col lg:flex-row lg:items-center justify-center py-3 px-4 sticky top-0 z-20 bg-white">
      <div className="w-full h-max lg:w.max bg-white z-20 flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} alt="logo" className="w-auto h-auto py-2" />
        </Link>
        <div className="flex flex-row-reverse items-center gap-2 lg:flex-row">
          <button
            className="text-primary-500 text-3xl lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IconCloseOutline /> : <IconHamburgerMenu />}
          </button>
          <NavBarContent isOpen={isOpen} links={links} />
          {!isLoading && isAuthenticated ? (
            <div className="flex flex-wrap items-center">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 ml-1 text-primary-500 hover:bg-gray-100 outline-none text-2xl"
              >
                <IconUser />
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
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
