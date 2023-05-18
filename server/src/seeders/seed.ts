import dietsToSeed from "./diets.seeder";
import categoriesToSeed from "./categories.seeder";
import CategoryModel from "src/models/category.model";
import DietModel from "src/models/diet.model";


export default async function seed() {
    await DietModel.insertMany(dietsToSeed);
    await CategoryModel.insertMany(categoriesToSeed);
    }

