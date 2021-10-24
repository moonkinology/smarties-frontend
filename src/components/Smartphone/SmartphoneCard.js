import React from "react";
import SmartphoneDetails from "./SmartphoneDetails";
function SmartphoneCard(props) {
  const {
    id,
    platform,
    model,
    mainCamera,
    selfieCamera,
    battery,
    memory,
    ram,
    description,
    manufacturer,
    frontImageUrl,
  } = props.info;

  return (
    <div>
      <div className="card" style={{ width: " 18rem" }}>
        <img
          src="https://www.telekom.de/resources/images/655284/samsung-galaxy-s21-5g-phantom-gray-vorne.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {manufacturer} - {platform} : {model}
          </h5>
          <p className="card-text">
            {mainCamera} Megapixel Front camera , {memory} / {ram}.
          </p>
          <SmartphoneDetails id={id} />
        </div>
      </div>
    </div>
  );
}

export default SmartphoneCard;
