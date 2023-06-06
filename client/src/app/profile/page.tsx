"use client";

import { LoadImageUser, ProfileUser, ProtectedRoute } from "@/components";
import { useRouter } from "next/navigation";
import React from "react";
import { IconArrowLeftCircle } from "@/components/icons";
import Login from "../login/page";

const PageProfile = () => {
  const router = useRouter();

  return (
    <ProtectedRoute fallback={<Login />}>
      <main className="relative flex flex-col items-center min-h-screen justify-around gap-10 py-4 px-4">
        <div>
          <button
            className="absolute text-primary-500 top-4 left-4 mb-6"
            onClick={() => router.back()}
          >
            <IconArrowLeftCircle className="font-bold text-5xl rounded-2xl" />
          </button>
        </div>
        <LoadImageUser />
        <ProfileUser />
      </main>
    </ProtectedRoute>
  );
};

export default PageProfile;
