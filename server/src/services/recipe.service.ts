import Repository from "../utils/repository";
import RecipeModel, { Recipe } from "../models/recipe.model";
import UserModel, { User } from "../models/user.model";
import { ObjectId } from "mongoose";
import DietModel, { Diet } from "../models/diet.model";
import CategoryModel, { Category } from "../models/category.model";

export class RecipeService {
  private readonly recipeRepository: Repository<Recipe> = new Repository(RecipeModel);
  private readonly userRepository: Repository<User> = new Repository(UserModel);

  public async save(id: string, recipe: Partial<Recipe>): Promise<void> {
    const user: User = await this.userRepository.findOne({ id });
    if (!user) throw new Error("User not found.");

    await this.userRepository.update({ id }, { $push: { favRecipes: recipe } }, true);
    await this.recipeRepository.create(recipe);
  }

  public async getByUserId(id: string): Promise<Partial<Recipe>[]> {
    const user: User = await this.userRepository.findOne({ id });
    if (!user) throw new Error("User not found.");
    const userRecipes: Recipe[] = await this.recipeRepository.findAllByRef(user.favRecipes);

    return userRecipes;
  }

  public async getAll(): Promise<Recipe[]> {
    const recipes: Recipe[] = await this.recipeRepository.findAll({
      populate: [
        { path: "diets", select: "name" },
        { path: "categories", select: "name" },
        { path: "createdBy", select: "name" }
      ]
    });
    return recipes;
  }

  public async getById(id: string): Promise<Recipe> {
    const recipe: Recipe = await this.recipeRepository.findById(id, [
      { path: "diets", select: "name" },
      { path: "categories", select: "name" },
      { path: "createdBy", select: "name" }
    ]);
    return recipe;
  }

  public async getCreatedBy(createdBy: string): Promise<Recipe[]> {
    const user: User = await this.userRepository.findById(createdBy);
    if (!user) throw new Error("User not found.");
    return await this.recipeRepository.findAll({
      filter: {
        createdBy: user.id
      },
      populate: [
        { path: "diets", select: "name" },
        { path: "categories", select: "name" },
        { path: "createdBy", select: "name" }
      ]
    });
  }
}
