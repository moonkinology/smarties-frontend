import React from "react";
import Brands from "../../data/Brands";

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
          list="brands-list"
          onChange={(event) => handleSearchChange(event)}
        />
        <datalist id="brands-list">
          {Brands.map((option) => (
            <option
              key={option.value}
              defaultValue={option.value}
              value={option.value}
            ></option>
          ))}
        </datalist>
      </form>
    </div>
  );
}

export default Search;
