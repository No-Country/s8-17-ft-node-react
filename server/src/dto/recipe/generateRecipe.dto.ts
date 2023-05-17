import { IsNotEmpty, IsString, IsEnum } from "class-validator";
import { Difficulty } from "../../utils/types";

export class GenerateRecipeDto {
  @IsNotEmpty()
  @IsString({ each: true })
  ingredients: string[];

  @IsNotEmpty()
  @IsString({ each: true })
  diets: string[];

  @IsNotEmpty()
  @IsString({ each: true })
  categories: string[];

  @IsEnum(Difficulty)
  difficulty: Difficulty;
}
