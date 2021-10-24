import React from "react";

function Search() {
  return (
    <div>
      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
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
