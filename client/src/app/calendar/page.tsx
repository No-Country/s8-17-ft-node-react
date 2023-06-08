"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { ProtectedRoute } from "@/components";
import Login from "../login/page";
import { useAuth } from "@/hooks/useAuth";

type Props = {};

export default function Calendar({}: Props) {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const hour = ["BreakFast", "Lunch", "Night Tea", "Dinner"];

  const { user } = useAuth();

  const calendar = user?.weekCalendar.flat(1);

  return (
    <ProtectedRoute>
      <main className="w-full h-screen flex items-end justify-center">
        <div className="h-full w-[30%]">
          <section className="h-[10%] w-full flex items-center justify-center border-4 border-primary-500 rounded-tl-lg border-b-0 border-r-0">
            <Image src="/CookMealLogo.png" alt="" width="200" height="20" />
          </section>
          <section className="h-[90%] w-full grid grid-rows-7 border-4 border-primary-500 rounded-bl-lg border-r-0">
            {days.map((e, i) => (
              <h2
                key={i}
                className="flex items-center justify-center text-center  w-full  font-bold text-2xl"
              >
                {e}
              </h2>
            ))}
          </section>
        </div>

        <div className="h-full w-[60%]">
          <section className="h-[10%] w-full flex items-center justify-around border-4 border-primary-500 rounded-tr-lg border-b-0">
            {hour.map((e, i) => (
              <h2
                key={i}
                className="flex items-center justify-center text-center w-full h-full border-2 border-primary-500 font-bold text-2xl"
              >
                {e}
              </h2>
            ))}
          </section>
          <section className="h-[90%] w-full grid grid-rows-8 grid-cols-4 items-center justify-items-center border-4 border-primary-500 rounded-br-lg">
            {calendar?.map((e: any, i) =>
              e?.id === undefined ? (
                <h2
                  key={i}
                  className={`flex items-center justify-center text-center w-full h-full border-2 border-primary-500 font-bold ${
                    e?.name ? " text-[#fe018a]" : "text-[#000]"
                  }`}
                >
                  {e === null ? "Empty" : e.name}
                </h2>
              ) : (
                <a
                  href={`/recipe/${e?.id}`}
                  key={i}
                  className={`flex items-center justify-center text-center w-full h-full border-2 border-primary-500 font-bold ${
                    e?.name ? " text-[#fe018a]" : "text-[#000]"
                  }`}
                >
                  {e === null ? "Empty" : e.name}
                </a>
              )
            )}
          </section>
        </div>
      </main>
    </ProtectedRoute>
  );
}
