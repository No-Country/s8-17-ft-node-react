import dietsToSeed from "./diets.seeder";
import categoriesToSeed from "./categories.seeder";
import usersToSeed from "./users.seeder";
import CategoryModel from "../models/category.model";
import DietModel from "../models/diet.model";
import UserModel, { User } from "../models/user.model";
import * as bcrypt from "bcrypt";
import recipesToSeed from "./recipes.seeder";
import subscriptionsToSeed from "./subscriptions.seeder";
import RecipeModel, { Recipe } from "../models/recipe.model";
import SubscriptionModel from "../models/subscription.model";
import PaymentModel from "../models/payment.model";
import NewsModel from "../models/news.model";
import newsToSeed from "./news.seeder";

export default async function seed(): Promise<void> {
  // limpiamos la base de datos
  await deleteAllDataBase();

  // creamos los datos principales
  await DietModel.insertMany(dietsToSeed);
  await CategoryModel.insertMany(categoriesToSeed);
  await SubscriptionModel.insertMany(subscriptionsToSeed);
  await NewsModel.insertMany(newsToSeed);

  // creamos los usuarios
  const allUsers: User[] = await Promise.all(
    usersToSeed.map(async user =>
      UserModel.create({
        ...user,
        password: await bcrypt.hash(user.password, 10)
      })
    )
  );

  // creamos las recetas
  const allRecipes: Recipe[] = await Promise.all(
    recipesToSeed.map(async recipe => {
      const categories = await getAllCategories(recipe.categories);
      const diets = await getAllDiets(recipe.diets);
      return RecipeModel.create({
        ...recipe,
        createdBy: allUsers[0],
        categories,
        diets
      });
    })
  );

  await UserModel.updateOne(
    {
      id: allUsers[0].id
    },
    {
      $set: {
        favRecipes: allRecipes
      }
    }
  );

  console.log("The database has been populated successfully!");
}

const deleteAllDataBase = async (): Promise<void> => {
  await CategoryModel.deleteMany();
  await DietModel.deleteMany();
  await UserModel.deleteMany();
  await RecipeModel.deleteMany();
  await SubscriptionModel.deleteMany();
  await PaymentModel.deleteMany();
  await NewsModel.deleteMany();

  console.log("The database has been depopulated successfully!");
};

const getAllDiets = async (diets: Array<string>) =>
  await Promise.all(
    diets.map(
      async diet =>
        await DietModel.findOne({
          name: diet
        })
    )
  );

const getAllCategories = async (categories: Array<string> | Array<Object>) =>
  await Promise.all(
    categories.map(
      async category =>
        await CategoryModel.findOne({
          name: category
        })
    )
  );
