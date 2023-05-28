"use client";

import React from "react";
import { Menu, ShowRecipe } from "@/components";
import { useRecipes } from "@/hooks/useRecipes";
import Image from "next/image";
import { BiHomeAlt } from "react-icons/bi";
import { TbSoup } from "react-icons/tb";
import { BsStar } from "react-icons/bs";

const Dashboard: React.FC = () => {
  const { getAllRecipesQuery } = useRecipes();
  const allRecipes = getAllRecipesQuery.data;

  const options = [
    { id: 1, url: "/dashboard", text: "Home", icon: <BiHomeAlt /> },
    { id: 2, url: "/recipesfav", text: "Favorites", icon: <BsStar /> },
    { id: 3, url: "/generator", text: "Create", icon: <TbSoup /> }
  ];

  return (
    <main className="w-full h-full flex flex-wrap md:flex-nowrap justify-around gap-7 px-4 py-[38px]">
      <div>
        <Menu options={options} />
      </div>
      <div className="w-screen grid grid-cols-1 md:grid-cols-3 gap-7 px-4">
        {getAllRecipesQuery.isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/recipes/loading_gif.gif" alt="loading" width={256} height={256} />
          </div>
        ) : (
          allRecipes?.map(recipe => (
            <div key={recipe.id} className="relative">
              <ShowRecipe recipe={recipe} />
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default Dashboard;
