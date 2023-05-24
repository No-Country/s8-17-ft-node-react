import { LoadImageUser, ProfileUser } from "@/components";
import React from "react";

const PageProfile = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around gap-10">
      <LoadImageUser />
      <ProfileUser />
    </main>
  );
};

export default PageProfile;
