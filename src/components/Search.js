import React from "react";
import "../styles/Search.css";

const Search = ({ handleInput, handleOnClick }) => {
  return (
    <div className="search-container">
      <input
        onChange={handleInput}
        className="input"
        placeholder="Search for a place.."
      ></input>
      <button className="button" onClick={handleOnClick}>
        Search
      </button>
    </div>
  );
};

export default Search;
