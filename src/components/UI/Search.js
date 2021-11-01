import React from "react";

function Search({ searchCallback }) {
  const handleSearchChange = (event) => {
    console.log(event.target.value);

    searchCallback(event.target.value);
  };
  return (
    <div>
      <form>
        <input
          type="search"
          className="form-control form-control-dark"
          placeholder="Search..."
          aria-label="Search"
          onChange={(event) => handleSearchChange(event)}
        />
      </form>
    </div>
  );
}

export default Search;
