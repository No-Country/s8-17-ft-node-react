import { IsNotEmpty, IsString, IsEnum, IsArray, ValidateNested, IsNumber } from "class-validator";
import { Difficulty } from "../../utils/types";
import { Ref } from "@typegoose/typegoose";
import { Diet } from "../../models/diet.model";
import { Category } from "../../models/category.model";
import { Type } from "class-transformer";

export class TimeDto {
  @IsNumber()
  preparation: number;

  @IsNumber()
  cooking: number;

  @IsNumber()
  total: number;
}

export class ValuesDto {
  @IsNumber()
  calories: number;

  @IsNumber()
  fat: number;

  @IsNumber()
  carbohydrates: number;

  @IsNumber()
  protein: number;

  @IsNumber()
  cholesterol: number;
}

export class NutritionalValuesDto {
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ValuesDto)
  of100g: ValuesDto;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ValuesDto)
  ofPortion: ValuesDto;
}

export class SaveRecipeDto {
  @IsString()
  @IsNotEmpty({
    message: "Name is required"
  })
  name: string;

  @IsString()
  @IsNotEmpty({
    message: "Description is required"
  })
  description: string;

  @IsArray()
  @IsNotEmpty({
    message: "Steps is required"
  })
  @ValidateNested({ each: true })
  steps: string[];

  @IsArray()
  @IsNotEmpty({
    message: "Ingredients is required"
  })
  @IsString({ each: true })
  ingredients: string[];

  @IsArray()
  @IsNotEmpty({
    message: "Diets is required"
  })
  @ValidateNested({ each: true })
  @Type(() => Diet)
  diets: Ref<Diet>[];

  @IsArray()
  @IsNotEmpty({
    message: "Categories is required"
  })
  @ValidateNested({ each: true })
  @Type(() => Category)
  categories: Ref<Category>[];

  @IsEnum(Difficulty)
  difficulty: Difficulty;

  @IsNotEmpty({
    message: "Time is required"
  })
  @ValidateNested()
  @Type(() => TimeDto)
  time: TimeDto;

  @IsNumber()
  @IsNotEmpty({
    message: "Portions is required"
  })
  portions: number;

  @IsNotEmpty({
    message: "Nutritional values is required"
  })
  @ValidateNested()
  @Type(() => NutritionalValuesDto)
  nutritionalValues: NutritionalValuesDto;
}
