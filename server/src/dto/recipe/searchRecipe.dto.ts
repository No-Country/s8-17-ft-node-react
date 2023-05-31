import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { Difficulty } from "../../utils/types";

export class SearchRecipeDto {
  @IsOptional()
  @IsNumber()
  perPage: number;

  @IsOptional()
  @IsNumber()
  page: number;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  ingredients?: string[];

  @IsOptional()
  @IsString({ each: true })
  diets: string[];

  @IsOptional()
  @IsString({ each: true })
  categories: string[];

  @IsOptional()
  @IsEnum(Difficulty)
  difficulty: Difficulty;
}
