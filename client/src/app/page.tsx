"use client";
import { Hero, HomeCards, HomeInfo } from "@/components";
import { profile } from "@/backend";
import { useEffect } from "react";

export default function Home() {
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  useEffect(() => {
    profile(token);
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-10">
      <Hero />
      <HomeCards />
      <HomeInfo />
    </main>
  );
}
