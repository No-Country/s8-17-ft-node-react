"use client";
import React, { useState } from "react";
import useForm from "@/hooks/useForm";
import { Recipes } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { createRecipe } from "@/backend";
import { useRouter } from "next/navigation";

export default function Generator() {
  const router = useRouter();
  const { form, handleChange } = useForm<Recipes>({
    ingredient: [],
    diets: [],
    categories: [],
    difficulty: 0
  });

  const { mutate } = useMutation(createRecipe, {
    onSuccess: () => {
      router.push("/");
    }
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(form);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-evenly">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Ingredient</label>
        <input type="text" onChange={handleChange} name="ingredient" value={form.ingredient} />
        <label htmlFor="">Diets</label>
        <input type="text" onChange={handleChange} name="diets" value={form.diets} />
        <label htmlFor="">Categories</label>
        <input type="text" onChange={handleChange} name="categories" value={form.categories} />
        <label htmlFor="">Dificulty</label>
        <input type="text" onChange={handleChange} name="difficulty" value={form.difficulty} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
