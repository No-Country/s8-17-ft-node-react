import { RecipeCard } from "@/components";
import React from "react";

const Recipe = ({ params }: { params: { recipeId: string } }) => {
  return (
    <main className="flex flex-col min-h-screen flex-center">
      <RecipeCard recipeId={params.recipeId} />
    </main>
  );
};

export default Recipe;