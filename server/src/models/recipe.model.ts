import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { IsNotEmpty, IsString, IsNumber } from "class-validator";
import { v4 as uuidv4 } from "uuid";
import { Category } from "./category.model";
import { Diet } from "./diet.model";
import { User } from "./user.model";
import { Difficulty } from "../utils/types";

interface NutritionalValue {
  of100g: {
    calories: number;
    fat: number;
    carbohydrates: number;
    protein: number;
    cholesterol: number;
    // alcohol: number;
    // fiber: number;
    // sugar: number;
    // salt: number;
  };
  ofPortion: {
    calories: number;
    fat: number;
    carbohydrates: number;
    protein: number;
    cholesterol: number;
    // alcohol: number;
    // fiber: number;
    // sugar: number;
    // salt: number;
  };
}


export class Recipe {
  @prop({
    required: true,
    unique: true,
    default: uuidv4
  })
  id!: string;

  @prop({
    required: true
  })
  @IsNotEmpty()
  @IsString()
  name!: string;

  @prop({
    required: true
  })
  @IsNotEmpty()
  @IsString()
  description!: string;

  @prop({
    required: true
  })
  @IsNotEmpty()
  ingredients!: string[];

  @prop({
    required: true
  })
  @IsNotEmpty()
  steps!: string[];

  @prop({
    required: true
  })
  @IsNotEmpty()
  time!: {
    preparation: number;
    cooking: number;
    total: number;
  };
  
  @prop({
    required: true
  })
  @IsNotEmpty()
  @IsNumber()
  portions!: number;

  @prop({ ref: Category, required: false })
  categories?: Ref<Category>[];

  @prop({ ref: Diet, required: false })
  diets?: Ref<Diet>[];

  @prop({
    required: false
  })
  difficulty?: Difficulty;

  @prop({
    required: false,
    default: () => ["https://res.cloudinary.com/dux8fwhxn/image/upload/v1684989615/cld-sample-4.jpg"]
  })
  images?: string[];

  @prop({
    required: false
  })
  nutritionalValue?: NutritionalValue;


  @prop({
    ref: () => 'User',
    required: false
  })
  createdBy?: Ref<User | any>;


  constructor(partial: Partial<Recipe>) {
    Object.assign(this, partial);
  }

}

const RecipeModel = getModelForClass(Recipe);
export default RecipeModel;
