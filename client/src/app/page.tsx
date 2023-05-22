"use client";
import { Hero, HomeCards, HomeInfo } from "@/components";
import { profile } from "@/backend";
import { useEffect } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-10">
      <Hero />
      <HomeCards />
      <HomeInfo />
    </main>
  );
}
