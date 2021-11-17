import React from "react";
import SmartphoneDetails from "./SmartphoneDetails";
import Info from "./Info";
import { useParams, Link } from "react-router-dom";
function SmartphoneCard(props) {
  const {
    id,
    platform,
    model,
    mainCamera,
    selfieCamera,
    priceCategory,
    battery,
    memory,
    ram,
    description,
    manufacturer,
    frontImageUrl,
  } = props.info;

  const setPlatformIcon = (platform) => {
    if (platform == "iOS") {
      return (
        <img
          className="platformIcon"
          src={require("../../assets/apple.png").default}
          alt="iOS"
        ></img>
      );
    } else {
      return (
        <img
          className="platformIcon"
          src={require("../../assets/android.png").default}
          alt="Android"
        ></img>
      );
    }
  };

  // <Info id={id} />
  return (
    <div className="d-flex justify-content-center  ">
      <div className="card ">
        <img src={frontImageUrl} className="card-img-top" alt="image" />
        <div className="card-body">
          <div className="fst-italic ">
            <h3 className="card-title  ">{setPlatformIcon(platform)}</h3>
            <h4 className="card-title  align-items-center  d-inline-block text-truncate">
              {manufacturer} {model}
            </h4>
          </div>

          <p className="card-text ">
            <p>
              {mainCamera.replace(/[^0-9]/g, "")} megepixels, {memory} GB /{" "}
              {ram} GB
            </p>
          </p>
          <div className=" d-flex   justify-content-center">
            <Link to={`/smartphoneInfo/${id}`}>
              <button className="btn   btn-outline-success">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmartphoneCard;
