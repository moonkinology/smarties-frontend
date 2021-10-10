import React from "react";
import DetailsMain from "./DetailsMain";
import MoreDetailsModal from "./MoreDetailsModal";
function SmartphoneDetails() {
  return (
    <div>
      {/* A JSX comment */}

      <div
        class="modal fade"
        id="detailsModalToggle"
        aria-hidden="true"
        aria-labelledby="detailsModalToggleLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="detailsModalToggleLabel">
                Modal 1
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div>
                <DetailsMain />
              </div>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-info"
                data-bs-target="#reviewsModalToggle"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                reviews
              </button>
              <button
                class="btn btn-dark"
                data-bs-target="#moreDetailsModalToggle"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                more details
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* moreDetails */}

      <div
        class="modal fade"
        id="moreDetailsModalToggle"
        aria-hidden="true"
        aria-labelledby="moreDetailsModalToggle"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="moreDetailsModalToggle">
                Modal 2
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">
              <table class="table table-striped">
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Jacob</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Larry the Bird</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="modal-footer">
              <button
                class="btn btn-warning"
                data-bs-target="#detailsModalToggle"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Back to first
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* reviews */}

      <div
        class="modal fade"
        id="reviewsModalToggle"
        aria-hidden="true"
        aria-labelledby="reviewsModalToggle"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="reviewsModalToggle">
                Modal 3
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">
              <p>Here comes a comment section</p>
            </div>

            <div class="modal-footer">
              <button
                class="btn btn-warning"
                data-bs-target="#detailsModalToggle"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Back to first
              </button>
            </div>
          </div>
        </div>
      </div>
      <a
        class="btn btn-success"
        data-bs-toggle="modal"
        href="#detailsModalToggle"
        role="button"
      >
        read more
      </a>
    </div>
  );
}

export default SmartphoneDetails;
