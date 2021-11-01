import React, { useState, useEffect, useRef } from "react";

function Filter({ filterCallback }) {
  const [formData, setFormData] = useState({
    platform: null,
    priceCategory: null,
    brand: null,
  });

  const handleFilter = () => {
    console.log(formData);

    filterCallback(formData);
  };

  const platforms = [
    {
      label: "iOS",
      value: "iOS",
    },
    {
      label: "Android",
      value: "Android",
    },
  ];

  const prices = [
    {
      value: "0",
      label: "Budget",
    },
    {
      value: "1",
      label: "Mid-Range",
    },
    {
      value: "2",
      label: "High-End",
    },
  ];
  const options = [
    {
      label: "Apple",
      value: "Apple",
    },
    {
      label: "Samsung",
      value: "Samsung",
    },
    {
      label: "Sony",
      value: "Sony",
    },
    {
      label: "Honor",
      value: "Honor",
    },
    {
      label: "Nokia",
      value: "Nokia",
    },
    {
      label: "RealMe",
      value: "RealMe",
    },
    {
      label: "Xiaomi",
      value: "Xiaomi",
    },
    {
      label: "OnePlus",
      value: "OnePlus",
    },
    {
      label: "Huawei",
      value: "Huawei",
    },
  ];
  useEffect(() => {
    handleFilter();
  }, [formData]);
  return (
    <div>
      <button
        className="btn btn-primary  "
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
      >
        Filter
      </button>

      <div
        className="offcanvas offcanvas-top"
        tabIndex="-1"
        id="offcanvasTop"
        aria-labelledby="filterCanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 id="filterCanvasLabel">Filter Options</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <form>
            <div className="d-flex justify-content-center  gap-3">
              <div className="col-2">
                <label htmlFor="platform" className="form-label mb-3">
                  Platform
                </label>

                <select
                  className="form-select"
                  id="platform"
                  aria-label="Default select example"
                  defaultValue={formData.platform}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      platform: e.target.value,
                    });
                  }}
                >
                  <option defaultValue></option>
                  {platforms.map((platform) => (
                    <option key={platform.value} defaultValue={platform.value}>
                      {platform.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-2">
                <label htmlFor="priceCategory" className="form-label mb-3">
                  Price Category
                </label>
                <select
                  className="form-select"
                  id="priceCategory"
                  aria-label="Default select example"
                  defaultValue={formData.priceCategory}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      priceCategory: e.target.value,
                    });
                  }}
                >
                  <option defaultValue></option>
                  {prices.map((price) => (
                    <option key={price.value} defaultValue={price.value}>
                      {price.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-2">
                <label htmlFor="brand" className="form-label mb-3">
                  brand
                </label>
                <select
                  className="form-select"
                  id="brand"
                  aria-label="Default select example"
                  defaultValue={formData.brand}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      brand: e.target.value,
                    });
                  }}
                >
                  <option defaultValue></option>
                  {options.map((option) => (
                    <option key={option.value} defaultValue={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Filter;
