"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Hero } from "@/components";
import { profile } from "@/api";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
    </main>
  );
}
