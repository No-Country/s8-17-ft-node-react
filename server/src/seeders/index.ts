import dietsToSeed from "./diets.seeder";
import categoriesToSeed from "./categories.seeder";
import usersToSeed from "./users.seeder";
import CategoryModel from "../models/category.model";
import DietModel from "../models/diet.model";
import UserModel from "../models/user.model";
import * as bcrypt from "bcrypt";

export default async function seed() {
  await DietModel.insertMany(dietsToSeed);
  await CategoryModel.insertMany(categoriesToSeed);
  for (const user of usersToSeed) {
    const hashPassword = await bcrypt.hash(user.password, 10);
    await UserModel.create({ ...user, password: hashPassword });
  }

  console.log("The database has been populated successfully!");
}
