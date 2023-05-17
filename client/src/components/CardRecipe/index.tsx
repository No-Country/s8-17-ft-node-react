// "use client";
import { IRecipe } from "@/types";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";

const CardRecipe = () => {
  const [recipe, setRecipe] = useState<IRecipe>({
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

  return (
    <div className="w-full flex flex-col flex-center h-fit">
      {/* NAME OF THE RECIPE */}
      <div>
        <h1>{recipe.name}</h1>
      </div>
      {/* IMAGE OF THE RECIPE */}
      {/* INGREDIENTS */}
      {/* PREPARATION */}
      {/* TABLE NUTRITIONAL VALUES */}

      <button>
        Download as PDF
        <FaDownload />
      </button>
    </div>
  );
};

export default CardRecipe;
