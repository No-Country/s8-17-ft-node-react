import { Ref } from "@typegoose/typegoose";
import { Category } from "../models/category.model";
import { Diet } from "../models/diet.model";

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard"
}

export enum PaymentStatus {
  CREATED = "created",
  PENDING = "pending",
  SUCCEEDED = "succeeded",
  FAILED = "failed",
  CANCELED = "canceled"
}

export enum UserRoles {
  ADMIN = "admin",
  FREE = "free",
  SEMI_CHEF = "semi_chef",
  MASTER_CHEF = "master_chef"
}

export interface RecipeInterface {
  ingredients: string[];
  difficulty: Difficulty;
  categories: Ref<Category>[];
  diets: Ref<Diet>[];
}

export interface NutritionalValues {
  of100g: {
    calories: number;
    fat: number;
    carbohydrates: number;
    protein: number;
    cholesterol: number;
  };
  ofPortion: {
    calories: number;
    fat: number;
    carbohydrates: number;
    protein: number;
    cholesterol: number;
  };
}
