"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Hero, HomeCards, HomeInfo } from "@/components";
import { profile } from "@/backend";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-10">
      <Hero />
      <HomeCards />
      <HomeInfo />
    </main>
  );
}
