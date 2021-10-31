import React from "react";
import { Link, useHistory, NavLink } from "react-router-dom";
import Carousel from "./UI/Carousel";
function Home() {
  let history = useHistory();
  const handleExplore = () => {
    history.push("/smartphones");
  };
  return (
    <div className=" ">
      <Carousel />
      <div className="d-flex justify-content-center">
        <button
          type="button"
          onClick={handleExplore}
          className=" btn btn-primary  justify-content-center"
        >
          Explore Smartphones
        </button>
      </div>
    </div>
  );
}

export default Home;
