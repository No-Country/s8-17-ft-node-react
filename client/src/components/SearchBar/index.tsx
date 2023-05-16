import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center bg-white w-full py-4 px-8 rounded-md shadow-md">
      <input
        type="text"
        className="w-full h-full border-b py-2 outline-none border-text-taupeGray"
        placeholder="Search..."
      />
      <button>
        <IoSearchOutline className="w-8 h-8 text-text-taupeGray" />
      </button>
    </div>
  );
};

export default SearchBar;
