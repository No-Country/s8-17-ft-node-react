"use client";

import { useAuth } from "@/hooks/useAuth";
import { colors, USER_TOKEN } from "@/utils/constants";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { HiLogout } from "react-icons/hi";

export default function Navbar() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  const handleLogOut = () => {
    // window.localStorage.removeItem("loggedUser");
    Cookies.remove(USER_TOKEN, { sameSite: "Lax" });
    router.refresh();
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
  }, []);

  return (
    <header className="w-full h-[97px] flex justify-between items-center px-8">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={209} height={38} />
      </Link>
      <nav className="flex space-x-10">
        <div className="flex items-center space-x-10 text-primary-500 font-semibold">
          <Link href="/">
            <span>Home</span>
          </Link>
          <Link href="/subscribe">
            <span>About Us</span>
          </Link>
          <Link href="/contact">
            <span>Contact</span>
          </Link>
        </div>
        <div className="flex items-center space-x-3">
          {!isLoading && isAuthenticated ? (
            <div className="w-[180px] flex items-center justify-evenly bg-primary-500 text-primary-500 border border-primary-500 p-2 rounded-full">
              <h1 className="text-lg font-bold text-white">Hola {user?.name}</h1>
              <HiLogout onClick={handleLogOut} color={"#FFF"} />
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
