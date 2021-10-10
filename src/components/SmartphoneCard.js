import React from "react";

function SmartphoneCard() {
  return (
    <div>
      <div class="card" style={{ width: " 18rem" }}>
        <img
          src="https://www.telekom.de/resources/images/655284/samsung-galaxy-s21-5g-phantom-gray-vorne.png"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            type="button"
            class="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default SmartphoneCard;
