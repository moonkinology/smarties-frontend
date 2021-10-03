import React from "react";

function AdminForm() {
  return (
    <div>
      <form className="row g-3">
        <div className="col-md-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="platform"
            />
            <label className="form-check-label" for="platform">
              Android
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="platform"
              checked
            />
            <label className="form-check-label" for="platform">
              iOS
            </label>
          </div>
        </div>

        <div className="col-md-2">
          <label for="colorInput" class="form-label">
            Color
          </label>
          <input
            type="color"
            class="form-control form-control-color"
            id="colorInput"
            value="#563d7c"
            title="Choose your color"
          />
        </div>

        <div className="col-md-2">
          <label for="mainCameraInput" className="form-label">
            main camera - megapixel
          </label>
          <input type="number" className="form-control" id="mainCameraInput" />
        </div>

        <div className="col-md-2">
          <label for="frontCameraInput" className="form-label">
            front camera - megapixel
          </label>
          <input type="number" className="form-control" id="frontCameraInput" />
        </div>

        <div className="col-md-2">
          <label for="batteryInput" className="form-label">
            battery- mAh
          </label>
          <input type="number" className="form-control" id="batteryInput" />
        </div>

        <div className="col-md-2">
          <label for="ramInput" className="form-label">
            ram
          </label>
          <input type="number" className="form-control" id="ramInput" />
        </div>

        <div className="col-md-2">
          <label for="displaySizeInput" className="form-label">
            display Size
          </label>
          <input type="number" className="form-control" id="displaySizeInput" />
        </div>

        <div className="col-md-2">
          <label for="displayResolutionInput" className="form-label">
            display resolution
          </label>
          <input
            type="text"
            className="form-control"
            id="displayResolutionInput"
          />
        </div>

        <div className="col-md-2">
          <label for="displayTypeInput" className="form-label">
            display type
          </label>
          <input type="text" className="form-control" id="displayTypeInput" />
        </div>

        <div className="col-md-2">
          <label for="heightInput" className="form-label">
            height
          </label>
          <input type="number" className="form-control" id="heightInput" />
        </div>

        <div className="col-md-2">
          <label for="widthInput" className="form-label">
            width
          </label>
          <input type="number" className="form-control" id="widthInput" />
        </div>
        <div className="col-md-2">
          <label for="depthInput" className="form-label">
            depth
          </label>
          <input type="number" className="form-control" id="depthInput" />
        </div>

        <div className="col-md-2">
          <label for="weightInput" className="form-label">
            weight
          </label>
          <input type="number" className="form-control" id="weightInput" />
        </div>

        <div className="col-md-2">
          <label for="priceCategoryRange" class="form-label">
            price Category
          </label>
          <input
            type="range"
            class="form-range"
            min="0"
            max="2"
            id="priceCategoryRange"
          />
        </div>

        <div className="col-md-12">
          <label for="brand" className="form-label">
            brand
          </label>
          <select
            className="form-select"
            id="brand"
            aria-label="Default select example"
          >
            <option selected></option>
            <option value="1">Apple</option>
            <option value="2">Samsung</option>
            <option value="3">Sony</option>
            <option value="4">Xiaomi</option>
            <option value="5">RealMe</option>
            <option value="6">Huawei</option>
            <option value="7">Honor</option>
            <option value="8">OnePlus</option>
            <option value="9">Nokia</option>
          </select>
        </div>
        <div className="col-md-12">
          <label for="releaseDateInput" className="form-label">
            release Date
          </label>
          <input type="date" className="form-control" id="releaseDateInput" />
        </div>

        <div className="mb-3 col-md-12">
          <label for="descriptionInput" className="form-label">
            description
          </label>
          <textarea
            className="form-control"
            id="descriptionInput"
            rows="4"
          ></textarea>
        </div>

        <div className="input-group mb-3  col-md-12">
          <label for="inputGroupFile01" className="form-label  col-md-12">
            front Image
          </label>
          <input
            type="file"
            className="form-control"
            id="inputGroupFile01"
            accept="image/png, image/svg, image/jpeg"
          />
          <label className="input-group-text" for="inputGroupFile01">
            Upload
          </label>
        </div>

        <div className="input-group mb-3 col-md-12">
          <label for="inputGroupFile02" className="form-label col-md-12">
            back Image
          </label>
          <input
            type="file"
            className="form-control"
            id="inputGroupFile02"
            accept="image/png, image/svg, image/jpeg"
          />
          <label className="input-group-text" for="inputGroupFile02">
            Upload
          </label>
        </div>
        <button type="button" className="btn btn-primary">
          check image upload status
        </button>
        <span className="badge bg-success">Success</span>
        <span className="badge bg-danger">Danger</span>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AdminForm;
