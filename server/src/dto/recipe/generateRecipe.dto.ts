import { IsNotEmpty, IsString, IsEnum, IsArray, IsOptional } from "class-validator";
import { Difficulty } from "../../utils/types";

export class GenerateRecipeDto {
  @IsNotEmpty()
  @IsString({ each: true })
  ingredients: string[];

  @IsOptional()
  @IsArray()
  alerts: string[];

  @IsOptional()
  @IsString()
  flavour?: string;

  @IsOptional()
  favorites?: string[];

  @IsNotEmpty()
  @IsString({ each: true })
  diets: string[];

  @IsNotEmpty()
  @IsString({ each: true })
  categories: string[];

  @IsEnum(Difficulty)
  difficulty: Difficulty;
}
