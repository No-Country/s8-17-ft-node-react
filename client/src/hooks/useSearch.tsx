import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { IRecipe, IRecipes, ISearch } from "@/types";
import { checkSession } from "@/utils/checkSession";

// URL base de la API desde la variable de entorno en el frontend .env.local
const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

const token = checkSession();

export const recipesSearch = async (searchParams: ISearch): Promise<IRecipes> => {
  const response = await axios.post(`${baseUrl}/api/recipe/search`, searchParams, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  if (response.status === 401) {
    throw new Error("Not authorized");
  }

  const foundRecipes = response.data;

  return foundRecipes;
};

export function useSearch(searchParams: ISearch) {
  // Obtener el token de sesión del usuario
  if (searchParams.difficulty?.length === 0) delete searchParams.difficulty;
  // Query para obtener las recetas
  const getSearchedRecipes = useQuery<IRecipes, Error>(["foundRecipes", searchParams], async () => {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Agrega un retraso de 1 segundo

    return recipesSearch(searchParams);
  });

  return {
    getSearchedRecipes
  };
}
