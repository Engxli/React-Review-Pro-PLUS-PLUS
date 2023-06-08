import React from "react";

const SearchBar = () => {
  return (
    <div>
      <input placeholder="Search" />
      <select>
        <option> Human</option>
        <option> Cat</option>
        <option> Dog</option>
      </select>
    </div>
  );
};

export default SearchBar;
