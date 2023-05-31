"use client";
import React, { useState } from "react";
// import useForm from "@/hooks/useForm";
import { Recipes } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createRecipe } from "@/backend/user";
import { useRouter } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";
import { BsCheckCircleFill } from "react-icons/bs";
import Image from "next/image";
import Menu from "@/components/Menu";
import Swal from "sweetalert2";
import { alerts } from "@/utils/alert";
import { BiHomeAlt } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import { TbSoup } from "react-icons/tb";
import { getDiets } from "@/backend/recipes";

export default function Generator() {
  const router = useRouter();
  // const { form, handleChange } = useForm<Recipes>({
  //   ingredient: [],
  //   diets: [],
  //   categories: [],
  //   difficulty: ""
  // });

  const { data } = useQuery(["diet"], getDiets);

  console.log(data);

  const [ingredient, setIngredient] = useState("");
  const [listIngredients, setListIngredients] = useState([...ingredient]);

  const [allergic, setAllergic] = useState("");
  const [listallergic, setListAllergic] = useState(["Camarones", "Almendras", ...allergic]);

  const [generator, setGenerator] = useState<Recipes>({
    ingredients: [],
    AllergicIngredients: [],
    diet: [],
    categories: [],
    flavor: "",
    difficulty: ""
  });

  //show inputs
  const [showInput, setShowInput] = useState<any>({
    ingredient: false,
    allergic: false
  });

  const show = (type: string) => {
    if (type === "ingredient") {
      setShowInput({ ...showInput, ingredient: true });
    }
    if (type === "allergic") {
      setShowInput({ ...showInput, allergic: true });
    }
  };

  const { mutate } = useMutation(createRecipe, {
    onSuccess: () => {
      router.push("/");
    }
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (generator.ingredients.length === 0)
      return alerts({ title: "Ingredients is required", icon: "warning" });
    if (!generator.categories) return alerts({ title: "categories is required", icon: "warning" });
    if (!generator.diet) return alerts({ title: "Diet is required", icon: "warning" });
    if (!generator.flavor) return alerts({ title: "Flavor is required", icon: "warning" });
    if (!generator.difficulty) return alerts({ title: "Difficulty is required", icon: "warning" });
    else {
      alerts({ title: "Your Recipe was create succesfully", icon: "success" }).then(() =>
        // router.push("/recipe/1")
        console.log(generator)
      );
    }
    // mutate(form);
  };

  const handleChangeInput = (set: any, value: any) => {
    set(value);
  };

  const handleDeleteIngredients = (e: any) => {
    setGenerator({
      ...generator,
      ingredients: generator.ingredients?.filter(ingredient => ingredient !== e.target.title)
    });
  };

  const handleDeleteAllergic = (e: any) => {
    setGenerator({
      ...generator,
      AllergicIngredients: generator.AllergicIngredients?.filter(
        ingredient => ingredient !== e.target.title
      )
    });
  };

  const handleSubmitIngredient = (type: string, array: any, e: any) => {
    e.preventDefault();
    if (array && type) {
      setGenerator({ ...generator, ingredients: [...generator.ingredients, ingredient] });
      setShowInput({ type: false });
    }
  };

  const handleSubmitAllergic = (type: string, array: any, e: any) => {
    e.preventDefault();
    if (array && type) {
      setGenerator({
        ...generator,
        AllergicIngredients: [...generator.AllergicIngredients, allergic]
      });
      setShowInput({ type: false });
    }
  };

  const handleChangeDiets = (e: any) => {
    setGenerator({
      ...generator,
      diet: [...generator.diet, e.target.value]
    });
  };

  const handleChangeCategories = (e: any) => {
    setGenerator({
      ...generator,
      categories: [...generator.categories, e.target.value]
    });
  };

  const handleCheck = (e: any) => {
    setGenerator({
      ...generator,
      [e.target.name]: e.target.value
    });
  };

  let sabor = ["Juicy"];

  let dieta = ["Vegan", "Diabetic", "Without salt", "Fitness", "Without TACC", "Without sugar"];

  let tipo = ["Breakfast", "Lunch", "Night tea", "Dinner"];

  let saborTipos = ["Sweet", "Salted", "Acid", "Spicy", "Sour"];

  let dificultad = ["Easy", "Medium", "Hard"];

  //!Rutas Dinamicas
  // Data para el menú lateral
  const options = [
    {
      id: 1,
      url: "/dashboard",
      text: "Home",
      icon: <BiHomeAlt />,
      activeColor: "secondary-500",
      inactiveColor: "light"
    },
    {
      id: 2,
      url: "/recipesfav",
      text: "Favorites",
      icon: <BsStar />,
      activeColor: "secondary-500",
      inactiveColor: "light"
    },
    {
      id: 3,
      url: "/generator",
      text: "Create",
      icon: <TbSoup />,
      activeColor: "secondary-500",
      inactiveColor: "light"
    }
  ];

  return (
    <div className="w-screen h-[170vh] flex justify-evenly">
      <div className="w-full px-4 lg:w-auto">
        <Menu options={options} />
      </div>
      <section className="w-[70%] h-full flex flex-col justify-evenly">
        <h1 className="text-3xl">Generate recipe</h1>
        <div className="w-[50%] h-[54px] flex items-center bg-white py-4 px-5 rounded-md shadow-md">
          <input
            type="text"
            placeholder="Search ingredient"
            className="w-[100%] bg-white border-b py-2 outline-none border-light"
          />

          <IoSearchOutline className="w-7 h-7 text-light" />
        </div>
        <h1 className="text-3xl">Ingredients</h1>
        <div className="w-[80%] grid grid-cols-6 items-center max-[1330px]:grid-cols-4 max-[1330px]:gap-y-5 max-lg:grid-cols-3">
          {generator.ingredients?.map((e, i) => (
            <div
              key={i}
              className="relative w-[119px] h-[47px] flex items-center justify-center border shadow-[0px_0px_6px_rgba(0,0,0,0.25) rounded-[8px] "
            >
              <h3 className=" text-primary-500 underline">{e}</h3>
              <button className="absolute top-1 right-1">
                <Image
                  onClick={handleDeleteIngredients}
                  title={e}
                  src="/generator/Equis x.png"
                  width="10"
                  height="10"
                  alt="X"
                />
              </button>
            </div>
          ))}
          {showInput.ingredient && (
            <form
              className="relative w-[140px] h-[47px]"
              // onSubmit={e => handleSubmitIngredient("ingredient", generator, e)}
            >
              <input
                type="text"
                className="relative w-[140px] h-[47px] flex items-center justify-center border shadow-[0px_0px_6px_rgba(0,0,0,0.25) rounded-[8px] border border-primary-500 px-3 text-primary-500 underline"
                onChange={e => handleChangeInput(setIngredient, e.target.value)}
              />
              <BsCheckCircleFill
                onClick={e => handleSubmitIngredient("ingredient", generator, e)}
                className="absolute top-[25%] right-2"
                size="1.5em"
                color="#FF8811"
              />
            </form>
          )}
          <button className="w-[20px] h-[20px]" onClick={() => show("ingredient")}>
            <Image src="/generator/Addition.png" width="20" height="20" alt="Addition" />
          </button>
        </div>

        <h1 className="text-3xl">Allergic ingredients</h1>
        <div className="w-[80%] grid grid-cols-6 items-center">
          {generator.AllergicIngredients?.map((e, i) => (
            <div
              key={i}
              className="relative w-[119px] h-[47px] flex items-center justify-center border shadow-[0px_0px_6px_rgba(0,0,0,0.25) rounded-[8px] "
            >
              <h3 className=" text-primary-500 underline">{e}</h3>

              <button>
                <Image
                  onClick={handleDeleteAllergic}
                  title={e}
                  className="absolute top-1 right-1"
                  src="/generator/Equis x.png"
                  width="10"
                  height="10"
                  alt=""
                />
              </button>
            </div>
          ))}
          {showInput.allergic && (
            <form onSubmit={e => handleSubmitAllergic("allergic", allergic, e)}>
              <input
                type="text"
                className="relative w-[119px] h-[47px] flex items-center justify-center border shadow-[0px_0px_6px_rgba(0,0,0,0.25) rounded-[8px] border border-primary-500 px-3 text-primary-500 underline"
                onChange={e => handleChangeInput(setAllergic, e.target.value)}
              />
            </form>
          )}
          <button className="w-[20px] h-[20px]" onClick={() => show("allergic")}>
            <Image src="/generator/Addition.png" width="20" height="20" alt="Addition" />
          </button>
        </div>

        <h1 className="text-3xl mt-2">Diet</h1>

        <div className="w-[80%] grid grid-cols-4 gap-5 items-center">
          {dieta.map((e, i) => (
            <div
              key={i}
              className="relative w-[90%] h-[47px] flex items-center justify-center border shadow-[0px_0px_6px_rgba(0,0,0,0.25) rounded-[8px] "
            >
              <input
                type="radio"
                id={e}
                name="diet"
                className="hidden"
                value={e}
                onChange={handleChangeDiets}
              />
              <label htmlFor={e} className="w-[90%] flex items-center cursor-pointer">
                <div className="w-6 h-6 rounded-full border-2 border-primary-500 flex items-center justify-center">
                  {generator.diet.includes(e) && (
                    <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                  )}
                </div>
                <span className="text-primary-500 ml-2">{e}</span>
              </label>
            </div>
          ))}
        </div>

        <h1 className="text-3xl mt-2">Type of food</h1>
        <div className="w-[80%] grid grid-cols-4 items-center">
          {tipo.map((e, i) => (
            <div
              key={i}
              className="relative w-[90%] h-[47px] flex items-center justify-center border shadow-[0px_0px_6px_rgba(0,0,0,0.25) rounded-[8px] "
            >
              <input
                type="radio"
                id={e}
                name="categories"
                className="hidden"
                value={e}
                onChange={handleChangeCategories}
              />
              <label htmlFor={e} className="w-[70%] flex items-center cursor-pointer">
                <div className="w-6 h-6 rounded-full border-2 border-primary-500 flex items-center justify-center">
                  {generator.categories.includes(e) && (
                    <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                  )}
                </div>
                <span className="text-primary-500 ml-2">{e}</span>
              </label>
            </div>
          ))}
        </div>

        <h1 className="text-3xl">Flavor</h1>
        <div className="w-[80%] grid grid-cols-4 gap-5 items-center">
          {saborTipos.map((e, i) => (
            <div
              key={i}
              className="relative w-[90%] h-[47px] flex items-center justify-center border shadow-[0px_0px_6px_rgba(0,0,0,0.25) rounded-[8px] "
            >
              <input
                type="radio"
                id={e}
                name="flavor"
                className="hidden"
                value={e}
                onChange={handleCheck}
              />
              <label htmlFor={e} className="w-[70%] flex items-center cursor-pointer">
                <div className="w-6 h-6 rounded-full border-2 border-primary-500 flex items-center justify-center">
                  {generator.flavor === e && (
                    <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                  )}
                </div>
                <span className="text-primary-500 ml-2">{e}</span>
              </label>
            </div>
          ))}
        </div>
        <div className="w-[80%] grid grid-cols-6 items-center">
          {sabor.map((e, i) => (
            <div
              key={i}
              className="relative w-[119px] h-[47px] flex items-center justify-center border shadow-[0px_0px_6px_rgba(0,0,0,0.25) rounded-[8px] "
            >
              <h3 className=" text-primary-500 underline">{e}</h3>
              <button>
                <Image
                  className="absolute top-1 right-1"
                  src="/generator/Equis x.png"
                  width="10"
                  height="10"
                  alt=""
                />
              </button>
            </div>
          ))}
          <Image src="/generator/Addition.png" width="20" height="20" alt="Addition" />
        </div>
        <h1 className="text-3xl">Difficulty</h1>
        <div className="w-[50%] grid grid-cols-3 items-center">
          {dificultad.map((e, i) => (
            <div
              key={i}
              className="relative w-[90%] h-[47px] flex items-center justify-center border shadow-[0px_0px_6px_rgba(0,0,0,0.25) rounded-[8px] "
            >
              <input
                type="radio"
                id={e}
                name="difficulty"
                className="hidden"
                value={e}
                onChange={handleCheck}
              />
              <label htmlFor={e} className="w-[70%] flex items-center cursor-pointer">
                <div className="w-6 h-6 rounded-full border-2 border-primary-500 flex items-center justify-center">
                  {generator?.difficulty === e && (
                    <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                  )}
                </div>
                <span className="text-primary-500 ml-2">{e}</span>
              </label>
            </div>
          ))}
        </div>
        <div className="w-[78%] flex justify-end mt-10">
          <button
            onClick={handleSubmit}
            className="w-[210px] h-[52px] flex items-center justify-center px-[8px] py-[28px] bg-[#FF0087] text-[#FFFFFF] font-[600] text-[24px] leading-[36px] rounded-[8px]"
          >
            Create recipe
          </button>
        </div>
      </section>
    </div>
  );
}
