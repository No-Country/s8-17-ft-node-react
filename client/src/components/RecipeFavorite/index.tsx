"use client";

import Image from "next/image";
import { FC, useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { IRecipe } from "@/types";

interface RecipeFavoriteProps {
  recipe: IRecipe;
  favoriteRecipes: IRecipe[];
}

const RecipeFavorite: FC<RecipeFavoriteProps> = ({ recipe, favoriteRecipes }) => {
  const [isIconActive, setIsIconActive] = useState(true);

  const toggleIconActive = () => {
    setIsIconActive(prevState => !prevState);
  };

  return (
    <div className="relative w-270 h-240 md:w-360 md:h-320 lg:w-450 lg:h-400 rounded-lg shadow-[0px_0px_8px_1px_rgba(0,0,0,0.25)] overflow-hidden">
      <Image className="w-full" src={recipe.image} alt={recipe.name} width={270} height={135} />
      <h1 className="px-4 pt-4">
        <b>{recipe.name}</b>
      </h1>
      <p className="px-4 py-4 text-justify">{recipe.description}</p>

      {isIconActive ? (
        <BsStarFill
          className="text-[2rem] absolute top-4 right-4 text-orange-500"
          onClick={toggleIconActive}
        />
      ) : (
        <BsStar
          className="text-[2rem] absolute top-4 right-4 text-orange-500"
          onClick={toggleIconActive}
        />
      )}
    </div>
  );
};

export default RecipeFavorite;
