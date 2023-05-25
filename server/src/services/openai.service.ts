import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

export class OpenAIServiceIntance {
  private openai: OpenAIApi;

  constructor(private configuration: Configuration) {
    this.openai = new OpenAIApi(configuration);
  }

  async createRecipe(prompt: string) {
    // falta tipar el response pero me da paja
    const response: any = await this.openai.createCompletion({
      model: "gpt-3.5-turbo",
      prompt,
      temperature: 0.8,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    });

    return response.data.choices[0].text;
  }

  // generar la imagen de la receta en una llamada aparte
}

const OpenAIService = new OpenAIServiceIntance(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  })
);

export default OpenAIService;
