import Repository from "../utils/repository";
import RecipeModel, { Recipe } from "../models/recipe.model";

export class RecipeService {
  private recipeRepository: Repository<Recipe> = new Repository(RecipeModel);

  // public async save(recipe: any) {
  //   return this.recipeRepository.create(recipe);
  // }
}
