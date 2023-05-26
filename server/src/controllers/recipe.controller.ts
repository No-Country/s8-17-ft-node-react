import { Request, Response } from "express";
import { RecipeService } from "../services/recipe.service";
import { GenerateRecipeDto } from "../dto/recipe/generateRecipe.dto";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import OpenAIService, { OpenAIServiceIntance } from "../services/openai.service";
import { Recipe } from "../models/recipe.model";
import { RecipeDto } from "../dto/recipe/recipe.dto";
import { User } from "../models/user.model";
import { UserService } from "../services/user.service";

import { RecipeInterface } from "../utils/types";

export class RecipeController {
  openAIService: OpenAIServiceIntance;
  constructor(
    private recipeService: RecipeService,
    private userService: UserService
    ) {
    this.openAIService = OpenAIService;
  }

  async generate(req: Request, res: Response): Promise<Response> {
    try {
      const generateRecipeDto = plainToClass(GenerateRecipeDto, req.body);
      const errors = await validate(generateRecipeDto);

      if (errors.length > 0) {
        return res.status(400).json(errors.map(err => err.constraints));
      }
      const user : User = await this.userService.findById(res.locals.jwtPayload.id);
      if(!user) return res.status(404).json({
        message: "User not found"
      })
      const prompt: string = this.openAIService.generateTemplatePrompt(generateRecipeDto, user);
      const recipe : RecipeDto = await this.openAIService.createRecipe(prompt);
      const recipesaved = await this.recipeService.saveRecipe(recipe, user.id);
      console.log(recipesaved);
      
      // const defaultResponse: RecipeDto = this.defaultResponse();
      return res.status(200).json({
        recipe:recipesaved
      });
    } catch (error:any) {
      console.log(error);
      return res.status(500).json({
        message: error.message
      });
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

  async getFavoriteByUser(_req: Request, res: Response): Promise<Response> {
    try {
      const userRecipes: Partial<Recipe>[] = await this.recipeService.getFavoriteByUser(
        res.locals.jwtPayload.id
      );

      return res.status(200).json(userRecipes);
    } catch (error: any) {
      if (error.message === "User not found.")
        return res.status(400).json({ errorMessage: "Invalid User ID." });
      return res.status(500).json({ errorMessage: error.message });
    }
  }

  async getAll(_req: Request, res: Response): Promise<Response> {
    try {
      return res.status(200).json({
        recipes: await this.recipeService.getAll()
      });
    } catch (error: any) {
      return res.status(500).json({ errorMessage: error.message });
    }
  }

  async getCreatedBy(_req: Request, res: Response): Promise<Response> {
    try {
      return res.status(200).json({
        recipes: await this.recipeService.getCreatedBy(res.locals.jwtPayload.id)
      });
    } catch (error: any) {
      return res.status(500).json({ errorMessage: error.message });
    }
  }

  async getById(req: Request, res: Response): Promise<Response> {
    try {
      const recipe = await this.recipeService.getById(req.params.id);
      if (!recipe) return res.status(404).json({ message: "Recipe not found" });

      return res.status(200).json(recipe);
    } catch (error: any) {
      return res.status(500).json({ errorMessage: error.message });
    }
  }


  private defaultResponse(): RecipeDto {
    return this.recipeService.getAll()[0];
  }
}


