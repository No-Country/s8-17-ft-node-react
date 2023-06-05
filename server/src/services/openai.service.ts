import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
import { GenerateRecipeDto } from "../dto/recipe/generateRecipe.dto";
import { User } from "../models/user.model";
import axios from "axios";
import { RecipeDto } from "src/dto/recipe/recipe.dto";
dotenv.config();

export class OpenAIServiceIntance {
  private openai: OpenAIApi;

  constructor(private configuration: Configuration) {
    this.openai = new OpenAIApi(configuration);
  }

  async createRecipe(prompt: string) {
    const response: any = await this.openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        this.SystemMessage,
        {
          role: "user",
          content: prompt
        }
      ]
    });

    const recipeObject = response.data.choices[0].message.content;
    const recipe: RecipeDto = JSON.parse(recipeObject);
    try {
      const images: string[] = await this.getImageUrlFromPexels(recipe.name);
      recipe.images = images;
    } catch (err) {
      console.log("failed to get image url");
      console.log(err);
    }
    return recipe;
  }

  private readonly SystemMessage: any = {
    role: "system",
    content:
      "You are an AI designed to simulate a professional culinary chef. Your goal is to provide cooking recipes that not only enhance nutrition but also emulate the techniques and expertise of a skilled chef. Please generate a recipe in JSON format that adheres to these guidelines:"
  };

  public generateTemplatePrompt(data: GenerateRecipeDto, user: User): string {
    const alerts = [data.alerts, user.alerts].toString();
    const favorite = [user.favIngredients, data.favorites].toString();

    return `
    Generate a cooking recipe that helps improve your nutrition and enables you to learn simple cooking techniques. Consider the following parameters:
      - Ingredients: ${data.ingredients}
      - Diets: ${data.diets}
      - Categories: ${data.categories}
      - Difficulty: ${data.difficulty}
      - Favorite Ingredients: ${favorite}
      - Flavor: ${data.flavour ?? "all"}

    Please make sure the recipe does not contain the following ingredients: ${alerts}
  
    Output format:
      {
        "name": string,
        "description": string,
        "ingredients": string[],
        "steps": string[],
        "time": {
          "preparation": string,
          "cooking": string,
          "total": string
        },
        "portions": number,
        "categories": string[] ${data.categories},
        "diets": string[] ${data.diets},
        "difficulty": "${data.difficulty}",
        "nutritionalValues": {
          "of100g": {
            "calories": number,
            "fat": number,
            "carbohydrates": number,
            "protein": number,
            "cholesterol": number
          },
          "ofPortion": {
            "calories": number,
            "fat": number,
            "carbohydrates": number,
            "protein": number,
            "cholesterol": number
          }
        }
      }
    `;
  }

  async getImageUrlFromPexels(searchTerm: string): Promise<string[]> {
    const response = await axios.get("https://api.pexels.com/v1/search", {
      headers: {
        Authorization: process.env.PEXELS_KEY_TOKEN
      },
      params: {
        query: `food:${searchTerm}`,
        per_page: 4
      }
    });

    const images: string[] = response.data.photos.map(image => image.src.large);
    return images;
  }
}

const OpenAIService = new OpenAIServiceIntance(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  })
);

export default OpenAIService;
