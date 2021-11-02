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
    <div className="d-flex justify-content-center">
      <div className="card" style={{ height: "450px" }}>
        <img src={frontImageUrl} className="card-img-top" alt="image" />
        <div className="card-body">
          <h3 className="card-title d-flex align-items-center">
            {setPlatformIcon(platform)}
          </h3>
          <h3 className="card-title d-flex align-items-center">
            {manufacturer} {model}
          </h3>

          <p className="card-text">
            <h5>
              {mainCamera} Megapixel Front camera , {memory} / {ram}.
            </h5>
          </p>
          <div className=" justify-content-center">
            <Link to={`/smartphoneInfo/${id}`}>
              <button className="btn btn-success ">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmartphoneCard;
