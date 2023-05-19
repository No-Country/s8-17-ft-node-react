"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function index() {
  const router = useRouter();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  console.log(token);

  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push("/");
  //   }, 3000);
  // }, []);

  return <div>Redirecting...</div>;
}
