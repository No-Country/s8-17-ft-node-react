import Link from "next/link";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center bg-white w-full py-4 px-8 rounded-md shadow-md">
      <input
        type="text"
        className="w-full h-full bg-white border-b py-2 outline-none border-light"
        placeholder="Search..."
      />
      <Link href="/generator">
        <button>
          <IoSearchOutline className="w-8 h-8 text-light" />
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;
