"use client";
import { useEffect, useState } from "react";
import { Hero } from "@/components";
import { profile } from "@/api";

export default function Home() {
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      profile(user.token);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
    </main>
  );
}
