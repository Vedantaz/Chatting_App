import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="flex p-4 px-6">
      <form action="" className="flex items-center w-full">
        <div className="relative flex-grow">
          <input
            type="text"
            className="input input-bordered w-full rounded-lg pl-4 pr-10 py-2 transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 hover:bg-white"
            placeholder="Search"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition duration-200"
          >
            <IoSearch size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
