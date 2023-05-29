"use client";

import React, { useEffect } from "react";
import { Menu, ShowRecipe } from "@/components";
import { useRecipes } from "@/hooks/useRecipes";
import Image from "next/image";
import { BiHomeAlt } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import { TbSoup } from "react-icons/tb";

const RecipesFav = () => {
  const {
    getAllFavoriteRecipesQuery: { data: favoriteRecipes },
    getAllFavoriteRecipesQuery
  } = useRecipes();

  useEffect(() => {
    getAllFavoriteRecipesQuery.refetch();
  }, [getAllFavoriteRecipesQuery]);

  // Data para el menú lateral
  const options = [
    {
      id: 1,
      url: "/dashboard",
      text: "Home",
      icon: <BiHomeAlt />,
      activeColor: "secondary-500",
      inactiveColor: "light"
    },
    {
      id: 2,
      url: "/recipesfav",
      text: "Favorites",
      icon: <BsStar />,
      activeColor: "secondary-500",
      inactiveColor: "light"
    },
    {
      id: 3,
      url: "/generator",
      text: "Create",
      icon: <TbSoup />,
      activeColor: "secondary-500",
      inactiveColor: "light"
    }
  ];

  return (
    <main className="w-full h-full flex flex-wrap md:flex-nowrap justify-around gap-7 px-4 py-[38px]">
      <div className="w-full px-4 lg:w-auto">
        <Menu options={options} />
      </div>
      <div className="w-screen grid grid-cols-1 md:grid-cols-3 gap-7 px-4">
        {getAllFavoriteRecipesQuery.isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/recipes/loading_gif.gif" alt="loading" width={256} height={256} />
          </div>
        ) : (
          favoriteRecipes?.map(recipe => (
            <div key={recipe.id} className="relative">
              <ShowRecipe recipe={recipe} />
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default RecipesFav;
