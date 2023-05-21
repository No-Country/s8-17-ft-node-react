"use client";
import { profile } from "@/backend";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FiLogOut } from "react-icons/fi";

export default function Navbar() {
  // const { data } = useQuery(["user"], profile);

  const handleLogOut = () => {
    window.localStorage.removeItem("loggedUser");
    window.location.reload();
  };

  return (
    <header className="w-full h-[97px] flex justify-between items-center px-8">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={209} height={38} />
      </Link>
      <nav className="flex space-x-10">
        <div className="flex items-center space-x-10 text-primary-500 font-semibold">
          <Link href="/">
            <span>Home</span>
          </Link>
          <Link href="/about">
            <span>About Us</span>
          </Link>
          <Link href="/contact">
            <span>Contact</span>
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/login">
            <button className="text-primary-500 font-semibold border border-primary-500 border-solid rounded-full px-4 py-2 bg-white shadow-lg">
              Sign in
            </button>
          </Link>
          <Link href="/register">
            <button className="text-white font-semibold border border-primary-500 border-solid rounded-full px-4 py-2 bg-primary-500 shadow-lg">
              Create Account
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
