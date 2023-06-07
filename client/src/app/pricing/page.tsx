"use client";
import { getAllSubscriptions, getCheckOut } from "@/backend/pricing";
import { ProtectedRoute } from "@/components";
import IconCheckCircle from "@/components/icons/CheckCircle";

import TablePlan from "@/components/TablePlan";
import { useAuth } from "@/hooks/useAuth";
import { alerts } from "@/utils/alert";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Login from "../login/page";

export default function Pricing() {
  const { data } = useQuery(["prices"], getAllSubscriptions);
  const { role } = useAuth();

  const roleActive = role.split("_").join(" ");

  const dataPayment = data?.data;

  const [plan, setPlan] = useState("free");

  const handlePlan = (e: any) => {
    const name = e.target.textContent.split(" ")[1];
    setPlan(name);
    window.scroll({
      top: 500,
      behavior: "smooth"
    });
  };

  const { mutate } = useMutation(["checkout"], getCheckOut, {
    onError: (error: any) => {
      if (error) {
        alerts({
          width: 500,
          title: `${error.response.data.errorMessage}`,
          icon: "error"
        });
      }
    }
  });

  const handlePayment = (e: any) => {
    mutate(e.target.value);
  };

  return (
    <ProtectedRoute fallback={<Login />}>
      <main className="w-full h-full flex flex-col items-center justify-center max-lg:h-[150vh] max-sm:h-[250vh]">
        <section className="w-full h-[20vh] flex flex-col items-center justify-center">
          <h1 className="text-[60px] font-bold max-lg:text-[4em] max-md:text-[3em] max-sm:text-[2em]">
            The kitchen prices
          </h1>
          <h3 className="text-[40px] font-medium max-lg:text-[2em] max-md:text-[1.5em] max-sm:text-[0.8em]">
            Discover the features you unlock with each level
          </h3>
          <h4 className="mt-5 text-2xl">Your subscription is: {roleActive}</h4>
        </section>
        <section className="w-[80%] h-[70vh] flex items-center justify-around max-lg:w-[90%] max-sm:flex-col max-sm:h-[100%] max-sm:gap-8">
          <div className="w-[30%] h-[80%] flex flex-col items-center justify-between border border-1 rounded-[10px] max-lg:h-[70%] max-md:h-[60%] max-sm:w-[90%]">
            <div className="w-[100%] h-[20%] flex items-center justify-center bg-[#69CC75] rounded-t-[10px]">
              <h1 className="text-[#FFF] font-bold text-[2em] max-lg:text-[1.5em] max-md:text-[1em]">
                Free
              </h1>
            </div>
            <div className="h-[50%] flex font-medium">
              <h1 className="text-[100px] font-medium max-lg:text-[80px] max-md:text-[60px] max-sm:text-[40px]">
                $
              </h1>
              <h1 className="text-[150px] h-[100%] m-0 font-medium max-lg:text-[130px] max-md:text-[110px] max-sm:text-[90px]">
                0
              </h1>
            </div>
            <button className="w-[50%] h-[50px] p-3 rounded-[32px] mb-5 border-2 text-[#69CC75] max-lg:w-[70%] max-md:p-1 max-md:w-[90%] max-md:text-[12px] max-sm:p-1 max-sm:w-[60%] max-sm:text-[20px]">
              Get started
            </button>
            <h3 onClick={handlePlan} className="w-[100%] p-2 m-0 text 2xl text-[#69CC75]">
              The free plan
            </h3>
          </div>
          {dataPayment?.map((e: any, i: number) => (
            <div
              key={i}
              className="w-[30%] h-[80%] flex flex-col items-center justify-between border border-1 rounded-[10px] max-lg:h-[70%] max-md:h-[60%]  max-sm:w-[90%]"
            >
              <div
                className={`w-[100%] h-[20%] flex items-center justify-center ${
                  e.name === "Semi Chef" ? "bg-[#49A3FA]" : "bg-[#EF47A0]"
                } rounded-t-[10px]`}
              >
                <h1 className="text-[#FFF] font-bold text-[2em] max-lg:text-[1.5em] max-lg:text-[#000] max-md:text-[1em] max-sm:text-[1.5em]">
                  {e.name}
                </h1>
              </div>
              <div className="h-[50%] flex">
                <h1 className="text-[100px] font-medium max-lg:text-[80px] max-md:text-[60px] max-sm:text-[40px]">
                  $
                </h1>
                <h1 className="text-[150px] h-[100%] m-0 font-medium max-lg:text-[130px] max-md:text-[110px] max-sm:text-[90px]">
                  {e.price / 100}
                </h1>
              </div>
              <button
                value={e.id}
                className={`w-[50%] h-[50px] p-3 rounded-[32px] mb-5 border-2 ${
                  e.name === "Semi Chef" ? "text-[#49A3FA]" : "text-[#EF47A0]"
                } max-lg:w-[70%] max-md:p-1 max-md:w-[90%] max-md:text-[12px] max-sm:p-1 max-sm:w-[60%] max-sm:text-[20px]`}
                onClick={handlePayment}
              >
                Get started
              </button>
              {e.name === "Semi Chef" ? (
                <h3 onClick={handlePlan} className="w-[100%] p-2 m-0 text 2xl  text-[#49A3FA]">
                  The semichef plan
                </h3>
              ) : (
                <h3 onClick={handlePlan} className="w-[100%] p-2 m-0 text 2xl text-[#EF47A0]">
                  The chef plan
                </h3>
              )}
            </div>
          ))}
        </section>
        <div className="w-[100%] flex items-center justify-center mb-5 max-sm:mt-5">
          <TablePlan plan={plan} />
        </div>
      </main>
    </ProtectedRoute>
  );
}
