"use client";
import Image from "next/image";
import { getRecipe } from "@/hooks/useRecipes";
import { IRecipe } from "@/types";
import { useEffect, useState } from "react";
import SliderImages from "../SliderImages";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaDownload, FaShareAlt } from "react-icons/fa";
import { BsArrowLeftCircle } from "react-icons/bs";

const RecipeCard = ({ recipeId }: { recipeId: string }) => {
  const router = useRouter();

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
    images: ["https://res.cloudinary.com/dux8fwhxn/image/upload/v1684989615/cld-sample-4.jpg"],

    __v: 0
  });
  useEffect(() => {
    const fetchData = async () => {
      const recipe = await getRecipe({ recipeId });
      if (recipe === null) setRecipe(null);
      setRecipe(recipe as IRecipe);
    };

    fetchData();
  }, [recipeId]);

  return (
    <div className="min-w-sm mx-auto p-10 font-text">
      <button
        className="text-primary-500 fixed bottom-2 right-2 z-40 md:relative md:top-20 md:left-10 "
        onClick={() => router.back()}
      >
        <BsArrowLeftCircle className="bg-white font-bold text-5xl rounded-full" />
      </button>
      {recipe === null ? (
        <div>
          <div className="py-4">
            <h1 className="text-2xl font-bold mb-2 font-title text-center">Recipe not found</h1>
          </div>
        </div>
      ) : (
        <>
          {/* --------- Top Part --------- */}
          <div className="border-4 border-slate-300 rounded-md flex flex-col md:flex-row md:mx-32 justify-center items-center h-72">
            {/* NAME OF THE RECIPE */}
            <div className="md:w-1/2 h-1/2 sm:h-full flex justify-center items-center">
              <h1 className="text-xl md:text-3xl font-bold mb-2 font-title text-center capitalize">
                {recipe.name}
              </h1>
            </div>
            {/* IMAGE OF THE RECIPE */}
            <div className="md:w-1/2 h-full w-full relative">
              {recipe.images.length === 1 ? (
                <img src={recipe.images[0]} alt="recipe image" />
              ) : (
                <SliderImages images={recipe.images} />
              )}
            </div>
          </div>
          {/* --------- Bottom Part --------- */}
          <div className="flex flex-col sm:flex-row sm:mx-16 justify-center mt-5">
            {/* INGREDIENTS */}
            <div className="border-4 border-slate-300 rounded-md sm:w-1/2 pt-10 px-2 sm:px-5 h-fit">
              <h2 className="text-2xl font-bold mb-1 font-title capitalize text-primary-500">
                Ingredients:
              </h2>
              <ul className="text-xl font-semibold font-text capitalize leading-loose">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              {/* BUTTONS */}
              <div className="flex flex-col md:flex-row justify-evenly items-center mt-10 sm:mb-5">
                <button className="flex items-center hover:bg-dark py-2 px-4 rounded-xl border-2 border-slate-300 w-fit">
                  <p className="capitalize font-bold text-primary-500">glossary</p>
                </button>
                <button className="flex items-center hover:bg-dark py-2 px-4 rounded-xl border-2 border-slate-300 w-fit m-5 md:m-0">
                  <p className="capitalize font-bold text-primary-500">equivalence</p>
                </button>
              </div>
            </div>
            {/* PREPARATION */}
            <div className="sm:w-3/5 py-10 sm:pl-10">
              <h2 className="text-2xl font-bold font-title capitalize text-dark mb-5">
                Preparation:
              </h2>
              <ol className="text-base font-normal font-title normal-case list-disc sm:pl-5 px-10 space-y-4 text-dark">
                {recipe.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>

          {/* TABLE NUTRITIONAL VALUES */}

          {/* <div className="flex justify-between mt-4 py-4">
            <button className="flex items-center bg-primary-americanOrange hover:bg-text-eerieBlack text-white font-bold py-2 px-4 rounded-2xl">
              Download as PDF <FaDownload className="ml-1" />
            </button>
            <button className="flex items-center bg-secondary-brightPink hover:bg-text-eerieBlack text-white font-bold py-2 px-4 rounded-2xl">
              Share <FaShareAlt className="ml-1" />
            </button>
          </div> */}
        </>
      )}
    </div>
  );
};

export default RecipeCard;
