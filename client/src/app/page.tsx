"use client";
import { Contact, Hero, HomeCards, HomeInfo, Menu, Testimonials } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-10">
      <Hero />
      <HomeCards />
      <HomeInfo />
      <Contact />
      <Testimonials />
    </main>
  );
}
