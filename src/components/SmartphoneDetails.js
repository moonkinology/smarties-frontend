import React from "react";
import DetailsTabs from "./DetailsTabs";
import DetailsMain from "./DetailsMain";
import MoreDetailsModal from "./MoreDetailsModal";
function SmartphoneDetails() {
  return (
    <div>
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
                <DetailsTabs />
              </div>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-info"
                data-bs-target="#moreDetailsModalToggle"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                more info
              </button>
            </div>
          </div>
        </div>
      </div>
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
