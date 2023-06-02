"use client";
import { getAllSubscriptions } from "@/backend/pricing";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Pricing() {
  const { data } = useQuery(["prices"], getAllSubscriptions);

  console.log(data);

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      <section className="w-full h-[20vh] flex flex-col items-center justify-center">
        <h1 className="text-[60px] font-bold">The kitchen prices</h1>
        <h3 className="text-[40px] font-medium">
          Discover the features you unlock with each level
        </h3>
      </section>
      <section className="w-[80%] flex items-center justify-around h-[70vh]">
        <div className="w-[30%] h-[80%] flex flex-col items-center justify-between border border-1 rounded-[10px]">
          <div className="w-[100%] h-[20%] flex items-center justify-center bg-[#69CC75] rounded-t-[10px]">
            <h1 className="text 3xl text-[#FFF] font-bold text-[48px]">Free</h1>
          </div>
          <div className="h-[50%] flex font-medium">
            <h1 className="text-[100px]">$</h1>
            <h1 className="text-[150px] h-[100%] m-0 font-medium">0</h1>
          </div>
          <button className="w-[50%] h-[50px] p-3 rounded-[32px] mb-5 border-2 text-[#69CC75]">
            Get started
          </button>
        </div>
        <div className="w-[30%] h-[80%] flex flex-col items-center justify-between border border-1 rounded-[10px]">
          <div className="w-[100%] h-[20%] flex items-center justify-center bg-[#49A3FA] rounded-t-[10px]">
            <h1 className="text 3xl text-[#FFF] font-bold text-[48px]">Semichef</h1>
          </div>
          <div className="h-[50%] flex">
            <h1 className="text-[100px] font-medium">$</h1>
            <h1 className="text-[150px] h-[100%] m-0 font-medium">2</h1>
          </div>
          <button className="w-[50%] h-[50px] p-3 rounded-[32px] mb-5 border-2 text-[#49A3FA]">
            Get started
          </button>
        </div>
        <div className="w-[30%] h-[80%] flex flex-col items-center justify-between border border-1 rounded-[10px]">
          <div className="w-[100%] h-[20%] flex items-center justify-center bg-[#EF47A0] rounded-t-[10px]">
            <h1 className="text 3xl text-[#FFF] font-bold text-[48px]">MasterChef</h1>
          </div>
          <div className="h-[50%] flex">
            <h1 className="text-[100px] font-medium">$</h1>
            <h1 className="text-[150px] h-[100%] m-0 font-medium">5</h1>
          </div>
          <button className="w-[50%] h-[50px] p-3 rounded-[32px] mb-5 border-2 text-[#EF47A0]">
            Get started
          </button>
        </div>
      </section>
      <div className="w-[80%] flex items-start justify-around">
        <h3 className="w-[30%] ml-5 text 2xl flex items-start text-[#69CC75]">The free plan</h3>
        <h3 className="w-[30%] ml-5 text 2xl flex items-start text-[#49A3FA]">The semichef plan</h3>
        <h3 className="w-[30%] ml-5 text 2xl flex items-start text-[#EF47A0]">The chef plan</h3>
      </div>
      <section></section>
    </main>
  );
}
