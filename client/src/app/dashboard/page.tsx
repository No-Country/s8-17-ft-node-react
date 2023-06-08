"use client";

import { Menu, ProtectedRoute, SearchBar, ShowRecipe } from "@/components";
import { useRecipes } from "@/hooks/useRecipes";
import { IconHomeAlt, IconSoup, IconStar } from "@/components/icons";
import Loader from "@/components/Loader";
import {  useState } from "react";
import { IRecipe } from "@/types";

const Dashboard: React.FC<{}> = () => {
  const { getAllRecipesQuery } = useRecipes();
  const allRecipes = getAllRecipesQuery.data;
  const [filter, setFilter] = useState<IRecipe[]>([]);

  // Data para el menú lateral
  const options = [
    {
      id: 1,
      url: "/dashboard",
      text: "Home",
      icon: <IconHomeAlt />,
      activeColor: "secondary-500",
      inactiveColor: "light"
    },
    {
      id: 2,
      url: "/recipesfav",
      text: "Favorites",
      icon: <IconStar />,
      activeColor: "secondary-500",
      inactiveColor: "light"
    },
    {
      id: 3,
      url: "/generator",
      text: "Create",
      icon: <IconSoup />,
      activeColor: "secondary-500",
      inactiveColor: "light"
    }
  ];

  return (
    <ProtectedRoute>
      <main className="w-full min-h-screen flex flex-wrap md:flex-nowrap justify-around gap-7 px-4 py-[38px]">
        <div className="w-full px-4 lg:w-auto">
          <Menu options={options} />
        </div>
        <div className="w-full flex flex-col items-center gap-4">
          <SearchBar setFilter={setFilter} />
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-7 px-4">
            {getAllRecipesQuery.isLoading ? (
              <Loader type="gif" />
            ) : filter.length > 0 ? (
              filter?.map(recipe => (
                <div key={recipe.id} className="relative">
                  <ShowRecipe recipe={recipe} />
                </div>
              ))
            ) : (
              allRecipes?.map(recipe => (
                <div key={recipe.id} className="relative">
                  <ShowRecipe recipe={recipe} />
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
};

export default Dashboard;
