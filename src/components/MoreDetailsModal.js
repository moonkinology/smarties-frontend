import React from "react";

function MoreDetailsModal() {
  return (
    <div className=" d-flex p-4 justify-content-center">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#moreDetails"
      >
        more details
      </button>
      <div
        class="modal fade"
        id="moreDetails"
        tabindex="-1"
        aria-labelledby="moreDetailsLabel2"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="moreDetailsLabel">
                Details
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
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-info">
                read reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreDetailsModal;
