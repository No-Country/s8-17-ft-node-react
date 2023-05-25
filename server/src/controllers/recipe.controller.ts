import { Request, Response } from "express";
import { RecipeService } from "../services/recipe.service";
import { GenerateRecipeDto } from "../dto/recipe/generateRecipe.dto";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import OpenAIService, { OpenAIServiceIntance } from "../services/openai.service";
import { Recipe } from "../models/recipe.model";
import { SaveRecipeDto } from "../dto/recipe/saveRecipe.dto";

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
      const defaultResponse = this.defaultResponse();
      return res.status(200).json(defaultResponse);
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

  async getByUserId(req: Request, res: Response): Promise<Response> {
    try {
      const userRecipes: Partial<Recipe>[] = await this.recipeService.getByUserId(req.body.id);
      return res.status(200).json(userRecipes);
    } catch (error: any) {
      if (error.message === "User not found.")
        return res.status(400).json({ errorMessage: "Invalid User ID." });
      return res.status(500).json({ errorMessage: error.message });
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

  private defaultResponse(): any {
    // falta la propiedad image que se podría obtener con un llamado aparte a la api de openAI
    return {
      name: "Crispy Keto Potato Breakfast",
      description:
        "This easy ketogenic breakfast is a great way to jumpstart your day. With its crispy potatoes and rich flavors, it’s sure to leave you feeling satisfied!",
      ingredients: ["1 large potato", "2 tablespoons olive oil", "Salt and pepper, to taste"],
      steps: [
        "Preheat oven to 400°F (200°C).",
        "Cut the potato into thin slices.",
        "Place the slices on a baking sheet lined with parchment paper.",
        "Brush both sides of each slice with olive oil and sprinkle with salt and pepper.",
        "Bake for 15 to 20 minutes, until the potato slices are crispy and golden brown."
      ],
      time: {
        preparation: "10 minutes",
        cooking: "20 minutes",
        total: "30 minutes"
      },
      portions: 2,
      categories: ["Breakfast"],
      diets: ["Ketogenic"],
      difficulty: "Easy",
      nutritionalValue: {
        of100g: {
          calories: 97,
          fat: 4.3,
          carbohydrates: 16.3,
          protein: 2.2,
          cholesterol: 2.1
        },
        ofPortion: {
          calories: 98,
          fat: 4.4,
          carbohydrates: 16.5,
          protein: 2.3,
          cholesterol: 2.2
        }
      }
    };
  }
}
