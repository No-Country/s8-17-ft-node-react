import { Recipes } from "@/types";
import axios from "axios";

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

export const getDiets = async (): Promise<any> => {
  const response = await axios.get(`${baseUrl}/api/diet`);
  console.log(response);
  return response;
};

export const createRecipe = async (data: Recipes): Promise<any> => {
  const loggedUserJSON = window.localStorage.getItem("loggedUser");
  let user = null;
  if (loggedUserJSON) {
    user = JSON.parse(loggedUserJSON);
  }

  // const response = await axios.post(
  //   `${baseUrl}/api/recipe/generate`,
  //   {
  //     ingredients: data.ingredient,
  //     diets: data.diets,
  //     categories: data.categories,
  //     difficulty: data.difficulty
  //   },
  //   {
  //     headers: {
  //       Authorization: `Bearer ${user?.token}`
  //     }
  //   }
  // );

  // return response;
};

// export const getRecipeById = async ({
//   token,
//   recipeId
// }: {
//   token: null | string;
//   recipeId: string;
// }): Promise<IRecipe> => {
//   // http://localhost:3001/api/recipe/id/57fc7126-3881-4ae8-a306-b47ce760ad7f
//   const response = await axios.get(`${baseUrl}/api/recipe/id/${recipeId}`, {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   });
//   if (response.status === 401) {
//     throw new Error("Not authorized");
//   }

//   const foundRecipe = response.data;

//   return foundRecipe;
// };
