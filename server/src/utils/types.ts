import { Ref } from "@typegoose/typegoose";
import { Category } from "src/models/category.model";
import { Diet } from "src/models/diet.model";
import { Recipe } from "src/models/recipe.model";

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard"
}



export interface RecipeIterface{
  ingredients: string[];
  difficulty: Difficulty;
  categories: Ref<Category>[];
  diets: Ref<Diet>[];
 
}
