"use client";
import { getRecipeById } from "@/hooks/useRecipe";
import { IRecipe } from "@/types";
import { useEffect, useState } from "react";
import { FaDownload, FaShareAlt } from "react-icons/fa";
// TODO: pasar id por params y buscar en base de datos

const RecipeCard = ({ recipeId }: { recipeId: string }) => {
  const [recipe, setRecipe] = useState<IRecipe>({
    id: "adasd",
    name: "Tortilla de Queso",
    description: "Una rica y nutritiva tortilla de queso para el desayuno.",
    ingredients: ["2 huevos", "50 g de harina", "100 ml de leche", "50 g de queso rallado"],
    steps: [
      "Batir los huevos con la harina y la leche hasta que quede una masa homogenea.",
      "Agregar el queso y mezclar.",
      "Calentar una sartén con un poco de aceite y verter la mezcla.",
      "Cocinar a fuego medio-bajo hasta que la tortilla esté dorada.",
      "Servir caliente."
    ],
    time: {
      preparation: 10,
      cooking: 10,
      rest: 0,
      total: 20
    },
    portions: 2,
    alerts: [],
    diet: [],
    difficulty: "fácil",
    category: ["desayuno"],
    image: "imagenId",
    nutritionalValue: {
      of100g: {
        calories: 250,
        fat: 12,
        carbohydrates: 15,
        protein: 12,
        sugar: 5,
        fiber: 1,
        salt: 1
      },
      ofPortion: {
        calories: 125,
        fat: 6,
        carbohydrates: 7.5,
        protein: 6,
        sugar: 2.5,
        fiber: 0.5,
        salt: 0.5
      }
    }
  });

  // TODO: traer la receta con fetch
  useEffect(() => {
    const fetchData = async () => {
      const recipe = await getRecipeById(recipeId);
      setRecipe(recipe);
    };

    fetchData();
  }, []);

  return (
    <div className="min-w-sm mx-auto p-10 my-10 border-4 border-primary-americanOrange rounded-3xl font-text bg-complementary-crayola/50">
      {/* NAME OF THE RECIPE */}
      <div className="py-4">
        <h1 className="text-2xl font-bold mb-2 font-title text-center">{recipe.name}</h1>
      </div>
      {/* IMAGE OF THE RECIPE */}
      {/* <div className="py-4">
        <Image src={"/#"} alt="image" width={500} height={300} />
      </div> */}
      {/* INGREDIENTS */}
      <div className="py-4">
        <h2 className="text-lg font-bold mb-1 font-title">Ingredients:</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      {/* PREPARATION */}
      <div className="py-4">
        <h2 className="text-lg font-bold mb-1 font-title">Preparation:</h2>
        <ol>
          {recipe.steps.map((step, index) => (
            <li key={index}>
              {index + 1} - {step}
            </li>
          ))}
        </ol>
      </div>
      {/* TABLE NUTRITIONAL VALUES */}

      <div className="flex justify-between mt-4 py-4">
        <button className="flex items-center bg-primary-americanOrange hover:bg-text-eerieBlack text-white font-bold py-2 px-4 rounded-2xl">
          Download as PDF <FaDownload className="ml-1" />
        </button>
        <button className="flex items-center bg-secondary-brightPink hover:bg-text-eerieBlack text-white font-bold py-2 px-4 rounded-2xl">
          Share <FaShareAlt className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
