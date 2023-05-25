import { IsNotEmpty, IsString, IsEnum, IsArray, IsOptional } from "class-validator";
import { Difficulty } from "../../utils/types";

export class GenerateRecipeDto {
  @IsNotEmpty()
  @IsString({ each: true })
  ingredients: string[];

  @IsNotEmpty()
  @IsArray()
  alerts: string[];

  // @IsOptional()
  // @IsString()
  // sabor?: string;

  @IsNotEmpty()
  @IsString({ each: true })
  diets: string[];

  @IsNotEmpty()
  @IsString({ each: true })
  categories: string[];

  @IsEnum(Difficulty)
  difficulty: Difficulty;
}
