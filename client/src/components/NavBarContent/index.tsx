"use client";

import React from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

interface Link {
  id: number;
  url: string;
  text: string;
}

interface Button extends Link {
  bgColor: string;
  textColor: string;
}

interface NavBarContentProps {
  isOpen: boolean;
  links: Link[];
}

const userButtons: Button[] = [
  {
    id: 6,
    url: "/dashboard",
    text: "Dashboard",
    bgColor: "bg-primary-500",
    textColor: "text-white"
  }
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

// TODO: Improve navbar styles (Carolina)

const NavBarContent: React.FC<NavBarContentProps> = ({ isOpen, links }) => {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <div
      className={`w-full max-h-0 absolute z-10 inset-x-0 p-4 rounded-b-2xl gap-2 lg:gap-4 flex flex-col justify-center lg:flex-row items-center md:w-auto lg:static font-semibold bg-white transition-all duration-300 lg:h-full lg:max-h-full lg:opacity-100 ${
        isOpen ? "top-full max-h-96 opacity-100" : "-top-96 opacity-0 lg:opacity-100 lg:top-0"
      }`}
    >
      {links.map(link => (
        <Link href={link.url} key={link.id} className="md:min-w-max text-primary-500">
          {link.text}
        </Link>
      ))}
      <div className="flex gap-2 justify-center items-center">
        {!isLoading && isAuthenticated
          ? userButtons.map(button => (
              <Link
                href={button.url}
                key={button.id}
                className={`text-center lg:mt-0 py-2 px-4 border border-primary-500 rounded-3xl ${button.bgColor} ${button.textColor} w-40 items-center`}
              >
                {button.text}
              </Link>
            ))
          : buttons.map(button => (
              <Link
                href={button.url}
                key={button.id}
                className={`text-center lg:mt-0 py-2 px-4 border border-primary-500 rounded-3xl ${button.bgColor} ${button.textColor} w-40 items-center`}
              >
                {button.text}
              </Link>
            ))}
      </div>
    </div>
  );
};

export default NavBarContent;
