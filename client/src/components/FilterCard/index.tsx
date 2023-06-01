import { useSearch } from "@/hooks/useSearch";
import { ISearch } from "@/types";
import React, { Dispatch, SetStateAction, useState } from "react";

const FilterCard = ({
  formData,
  setFormData
}: {
  formData: ISearch;
  setFormData: Dispatch<SetStateAction<ISearch>>;
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Realiza las acciones necesarias con los datos del formulario
    // por ejemplo, puedes enviar los datos a una API o hacer alguna operación con ellos

    // Reinicia los campos del formulario
    const resetForm = {
      name: "",
      difficulty: "",
      ingredients: [],
      diets: [],
      categories: []
    };

    setFormData(resetForm);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleAddItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
      const name = e.currentTarget.name as keyof ISearch;
      const value = e.currentTarget.value.trim();

      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: [...(prevFormData[name] as string[]), value]
      }));

      e.currentTarget.value = "";
    }
  };

  const handleRemoveItem = (name: keyof ISearch, index: number) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: (prevFormData[name]! as string[]).filter((_, i) => i !== index)
    }));
  };

  const handleReset = () => {
    setFormData({
      name: "",
      difficulty: "",
      ingredients: [],
      diets: [],
      categories: []
    });
  };

  return (
    <section className="w-full lg:w-[234px] h-fit flex flex-col items-center lg:text-left p-2 mt-4 gap-6 rounded-xl overflow-hidden text-sm font-medium text-light border">
      <form onSubmit={handleSubmit}>
        <label className="block">
          Name:
          <input
            className="searchInput"
            type="text"
            name="name"
            value={formData.name}
            placeholder="example: tomato"
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="block">
          Difficulty:
          <select
            className="searchInput"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
          >
            <option value="">Select difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <br />
        <label className="block">
          Ingredients:
          <input className="searchInput" type="text" name="ingredients" onKeyDown={handleAddItem} />
          <ul>
            {formData.ingredients?.length ? (
              formData.ingredients.map((item, index) => (
                <li key={index} className="mt-1 flex items-center">
                  {item}
                  <button
                    type="button"
                    onClick={() => handleRemoveItem("ingredients", index)}
                    className="ml-2 text-red-500"
                  >
                    X
                  </button>
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </label>
        <br />
        <label className="block">
          Diets:
          <input className="searchInput" type="text" name="diets" onKeyDown={handleAddItem} />
          <ul>
            {formData.diets?.length ? (
              formData.diets.map((item, index) => (
                <li key={index} className="mt-1 flex items-center">
                  {item}
                  <button
                    type="button"
                    onClick={() => handleRemoveItem("diets", index)}
                    className="ml-2 text-secondary-500"
                  >
                    X
                  </button>
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </label>
        <br />
        <label className="block">
          Categories:
          <input className="searchInput" type="text" name="categories" onKeyDown={handleAddItem} />
          <ul>
            {formData.categories?.length ? (
              formData.categories.map((item, index) => (
                <li key={index} className="mt-1 flex items-center">
                  {item}
                  <button
                    type="button"
                    onClick={() => handleRemoveItem("categories", index)}
                    className="ml-2 text-red-500"
                  >
                    X
                  </button>
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </label>
        <br />
        <div className="flex justify-center">
          {/* <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button> */}
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 bg-light text-white rounded w-4/5 hover:bg-primary-500 transition-colors duration-300"
          >
            Reset
          </button>
        </div>
      </form>
    </section>
  );
};

export default FilterCard;
