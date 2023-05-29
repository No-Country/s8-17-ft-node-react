"use client";

import { LoadImageUser, ProfileUser } from "@/components";
import { useRouter } from "next/navigation";
import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";

const PageProfile = () => {
  const router = useRouter();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-around gap-10 py-4 px-4">
      <button
        className="text-primary-500 absolute top-12 left-20 z-40 md:absolute md:top-4 md:left-4"
        onClick={() => router.back()}
      >
        <BsArrowLeftCircle className="bg-white font-bold text-5xl rounded-full" />
      </button>
      <LoadImageUser />
      <ProfileUser />
    </main>
  );
};

export default PageProfile;
