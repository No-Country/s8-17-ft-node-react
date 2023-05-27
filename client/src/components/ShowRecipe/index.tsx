"use client";

import Image from "next/image";
import { FC, useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { IRecipe } from "@/types";
import { useRecipes } from "@/hooks/useRecipes";

interface ShowRecipeProps {
  recipe: IRecipe;
}

const ShowRecipe: FC<ShowRecipeProps> = ({ recipe }) => {
  const [isIconActive, setIsIconActive] = useState(true);
  const { addFavoriteMutation, deleteFavoriteMutation } = useRecipes();

  const toggleIconActive = () => {
    setIsIconActive(prevState => !prevState);

    if (isIconActive) {
      // Si el icono estaba activo, se elimina la receta de favoritos
      deleteFavoriteMutation.mutate(recipe.id);
    } else {
      // Si el icono no estaba activo, se agrega la receta a favoritos
      addFavoriteMutation.mutate(recipe.id);
    }
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

export default ShowRecipe;
