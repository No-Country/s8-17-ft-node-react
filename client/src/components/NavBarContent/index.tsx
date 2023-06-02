"use client";

import React from "react";
import Link from "next/link";

interface NavBarContentProps {
  isOpen: boolean;
}

const NavBarContent: React.FC<NavBarContentProps> = ({ isOpen }) => {
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

  return (
    <div
      className={`w-full max-h-0 absolute z-10 inset-x-0 p-4 rounded-b-2xl gap-5 lg:flex md:items-center md:w-auto lg:static font-semibold bg-white transition-all duration-300 lg:h-full lg:max-h-full lg:opacity-100 ${
        isOpen ? "top-full max-h-96 opacity-100" : "-top-96 opacity-0 lg:opacity-100 lg:top-0"
      }`}
    >
      {links.map(link => (
        <Link href={link.url} key={link.id}>
          <p className="md:min-w-max text-primary-500">{link.text}</p>
        </Link>
      ))}
      {buttons.map(button => (
        <Link href={button.url} key={button.id}>
          <button
            className={`block lg:inline-block lg:mt-0 py-2 px-4 border border-primary-500 rounded-3xl ${button.bgColor} ${button.textColor} w-40 items-center`}
          >
            {button.text}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default NavBarContent;
