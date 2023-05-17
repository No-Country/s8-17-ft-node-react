import { Request, Response } from "express";
import { RecipeService } from "../services/recipe.service";
import { GenerateRecipeDto } from "../dto/recipe/generateRecipe.dto";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import OpenAIService, { OpenAIServiceIntance } from "../services/openai.service";

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
      // const recipe = await this.openAIService.createRecipe(prompt);
      const defaultResponse = this.defaultResponse();

      // await this recipeService.save(recipe);
      return res.status(200).json(defaultResponse);
      // const recipeGenerated = await this.recipeService.generate(req.body);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  private generateTemplatePrompt(data: GenerateRecipeDto): string {
    return `Generate a cooking recipe according to the following parameters:
    - Ingredients: ${data.ingredients}
    - Diet: ${data.diets}
    - Category: ${data.categories} 
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
        rest: string,
        total: string
      },
      portions: number,
      diet: string[],
      difficulty: ${data.difficulty},
      category: string[],
      image: string,
      nutritionalValue: {
        of100g: {
          calories: number,
          fat: number,
          carbohydrates: number,
          protein: number,
          sugar: number,
          fiber: number,
          salt: number
        },
        ofPortion: {
          calories: number,
          fat: number,
          carbohydrates: number,
          protein: number,
          sugar: number,
          fiber: number,
          salt: number
        }
      }
    }`;
  }

  private defaultResponse(): any {
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
        rest: "-",
        total: "30 minutes"
      },
      portions: 2,
      diet: ["Ketogenic"],
      difficulty: "Easy",
      category: ["Breakfast"],
      image: "crispy-keto-potato-breakfast.jpg",
      nutritionalValue: {
        of100g: {
          calories: 97,
          fat: 4.3,
          carbohydrates: 16.3,
          protein: 2.2,
          sugar: 0.4,
          fiber: 2.2,
          salt: 0.2
        },
        ofPortion: {
          calories: 98,
          fat: 4.4,
          carbohydrates: 16.5,
          protein: 2.3,
          sugar: 0.4,
          fiber: 2.3,
          salt: 0.3
        }
      }
    };
  }
}
