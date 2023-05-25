import { IRecipe, IRecipes, Recipes, UserAuth, UserRegister } from "@/types";
import axios from "axios";

// const baseUrl = "http://localhost:3000";
const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;


export const registerUser = async (newUser: UserRegister): Promise<any> => {
  const response = await axios.post(`${baseUrl}/api/auth/register`, {
    name: newUser.name,
    email: newUser.email,
    password: newUser.password
  });

  const { token } = response.data;

  return token;
};

export const loginUser = async (user: UserAuth): Promise<any> => {
  const response = await axios.post(`${baseUrl}/api/auth/login`, {
    email: user.email,
    password: user.password
  });

  const { token } = response.data;

  return token;
};

export const google = async (): Promise<any> => {
  const response = await axios.get(`${baseUrl}/api/auth/google`);
  return response;
};

export const getProfile = async (token: null | string): Promise<any> => {
  const response = await axios.get(`${baseUrl}/api/auth/profile`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (response.status === 401) {
    throw new Error("Not authorized");
  }

  const profile = response.data;

  return profile;

};

export const createRecipe = async (data: Recipes): Promise<any> => {
  const loggedUserJSON = window.localStorage.getItem("loggedUser");
  let user = null;
  if (loggedUserJSON) {
    user = JSON.parse(loggedUserJSON);
  }

  const response = await axios.post(
    `${baseUrl}/api/recipe/generate`,
    {
      ingredients: data.ingredient,
      diets: data.diets,
      categories: data.categories,
      difficulty: data.difficulty
    },
    {
      headers: {
        Authorization: `Bearer ${user?.token}`
      }
    }
  );

  return response;
};

export const getRecipeById = async ({
  token,
  recipeId
}: {
  token: null | string;
  recipeId: string
}): Promise<IRecipe> => {
  // http://localhost:3001/api/recipe/id/57fc7126-3881-4ae8-a306-b47ce760ad7f
  const response = await axios.get(`${baseUrl}/api/recipe/id/${recipeId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  if (response.status === 401) {
    throw new Error("Not authorized");
  }

  const foundRecipe = response.data;

  return foundRecipe;
}

export const getAllRecipesFromUser = async ({ token }: { token: string }): Promise<IRecipes> => {
  // http://localhost:3001/api/recipe/create
  const response = await axios.get(`${baseUrl}/api/recipe/create`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  if (response.status === 401) {
    throw new Error("Not authorized");
  }

  const allRecipesFromUser = response.data

  return allRecipesFromUser
}