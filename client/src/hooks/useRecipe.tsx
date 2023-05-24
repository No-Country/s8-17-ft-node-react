import { getAllRecipes } from "@/backend";
import { useAuth } from "@/hooks/useAuth";
import { checkSession } from "@/utils/checkSession";
import { IRecipe } from "@/types";

export const useRecipeById = async (recipeId: string) => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const token = checkSession();
  const allRecipesFromUser = await getAllRecipes({ userID: user?._id!, token });

  const foundRecipe = allRecipesFromUser.find(recipe => recipe.id === recipeId)!;

  return foundRecipe;
};
