import Repository from "../utils/repository";
import RecipeModel, { Recipe } from "../models/recipe.model";
import UserModel, { User } from "../models/user.model";

export class RecipeService {
  private recipeRepository: Repository<Recipe> = new Repository(RecipeModel);

  public async save(data: any): Promise<void> {
    // lo que se le debe pasar como userId es la propiedad _id del usuario, no su id !!
    const user: User = await UserModel.findById(data.userId);
    if (!user) throw new Error("User not found.");

    data.recipe.createdBy = user;
    await this.recipeRepository.create(data.recipe);
  }
}
