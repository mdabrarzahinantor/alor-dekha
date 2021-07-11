import React from "react";
import { Link } from "react-router-dom";

function Search() {
  return (
    <Link to="/search" className="main-search">
      <form className="main-search-input input">
        <input id="search" />
        <label htmlFor="search">
          <i class="fas fa-search    "></i>{" "}
        </label>
      </form>
    </Link>
  );
}

export default Search;
