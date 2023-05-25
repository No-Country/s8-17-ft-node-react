import dietsToSeed from "./diets.seeder";
import categoriesToSeed from "./categories.seeder";
import usersToSeed from "./users.seeder";
import CategoryModel from "../models/category.model";
import DietModel from "../models/diet.model";
import UserModel, { User } from "../models/user.model";
import * as bcrypt from "bcrypt";
import recipeToSeed from "./recipes.seeder";
import RecipeModel, { Recipe } from "../models/recipe.model";

export default async function seed() {
  // limpiamos la base de datos
  await deleteAllDataBase();
  // creamos los datos principales
  await DietModel.insertMany(dietsToSeed);
  await CategoryModel.insertMany(categoriesToSeed);

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
    recipeToSeed.map(async recipe => {
      const categories = await getAllCategories(recipe.categories)
      const diets = await getAllDiets(recipe.diets)
      return RecipeModel.create({
        ...recipe,
        createdBy: allUsers[0],
        categories,
        diets
      });
    })
  );

  await UserModel.updateOne({
    id: allUsers[0].id
  },{
    $set: {
      favRecipes: allRecipes
    }
  })

  console.log("The database has been populated successfully!");
}

const deleteAllDataBase = async () => {
  await CategoryModel.deleteMany();
  await DietModel.deleteMany();
  await UserModel.deleteMany();
  await RecipeModel.deleteMany();
};

const getAllDiets = async diets => 
  await Promise.all(diets.map(async diet => await DietModel.findOne({
    name: diet
  })));


const getAllCategories = async categories =>
  await Promise.all(categories.map(async category => await CategoryModel.findOne({
    name: category
  })));
