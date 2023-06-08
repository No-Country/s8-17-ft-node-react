"use client";
import Image from "next/image";
import { useFindRecipeById } from "@/hooks/useRecipes";
import { IRecipe } from "@/types";
import { useEffect, useState } from "react";
import SliderImages from "../SliderImages";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconDownload, IconShare } from "@/components/icons";
import { addRecipeToCalendar } from "@/backend/recipes";
import Select from "react-select";

const RecipeCard = ({ recipeId }: { recipeId: string }) => {
  const router = useRouter();

  const { getRecipeByIdQuery } = useFindRecipeById(recipeId);
  // const [recipe, setRecipe] = useState<IRecipe | null>(null);
  const recipe = getRecipeByIdQuery.data!;

  interface calendary {
    DayOfWeek: number;
    Moment: number;
  }

  const [calendar, setCalendar] = useState<calendary>({
    DayOfWeek: 0,
    Moment: 0
  });

  console.log(calendar);

  const daysOfWeek = [
    { label: "Monday", value: 0 },
    { label: "Tuesday", value: 1 },
    { label: "Wednesday", value: 2 },
    { label: "Thursday", value: 3 },
    { label: "Friday", value: 4 },
    { label: "Saturday", value: 5 },
    { label: "Sunday", value: 6 }
  ];

  const momentOfDay = [
    { label: "Breakfast", value: 0 },
    { label: "Lunch", value: 1 },
    { label: "NightTea", value: 2 },
    { label: "Dinner", value: 3 }
  ];

  const handleOnChangeDay = (e: any) => {
    setCalendar({
      ...calendar,
      DayOfWeek: parseInt(e.value)
    });
  };

  const handleOnChangeHour = (e: any) => {
    setCalendar({
      ...calendar,
      Moment: parseInt(e.value)
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addRecipeToCalendar(recipe?.id, calendar);
  };

  return (
    <div className="min-w-sm mx-auto p-10 font-text mb-40">
      {getRecipeByIdQuery.error || recipe === null || recipe === undefined ? (
        <div>
          <div className="py-4">
            <h1 className="text-2xl font-bold mb-2 font-title text-center text-secondary-500 animate-pulse">
              Loading...
            </h1>
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
                <Image src={recipe.images[0]} alt="recipe image" fill />
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
                <button className="flex items-center hover:bg-dark hover:transition-all hover:ease-out hover:delay-150 py-2 px-4 rounded-xl border-2 border-slate-300 w-fit">
                  <p className="capitalize font-bold text-primary-500">glossary</p>
                </button>
                <button className="flex items-center hover:bg-dark hover:transition-all hover:ease-out hover:duration-150 py-2 px-4 rounded-xl border-2 border-slate-300 w-fit m-5 md:m-0">
                  <p className="capitalize font-bold text-primary-500">equivalence</p>
                </button>
              </div>

              <form
                onSubmit={handleSubmit}
                className="w-full flex items-center justify-evenly mb-10"
                action=""
              >
                <Select
                  options={daysOfWeek}
                  onChange={handleOnChangeDay}
                  className="w-[30%]"
                  name="DayOfWeek"
                  placeholder="Select day"
                />

                <Select
                  options={momentOfDay}
                  onChange={handleOnChangeHour}
                  className="w-[30%]"
                  name="Moment"
                  placeholder="Select hour"
                />

                <button className="flex items-center hover:bg-dark hover:transition-all hover:ease-out hover:duration-150 py-2 px-4 rounded-xl border-2 border-slate-300 w-fit m-5 md:m-0 capitalize font-bold text-primary-500">
                  Submit
                </button>
              </form>
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
