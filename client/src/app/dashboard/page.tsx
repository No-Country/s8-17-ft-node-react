"use client";

import React, { useEffect, useState } from "react";
import { Menu, ShowRecipe } from "@/components";
import { IRecipe } from "@/types";
import { getAllRecipes } from "@/backend";

const Dashboard = () => {
  const [allRecipes, setAllRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const recipes = await getAllRecipes();
        setAllRecipes(recipes);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipes();
  }, []);

  console.log(allRecipes);

  return (
    <main className="w-full h-full flex flex-wrap md:flex-nowrap justify-around gap-7 px-4 py-[38px]">
      <div>
        <Menu href={"dashboard"} />
      </div>
      <div className="w-screen grid grid-cols-1 md:grid-cols-3 gap-7 px-4">
        {allRecipes?.map(recipe => (
          <ShowRecipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
