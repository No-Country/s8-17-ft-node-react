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

const ShowRecipeFav: FC<ShowRecipeProps> = ({ recipe }) => {
  const { addFavoriteMutation, deleteFavoriteMutation } = useRecipes();

  const [isIconActive, setIsIconActive] = useState(true);

  const [isDeleting, setIsDeleting] = useState(false);

  const toggleFavorite = () => {
    if (isIconActive) {
      deleteFavoriteMutation.mutate(recipe.id);
      toast.success("Removed from favorites");
    } else {
      addFavoriteMutation.mutate(recipe.id);
      toast.success("Added to favorites");
    }
  };

  const toggleIconActive = () => {
    if (isIconActive) {
      setIsDeleting(true);
      return;
    }
    toggleFavorite();
  };

  const confirmDelete = () => {
    setIsDeleting(false);
    toggleFavorite();
  };

  const cancelDelete = () => {
    setIsDeleting(false);
  };

  return (
    <section className="relative rounded-lg shadow-custom overflow-hidden">
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
          <p className="px-4 py-4 text-justify">{recipe.description}</p>
        </div>
      </Link>
      {isIconActive ? (
        <IconStarFill
          className="text-[2rem] absolute top-4 right-4 text-primary-500 cursor-pointer"
          onClick={toggleIconActive}
        />
      ) : (
        <IconStar
          className="text-[2rem] absolute top-4 right-4 text-primary-500 cursor-pointer"
          onClick={toggleIconActive}
        />
      )}
      {isDeleting && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg text-center m-4 py-4 shadow-custom">
            <p>Are you sure you want to delete this bookmark?</p>
            <div className="mt-4">
              <button className="text-primary-500 mr-2 font-semibold" onClick={cancelDelete}>
                Cancel
              </button>
              <button className="text-secondary-500 font-semibold" onClick={confirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <Toaster position="top-center" />
    </section>
  );
};

export default ShowRecipeFav;
