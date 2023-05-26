import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
import { GenerateRecipeDto } from "../dto/recipe/generateRecipe.dto";
import { User } from "../models/user.model";
dotenv.config();

export class OpenAIServiceIntance {
  private openai: OpenAIApi;

  constructor(private configuration: Configuration) {
    this.openai = new OpenAIApi(configuration);
  }

  async createRecipe(prompt: string) {
    // falta tipar el response pero me da paja

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

    return JSON.parse(recipeObject);
  }

  private readonly SystemMessage: any = {
    role: "system",
    content:
      "You are an AI designed to simulate a professional culinary chef. Your goal is to provide cooking recipes that not only enhance nutrition but also emulate the techniques and expertise of a skilled chef. Please generate a recipe in JSON format that adheres to these guidelines:"
  };

  public generateTemplatePrompt(data: GenerateRecipeDto, user: User): string {
    const alerts = [data.alerts, user.alerts].toString();
    const favorite = [user.ingredientsFav, data.favorites].toString();

    return `
Generate a cooking recipe that helps improve your nutrition and enables you to learn simple cooking techniques. Consider the following parameters:
    - Ingredients: ${data.ingredients}
    - Diets: ${data.diets}
    - Categories: ${data.categories}
    - Difficulty: ${data.difficulty}
    - Ingredients Favorites: ${favorite}
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
        "nutritionalValue": {
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

  async generateImage(recipe: GenerateRecipeDto) {
    // const response: any = await this.openai.generate(recipe);
    // return response.data.image;
  }
}

const OpenAIService = new OpenAIServiceIntance(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  })
);

export default OpenAIService;
