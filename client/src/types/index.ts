export interface UserAuth {
  email: string;
  password: string;
}

export interface UserRegister extends UserAuth {
  name: string;
}

export interface UserProfile extends UserRegister {
  lastName: string;
  picture: string;
  nationality: string;
  _id?: string;
  id?: string;
}

export interface IRecipes {
  recipes: IRecipe[];
}

export interface IRecipe {
  _id: string;
  name: string;
  description: string;
  ingredients: string[];
  steps: string[];
  time: Time;
  portions: number;
  categories: Category[];
  diets: Category[];
  difficulty: string;
  nutritionalValue: NutritionalValue;
  createdBy: string;
  id: string;
  image: string;
  __v: number;
}

export interface Category {
  _id: string;
  name: string;
  description: string;
  id: string;
  __v: number;
}

export interface NutritionalValue {
  of100g: Of100G;
  ofPortion: Of100G;
}

export interface Of100G {
  calories: number;
  fat: number;
  carbohydrates: number;
  protein: number;
  cholesterol: number;
}

export interface Time {
  preparation: number;
  cooking: number;
  total: number;
}

export interface Recipes {
  ingredient: [];
  diets: [];
  categories: [];
  difficulty: any;
}
