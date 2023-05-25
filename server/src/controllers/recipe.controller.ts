import { Request, Response } from "express";
import { RecipeService } from "../services/recipe.service";
import { GenerateRecipeDto } from "../dto/recipe/generateRecipe.dto";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import OpenAIService, { OpenAIServiceIntance } from "../services/openai.service";
import { Recipe } from "../models/recipe.model";
import { SaveRecipeDto } from "../dto/recipe/saveRecipe.dto";
import { RecipeDto } from "../dto/recipe/recipe.dto";
import { Difficulty } from "../utils/types";

export class RecipeController {
  openAIService: OpenAIServiceIntance;
  constructor(private recipeService: RecipeService) {
    this.openAIService = OpenAIService;
  }

  async generate(req: Request, res: Response): Promise<Response> {
    try {
      const generateRecipeDto = plainToClass(GenerateRecipeDto, req.body);
      const errors = await validate(generateRecipeDto);

      if (errors.length > 0) {
        return res.status(400).json(errors.map(err => err.constraints));
      }

      // const prompt: string = this.generateTemplatePrompt(generateRecipeDto);
      // const recipe : RecipeIterface = await this.openAIService.createRecipe(prompt);
      const defaultResponse: RecipeDto = this.defaultResponse();
      return res.status(200).json({
        recipe: defaultResponse
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async save(req: Request, res: Response): Promise<Response> {
    try {
      // const saveRecipeDto = plainToClass(SaveRecipeDto, req.body.recipe);
      // const errors = await validate(saveRecipeDto);
      // console.log(saveRecipeDto);

      // if (errors.length > 0) {
      //   return res.status(400).json(errors.map(err => err.constraints));
      // }

      await this.recipeService.save(req.body.id, req.body.recipe);
      return res.status(200).json({ message: "The recipe has been saved successfully!" });
    } catch (error: any) {
      if (error.message === "User not found.")
        return res.status(400).json({ errorMessage: "Invalid User ID." });
      return res.status(500).json({ errorMessage: error.message });
    }
  }

  async getFavoriteByUser(req: Request, res: Response): Promise<Response> {
    try {
      const userRecipes: Partial<Recipe>[] = await this.recipeService.getByUserId(
        res.locals.jwtPayload.id
      );
      return res.status(200).json(userRecipes);
    } catch (error: any) {
      if (error.message === "User not found.")
        return res.status(400).json({ errorMessage: "Invalid User ID." });
      return res.status(500).json({ errorMessage: error.message });
    }
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      return res.status(200).json({
        recipes: await this.recipeService.getAll()
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async getCreatedBy(req: Request, res: Response): Promise<Response> {
    try {
      return res.status(200).json({
        recipes: await this.recipeService.getCreatedBy(res.locals.jwtPayload.id)
      });
    } catch (err) {
      console.log(err);

      return res.status(500).json(err);
    }
  }

  async getById(req: Request, res: Response): Promise<Response> {
    try {
      const recipe = await this.recipeService.getById(req.params.id);
      if (!recipe) return res.status(404).json({ message: "Recipe not found" });
      return res.status(200).json(recipe);
    } catch (err: any) {
      return res.status(500).json({
        message: err.message
      });
    }
  }
  private generateTemplatePrompt(data: GenerateRecipeDto): string {
    return `Generate a cooking recipe according to the following parameters:
    - Ingredients: ${data.ingredients}
    - Diets: ${data.diets}
    - Categories: ${data.categories} 
    - Difficulty: ${data.difficulty}

    Output format:
    {
      name: string,
      description: string,
      ingredients: string[],
      steps: string[],
      time: {
        preparation: string,
        cooking: string,
        total: string
      },
      portions: number,
      categories: string[],
      diets: string[],
      difficulty: ${data.difficulty},
      nutritionalValue: {
        of100g: {
          calories: number,
          fat: number,
          carbohydrates: number,
          protein: number,
          cholesterol: number
        },
        ofPortion: {
          calories: number,
          fat: number,
          carbohydrates: number,
          protein: number,
          cholesterol: number
        }
      }
    }`;
  }

  private defaultResponse(): RecipeDto {
    return this.recipeService.getAll()[0];
  }
}
