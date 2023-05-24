import { Ref } from "@typegoose/typegoose";
import { Category } from "../models/category.model";
import { Diet } from "../models/diet.model";

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard"
}

export interface RecipeIterface {
  ingredients: string[];
  difficulty: Difficulty;
  categories: Ref<Category>[];
  diets: Ref<Diet>[];
}
