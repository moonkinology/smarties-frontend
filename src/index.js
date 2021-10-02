import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Carousel from "./components/Carousel";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <div className="container">
        <Carousel />
      </div>
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
