"use client";

import Image from "next/image";
import { FC, useState } from "react";
import { IconStar, IconStarFill } from "@/components/icons";
import { IRecipe } from "@/types";
import { useRecipes } from "@/hooks/useRecipes";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

interface ShowRecipeProps {
  recipe: IRecipe;
}

const ShowRecipe: FC<ShowRecipeProps> = ({ recipe }) => {
  const { addFavoriteMutation } = useRecipes();

  const [isFavorite, setIsFavorite] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleFavorite = () => {
    if (isFavorite) {
      toast.success("Item has already been added to your favorites");
    } else {
      addFavoriteMutation.mutate(recipe.id);
      setIsFavorite(true);
      toast.success("Added to favorites");
    }
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section
      className={`relative rounded-lg shadow-custom overflow-hidden ${
        isExpanded ? "h-auto" : "h-96"
      }`}
    >
      <Link href={`/recipe/${recipe.id}`}>
        <div>
          <Image
            className="w-full"
            src={recipe.images[0]}
            alt={recipe.name}
            width={270}
            height={135}
          />
          <h1 className="px-4 pt-4">
            <b>{recipe.name}</b>
          </h1>
          <p className="px-4 py-4 text-justify">
            {isExpanded ? recipe.description : `${recipe.description.slice(0, 100)}...`}
          </p>
          {recipe.description.length > 100 && (
            <button className="pl-4 text-primary-500 hover:underline" onClick={handleToggleExpand}>
              {isExpanded ? "Ver menos" : "Ver más"}
            </button>
          )}
        </div>
      </Link>
      <div
        className="text-2xl absolute top-4 right-4 text-primary-500 cursor-pointer"
        onClick={toggleFavorite}
      >
        {isFavorite ? <IconStarFill /> : <IconStar />}
      </div>
      <Toaster position="top-center" />
    </section>
  );
};

export default ShowRecipe;
