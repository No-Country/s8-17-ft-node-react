import { getRecipeById } from "@/backend";
import { useAuth } from "@/hooks/useAuth";
import { checkSession } from "@/utils/checkSession";
import { IRecipe, UserProfile } from "@/types";

export const getRecipe = async ({
  recipeId
}: {
  recipeId: string;
}) => {
  const token = checkSession();
  const recipe = await getRecipeById({ token, recipeId });
  if (!Object.values(recipe)) return null;
  return recipe;
};

// export const getAllRecipe = async () => { }