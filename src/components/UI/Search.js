import React from "react";

function Search() {
  return (
    <div>
      <form>
        <input
          type="search"
          className="form-control form-control-dark"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>
    </div>
  );
}

export default Search;
