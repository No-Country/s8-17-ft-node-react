"use client";
import { useAuth } from "@/hooks/useAuth";
import { getRecipe } from "@/utils/recipes";
import { IRecipe } from "@/types";
import { useEffect, useState } from "react";
import { FaDownload, FaShareAlt } from "react-icons/fa";
// TODO: pasar id por params y buscar en base de datos

const RecipeCard = ({ recipeId }: { recipeId: string }) => {
  const [recipe, setRecipe] = useState<IRecipe | null>({
    _id: "646f425437be53bd8204c4ff",
    name: "Berry Spinach Salad",
    description:
      "This refreshing and nutritious berry spinach salad is the perfect combination of sweet and savory flavors. It's packed with antioxidants and vitamins!",
    ingredients: [
      "4 cups baby spinach leaves",
      "1 cup mixed berries (strawberries, blueberries, raspberries)",
      "1/4 cup crumbled feta cheese",
      "1/4 cup sliced almonds",
      "2 tablespoons balsamic vinegar",
      "1 tablespoon extra-virgin olive oil",
      "1 teaspoon honey",
      "Salt and pepper, to taste"
    ],
    steps: [
      "In a large bowl, combine the baby spinach leaves, mixed berries, crumbled feta cheese, and sliced almonds.",
      "In a small bowl, whisk together the balsamic vinegar, olive oil, honey, salt, and pepper.",
      "Drizzle the dressing over the salad and toss gently to coat the ingredients.",
      "Serve immediately and enjoy!"
    ],
    time: {
      preparation: 10,
      cooking: 0,
      total: 10
    },
    portions: 2,
    categories: [],
    diets: [
      {
        _id: "646f425437be53bd8204c4df",
        name: "Vegetarian",
        description:
          "No ingredients may contain meat or meat by-products, such as bones or gelatin.",
        id: "db13fac6-af92-479c-92d7-58949132eb38",
        __v: 0
      }
    ],
    difficulty: "easy",
    nutritionalValue: {
      of100g: {
        calories: 67,
        fat: 4.2,
        carbohydrates: 6.2,
        protein: 1.8,
        cholesterol: 4.6
      },
      ofPortion: {
        calories: 134,
        fat: 8.4,
        carbohydrates: 12.4,
        protein: 3.6,
        cholesterol: 9.2
      }
    },
    createdBy: "646f425437be53bd8204c4ef",
    id: "f821cd0f-8ea1-4fbd-9c2b-a2101ffa683c",
    image: "https://res.cloudinary.com/dux8fwhxn/image/upload/v1684989615/cld-sample-4.jpg",
    __v: 0
  });
  // TODO: traer la receta con fetch
  useEffect(() => {
    const fetchData = async () => {
      const recipe = await getRecipe({ recipeId });
      if (recipe === null) setRecipe(null);
      setRecipe(recipe as IRecipe);
    };

    fetchData();
  }, [recipeId]);

  return (
    <div className="min-w-sm mx-auto p-10 my-10 border-4 border-primary-americanOrange rounded-3xl font-text bg-complementary-crayola/50">
      {/* NAME OF THE RECIPE */}
      {recipe === null ? (
        <div>
          <div className="py-4">
            <h1 className="text-2xl font-bold mb-2 font-title text-center">Recipe not found</h1>
          </div>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default RecipeCard;
