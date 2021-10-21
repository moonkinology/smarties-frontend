import React from "react";

function Carousel() {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active frame">
          <img
            src="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87269546/fee_786_587_png"
            className="d-block w-100 bd-placeholder-img pb-5"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block  ">
            <h5 className="text-primary">First slide label</h5>
            <p className="text-info">
              Some representative placeholder content for the first slide.
            </p>
          </div>
        </div>
        <div className="carousel-item frame">
          <img
            src="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87346356/fee_786_587_png"
            className="d-block w-100 bd-placeholder-img pb-5"
            alt="..."
          />

          <div className="carousel-caption d-none d-md-block">
            <h5 className="text-primary  ">Second slide label</h5>
            <p className="text-info  ">
              Some representative placeholder content for the second slide.
            </p>
          </div>
        </div>
        <div className="carousel-item frame">
          <img
            src="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_80748600/fee_786_587_png"
            className="d-block w-100 bd-placeholder-img pb-5"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="text-primary">Third slide label</h5>
            <p className="text-info">
              Some representative placeholder content for the third slide.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
