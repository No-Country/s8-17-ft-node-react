"use client";

import React, { useEffect, useState } from "react";
import { Menu, ShowRecipe } from "@/components";
import { IRecipe } from "@/types";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import { getAllRecipesFromUser } from "@/backend";

const RecipesFav = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState<IRecipe[]>([]);

  const token = Cookies.get("USER_TOKEN");

  const { mutate } = useMutation(getAllRecipesFromUser, {
    onSuccess: response => {
      setFavoriteRecipes(response);
    },
    onError: error => {
      console.error(error);
    }
  });

  useEffect(() => {
    if (token) {
      mutate({ token });
    }
  }, [token, mutate]);

  return (
    <main className="w-full h-full flex flex-wrap md:flex-nowrap justify-around gap-7 px-4 py-[38px]">
      <div>
        <Menu href={"Favorite"} />
      </div>
      <div className="w-screen grid grid-cols-1 md:grid-cols-3 gap-7 px-4">
        {favoriteRecipes?.map(recipe => (
          <ShowRecipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
};

export default RecipesFav;
