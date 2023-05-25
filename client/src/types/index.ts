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

export interface IRecipe {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  steps: string[];
  time: Time;
  portions: number;
  alerts: any[];
  diet: any[];
  difficulty: string;
  category: string[];
  image: string;
  nutritionalValue: NutritionalValue;
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
  sugar: number;
  fiber: number;
  salt: number;
}

export interface Time {
  preparation: number;
  cooking: number;
  rest: number;
  total: number;
}

export interface Recipes {
  ingredient: [];
  diets: [];
  categories: [];
  difficulty: any;
}
