import React, { useEffect } from "react";

import { Link, useHistory, NavLink } from "react-router-dom";
import Carousel from "./Carousel";
import Particle from "./Particle";
function Home() {
  let history = useHistory();
  const handleExplore = () => {
    history.push("/smartphones");
  };

  return (
    <div>
      <p className="overlay d-flex justify-content-center overlay mt-5 mb-5  text-break  ">
        Welcome to the Smarties Website, where you can read about smartphones,
        write reviews, like, dislike and discuss about specific smartphones
      </p>

      <div className="d-flex justify-content-center overlay  mt-5 ">
        <div>
          <button
            type="button"
            onClick={handleExplore}
            className=" btn btn-primary    justify-content-center"
          >
            Explore Smartphones
          </button>
        </div>
      </div>
      <Particle />
    </div>
  );
}

export default Home;
