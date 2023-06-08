"use client";

import React, { useEffect, useState } from "react";
import { IconSearch } from "@/components/icons";
import { useMutation } from "@tanstack/react-query";
import { getRecipesBySearch } from "@/backend/recipes";
import Loader from "../Loader";
import { IRecipe, ISearch } from "@/types";

const INITIAL_STATE = {
  perPage: 0,
  page: 0,
  difficulty: "medium",
  name: "",
  ingredients: [],
  diets: [],
  categories: []
};
//    const { perPage, page, name, ingredients, diets, categories, difficulty } = searchRecipe;

const SearchBar = ({ setFilter }: { setFilter: (arg: IRecipe[]) => void }) => {
  const [search, setSearch] = useState<ISearch>(INITIAL_STATE);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch({ ...search, name: event.target.value.toLowerCase() });
  };

  const { mutateAsync, isLoading, data } = useMutation(getRecipesBySearch);

  useEffect(() => {
    if (!isLoading && data) {
      setFilter(data.recipes);
    }
  }, [isLoading, data, setFilter]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!search) return;

    await mutateAsync(search);
    setSearch(INITIAL_STATE);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-center bg-white w-full py-4 px-8 rounded-md shadow-md"
    >
      <input
        type="text"
        className="w-full h-full bg-white border-b py-2 outline-none border-light"
        placeholder="Search by name..."
        value={search.name}
        onChange={handleInputChange}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? <Loader type="spinner" /> : <IconSearch className="w-8 h-8 text-light" />}
      </button>
    </form>
  );
};

export default SearchBar;
