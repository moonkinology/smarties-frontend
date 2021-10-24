import React, { useState, useEffect, useRef } from "react";
import Uploader from "./Uploader";
import axios from "axios";
import useFirestore from "../../hooks/UseFirestore";
import { storage, firestore, timestamp } from "../../firebase/config";

function AdminForm() {
  const [frontImageUrl, setFirstFileUrl] = useState("");
  const [backImageUrl, setSecondFileUrl] = useState("");
  const [formData, setFormData] = useState({
    platform: "Android",
    model: "",
    color: "#563d7c",
    mainCamera: "",
    frontCamera: "",
    battery: "",
    ram: "",
    memory: "",
    displaySize: "",
    displayResolution: "",
    displayType: "",
    height: "",
    width: "",
    depth: "",
    weight: "",
    priceCategory: 1,
    brand: "",
    releaseDate: "",
    description: "",
    frontImageURL: "",
    backImageURL: "",
  });

  const setFirstUrl = (url) => {
    setFormData({
      ...formData,
      frontImageURL: url,
    });
  };
  const setSecondUrl = (url) => {
    setFormData({
      ...formData,
      backImageURL: url,
    });
  };

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

  const { docs } = useFirestore("images");
  const [firstFileKey, setFirstFileKey] = useState("");
  const [secondFileKey, setSecondFileKey] = useState("");
  const [firstFile, setFirstFile] = useState(null);

  const [secondFile, setSecondFile] = useState(null);

  const [firstFileUploadError, setFirstFileUploadError] = useState(null);

  const [secondFileUploadError, setsecondFileUploadError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const secondFileChangeHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setSecondFile(selectedFile);
    } else {
      setSecondFile(null);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    const image = {
      firstUrl: formData.frontImageURL,
      secondUrl: formData.backImageURL,
    };

    axios({
      method: "post",
      url: "http://localhost:8080/img",
      data: image,
    }).then(
      (response) => {
        console.log("image:" + response.data);
        postSmartphone(response.data);
      },
      (error) => {
        console.log("image:" + error);
      }
    );
  };

  function postSmartphone(imageId) {
    const smartphone = {
      platform: formData.platform,
      model: formData.model,
      mainCamera: formData.mainCamera,
      selfieCamera: formData.frontCamera,
      battery: formData.battery,
      memory: formData.memory,
      ram: formData.ram,
      color: formData.color,
      releaseDate: formData.releaseDate,
      description: formData.description,
      displaySize: formData.displaySize,
      displayResolution: formData.displayResolution,
      displayType: formData.displayType,
      manufacturer: formData.brand,
      height: formData.height,
      width: formData.width,
      depth: formData.depth,
      weight: formData.weight,
      priceCategory: formData.priceCategory,
      images: imageId,
    };
    axios({
      method: "post",
      url: "http://localhost:8080/sp",
      data: smartphone,
    }).then(
      (response) => {
        console.log("smartphone:" + response.data);
      },
      (error) => {
        console.log("smartphone:" + error);
      }
    );
  }
  const firstFileChangeHandler = (e) => {
    let selectedFile = e.target.files[0];

    if (selectedFile && types.includes(selectedFile.type)) {
      setFirstFileUrl("sda2131312");
      setFirstFile(selectedFile);
    } else {
      setFirstFile(null);
    }
  };

  const collectionRef = firestore.collection("images");

  return (
    <div>
      <form className="row g-3" onSubmit={(e) => submitHandler(e)}>
        <div className="col-md-2">
          <div className="form-check">
            <input
              className="form-check-input"
              defaultValue={formData.platform}
              type="checkbox"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  platform: "Android",
                });
              }}
              id="platform"
              checked={formData.platform === "Android"}
            />
            <label className="form-check-label" htmlFor="platform">
              Android
            </label>
          </div>

          <div className="form-check">
            <input
              checked={formData.platform === "iOS"}
              className="form-check-input"
              type="checkbox"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  platform: "iOS",
                });
              }}
              id="platform"
            />
            <label className="form-check-label" htmlFor="platform">
              iOS
            </label>
          </div>
        </div>

        <div className="col-md-2">
          <label htmlFor="colorInput" className="form-label">
            Color
          </label>
          <input
            type="color"
            className="form-control form-control-color"
            id="colorInput"
            defaultValue={formData.color}
            onChange={(e) => {
              setFormData({
                ...formData,
                color: e.target.value,
              });
            }}
            title="Choose your color"
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="mainCameraInput" className="form-label">
            main camera - megapixel
          </label>
          <input
            type="number"
            required
            className="form-control"
            id="mainCameraInput"
            defaultValue={formData.mainCamera}
            onChange={(e) => {
              setFormData({
                ...formData,
                mainCamera: e.target.value,
              });
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="frontCameraInput" className="form-label">
            front camera - megapixel
          </label>
          <input
            required
            type="number"
            className="form-control"
            id="frontCameraInput"
            defaultValue={formData.frontCamera}
            onChange={(e) => {
              setFormData({
                ...formData,
                frontCamera: e.target.value,
              });
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="batteryInput" className="form-label">
            battery- mAh
          </label>
          <input
            required
            type="number"
            className="form-control"
            id="batteryInput"
            defaultValue={formData.battery}
            onChange={(e) => {
              setFormData({
                ...formData,
                battery: e.target.value,
              });
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="ramInput" className="form-label">
            ram
          </label>
          <input
            required
            type="number"
            className="form-control"
            id="ramInput"
            defaultValue={formData.ram}
            onChange={(e) => {
              setFormData({
                ...formData,
                ram: e.target.value,
              });
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="memoryInput" className="form-label">
            meomry
          </label>
          <input
            required
            type="number"
            className="form-control"
            id="memoryInput"
            defaultValue={formData.memory}
            onChange={(e) => {
              setFormData({
                ...formData,
                memory: e.target.value,
              });
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="displaySizeInput" className="form-label">
            display Size
          </label>
          <input
            required
            type="number"
            className="form-control"
            id="displaySizeInput"
            defaultValue={formData.displaySize}
            onChange={(e) => {
              setFormData({
                ...formData,
                displaySize: e.target.value,
              });
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="displayResolutionInput" className="form-label">
            display resolution
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="displayResolutionInput"
            defaultValue={formData.displayResolution}
            onChange={(e) => {
              setFormData({
                ...formData,
                displayResolution: e.target.value,
              });
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="displayTypeInput" className="form-label">
            display type
          </label>
          <input
            type="text"
            className="form-control"
            id="displayTypeInput"
            defaultValue={formData.displayType}
            onChange={(e) => {
              setFormData({
                ...formData,
                displayType: e.target.value,
              });
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="heightInput" className="form-label">
            height
          </label>
          <input
            required
            type="number"
            className="form-control"
            id="heightInput"
            defaultValue={formData.height}
            onChange={(e) => {
              setFormData({
                ...formData,
                height: e.target.value,
              });
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="widthInput" className="form-label">
            width
          </label>
          <input
            required
            type="number"
            className="form-control"
            id="widthInput"
            defaultValue={formData.width}
            onChange={(e) => {
              setFormData({
                ...formData,
                width: e.target.value,
              });
            }}
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="depthInput" className="form-label">
            depth
          </label>
          <input
            required
            type="number"
            className="form-control"
            id="depthInput"
            defaultValue={formData.depth}
            onChange={(e) => {
              setFormData({
                ...formData,
                depth: e.target.value,
              });
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="weightInput" className="form-label">
            weight
          </label>
          <input
            required
            type="number"
            className="form-control"
            id="weightInput"
            defaultValue={formData.weight}
            onChange={(e) => {
              setFormData({
                ...formData,
                weight: e.target.value,
              });
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="priceCategoryRange" className="form-label">
            price Category
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="2"
            id="priceCategoryRange"
            defaultValue={formData.priceCategory}
            onChange={(e) => {
              setFormData({
                ...formData,
                ram: e.target.value,
              });
            }}
          />
        </div>

        <div className="col-md-12">
          <label htmlFor="brand" className="form-label">
            brand
          </label>
          <select
            required
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

        <div className="col-md-3">
          <label htmlFor="modelInput" className="form-label">
            model
          </label>
          <input
            required
            rows="2"
            className="form-control"
            id="modelInput"
            defaultValue={formData.model}
            onChange={(e) => {
              setFormData({
                ...formData,
                model: e.target.value,
              });
            }}
          />
        </div>

        <div className="col-md-12">
          <label htmlFor="releaseDateInput" className="form-label">
            release Date
          </label>
          <input
            required
            type="date"
            className="form-control"
            id="releaseDateInput"
            defaultValue={formData.releaseDate}
            onChange={(e) => {
              setFormData({
                ...formData,
                releaseDate: e.target.value,
              });
            }}
          />
        </div>

        <div className="mb-3 col-md-12">
          <label htmlFor="descriptionInput" className="form-label">
            description
          </label>
          <textarea
            required
            className="form-control"
            id="descriptionInput"
            rows="4"
            defaultValue={formData.description}
            onChange={(e) => {
              setFormData({
                ...formData,
                description: e.target.value,
              });
            }}
          ></textarea>
        </div>

        <div className="input-group mb-3  col-md-12">
          <label htmlFor="inputGroupFile01" className="form-label  col-md-12">
            front Image
          </label>
          <input
            type="file"
            key={firstFileKey}
            onChange={firstFileChangeHandler}
            className="form-control"
            id="inputGroupFile01"
            accept="image/png, image/svg, image/jpeg"
          />
          <div className="col-md-12">
            {firstFile && (
              <Uploader
                file={firstFile}
                setFile={setFirstFileKey}
                setUrl={setFirstUrl}
              />
            )}
          </div>
        </div>

        <div className="input-group mb-3 col-md-12">
          <label htmlFor="inputGroupFile02" className="form-label col-md-12">
            back Image
          </label>
          <input
            type="file"
            className="form-control"
            id="inputGroupFile02"
            key={secondFileKey}
            onChange={secondFileChangeHandler}
            accept="image/png, image/svg, image/jpeg"
          />
        </div>
        <div className="col-md-12">
          {secondFile && (
            <Uploader
              file={secondFile}
              setFile={setSecondFileKey}
              setUrl={setSecondUrl}
            />
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={
            formData.frontImageURL === "" || formData.backImageURL === ""
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AdminForm;
