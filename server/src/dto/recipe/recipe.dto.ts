import {
  IsNotEmpty,
  IsString,
  IsEnum,
  IsArray,
  ValidateNested,
  IsNumber,
  IsOptional
} from "class-validator";
import { Difficulty } from "../../utils/types";
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

export class RecipeDto {
  @IsString()
  @IsNotEmpty({
    message: "Name is required"
  })
  name: string;

  @IsOptional()
  images?: string[];

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
  diets: string[];


  @IsArray()
  @IsNotEmpty({
    message: "Categories is required"
  })
  @IsArray()
  categories: string[] | {}[];

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
