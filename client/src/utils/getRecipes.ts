import { getAllRecipes } from "@/backend";
import { useAuth } from "@/hooks/useAuth";
import { checkSession } from "@/utils/checkSession";
import { IRecipe, UserProfile } from "@/types";

export const getRecipes = async ({
  recipeId,
  user
}: {
  recipeId?: string;
  user: UserProfile | undefined;
}) => {
  const token = checkSession();
  const allRecipesFromUser = await getAllRecipes({ userId: user?._id!, token });

  if (recipeId) {
    const foundRecipe = allRecipesFromUser.find(recipe => recipe.id === recipeId)!;
    if (!Object.values(foundRecipe)) return null;

    return foundRecipe;
  }
  if (allRecipesFromUser.length === 0) return null;
  return allRecipesFromUser
};

