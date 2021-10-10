import React from "react";

function DetailsTabs() {
  return (
    <div class="classic-tabs border rounded px-4 pt-1">
      <ul
        class="nav tabs-primary nav-justified"
        id="advancedTab"
        role="tablist"
      >
        <li class="nav-item">
          <a
            class="nav-link active show"
            id="description-tab"
            data-toggle="tab"
            href="#description"
            role="tab"
            aria-controls="description"
            aria-selected="true"
          >
            Description
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="info-tab"
            data-toggle="tab"
            href="#info"
            role="tab"
            aria-controls="info"
            aria-selected="false"
          >
            Information
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="reviews-tab"
            data-toggle="tab"
            href="#reviews"
            role="tab"
            aria-controls="reviews"
            aria-selected="false"
          >
            Reviews (1)
          </a>
        </li>
      </ul>
      <div class="tab-content" id="advancedTabContent">
        <div
          class="tab-pane fade show active"
          id="description"
          role="tabpanel"
          aria-labelledby="description-tab"
        >
          <h5>Product Description</h5>
          <p class="small text-muted text-uppercase mb-2">Shirts</p>
          <ul class="rating">
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="far fa-star fa-sm text-primary"></i>
            </li>
          </ul>
          <h6>12.99 $</h6>
          <p class="pt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim
            perferendis voluptates laboriosam. Distinctio, officia quis dolore
            quos sapiente tempore alias.
          </p>
        </div>
        <div
          class="tab-pane fade"
          id="info"
          role="tabpanel"
          aria-labelledby="info-tab"
        >
          <h5>Additional Information</h5>
          <table class="table table-striped table-bordered mt-3">
            <thead>
              <tr>
                <th scope="row" class="w-150 dark-grey-text h6">
                  Weight
                </th>
                <td>
                  <em>0.3 kg</em>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" class="w-150 dark-grey-text h6">
                  Dimensions
                </th>
                <td>
                  <em>50 × 60 cm</em>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="tab-pane fade"
          id="reviews"
          role="tabpanel"
          aria-labelledby="reviews-tab"
        >
          <h5>
            <span>1</span> review for <span>Fantasy T-shirt</span>
          </h5>
          <div class="media mt-3 mb-4">
            <img
              class="d-flex mr-3 z-depth-1"
              src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg"
              width="62"
              alt="Generic placeholder image"
            />
            <div class="media-body">
              <div class="d-sm-flex justify-content-between">
                <p class="mt-1 mb-2">
                  <strong>Marthasteward </strong>
                  <span>– </span>
                  <span>January 28, 2020</span>
                </p>
                <ul class="rating mb-sm-0">
                  <li>
                    <i class="fas fa-star fa-sm text-primary"></i>
                  </li>
                  <li>
                    <i class="fas fa-star fa-sm text-primary"></i>
                  </li>
                  <li>
                    <i class="fas fa-star fa-sm text-primary"></i>
                  </li>
                  <li>
                    <i class="fas fa-star fa-sm text-primary"></i>
                  </li>
                  <li>
                    <i class="far fa-star fa-sm text-primary"></i>
                  </li>
                </ul>
              </div>
              <p class="mb-0">Nice one, love it!</p>
            </div>
          </div>
          <hr />
          <h5 class="mt-4">Add a review</h5>
          <p>Your email address will not be published.</p>
          <div class="my-3">
            <ul class="rating mb-0">
              <li>
                <a href="#!">
                  <i class="fas fa-star fa-sm text-primary"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i class="fas fa-star fa-sm text-primary"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i class="fas fa-star fa-sm text-primary"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i class="fas fa-star fa-sm text-primary"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i class="far fa-star fa-sm text-primary"></i>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div class="md-form md-outline">
              <textarea
                id="form76"
                class="md-textarea form-control pr-6"
                rows="4"
              ></textarea>
              <label for="form76">Your review</label>
            </div>

            <div class="md-form md-outline">
              <input type="text" id="form75" class="form-control pr-6" />
              <label for="form75">Name</label>
            </div>

            <div class="md-form md-outline">
              <input type="email" id="form77" class="form-control pr-6" />
              <label for="form77">Email</label>
            </div>
            <div class="text-right pb-2">
              <button type="button" class="btn btn-primary">
                Add a review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsTabs;
