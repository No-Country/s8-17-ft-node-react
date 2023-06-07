import React from "react";
import Image from "next/image";
import { ProtectedRoute } from "@/components";
import Login from "../login/page";

type Props = {};

export default function Calendar({}: Props) {
  const days = ["Monday", "Thurday", "Wednesday", "Tuesday", "Friday", "Saturday", "Sunday"];
  const hour = ["BreakFast", "Lunch", "Night Tea", "Dinner"];
  const food = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a"
  ];
  return (
    <ProtectedRoute fallback={<Login />}>
      <main className="w-full h-screen flex items-end justify-center">
        <div className="h-full w-[30%]">
          <section className="h-[10%] w-full flex items-center justify-center border-4 border-primary-500 rounded-tl-lg border-b-0 border-r-0">
            <Image src="/CookMealLogo.png" alt="" width="200" height="20" />
          </section>
          <section className="h-[90%] w-full grid grid-rows-7 border-4 border-primary-500 rounded-bl-lg border-r-0">
            {days.map((e, i) => (
              <h2
                key={i}
                className="flex items-center justify-center text-center  w-full border-2 border-primary-500 border-r-0  font-bold text-2xl"
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
          <section className="h-[90%] w-full grid grid-rows-7 grid-cols-4 items-center justify-items-center border-4 border-primary-500 rounded-br-lg">
            {food.map((e, i) => (
              <h2
                key={i}
                className="flex items-center justify-center text-center w-full h-full border-2 border-primary-500"
              >
                {e}
              </h2>
            ))}
          </section>
        </div>
      </main>
    </ProtectedRoute>
  );
}
