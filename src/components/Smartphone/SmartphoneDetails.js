import React, { useEffect, useState } from "react";
import DetailsMain from "./DetailsMain";
import axios from "axios";

function SmartphoneDetails({ id }) {
  const moreDetailsCancelTokenSource = axios.CancelToken.source();
  const [moreDetails, setMoreDetails] = useState([]);
  const [moreDetailsError, setMoreDetailsError] = useState();

  async function fetchMoreDetails() {
    await axios({
      method: "get",
      url: `http://localhost:8080/sped/${id}`,
      cancelToken: moreDetailsCancelTokenSource.token,
    }).then(
      (response) => {
        setMoreDetails(response.data);
        console.log(moreDetails);
      },
      (error) => {
        console.log("error");
        setMoreDetailsError(error);
      }
    );
  }

  useEffect(() => {
    fetchMoreDetails();
    return () => {
      moreDetailsCancelTokenSource.cancel();
    };
  }, []);

  return (
    <div>
      {/* A JSX comment */}

      <div
        className="modal fade"
        id="detailsModalToggle"
        aria-hidden="true"
        aria-labelledby="detailsModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="detailsModalToggleLabel">
                Modal 1
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <DetailsMain id={id} />
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-info"
                data-bs-target="#reviewsModalToggle"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                reviews
              </button>
              <button
                className="btn btn-dark"
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
        className="modal fade"
        id="moreDetailsModalToggle"
        aria-hidden="true"
        aria-labelledby="moreDetailsModalToggle"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="moreDetailsModalToggle">
                Modal 2
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <th>Color</th>
                    <td>{moreDetails.color}</td>
                  </tr>
                  <tr>
                    <th>Price Category</th>
                    <td>{moreDetails.priceCategory}</td>
                  </tr>
                  <tr>
                    <th>Display Type</th>
                    <td>{moreDetails.displayType}</td>
                  </tr>
                  <tr>
                    <th>Description</th>
                    <td>{moreDetails.description}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-warning"
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
        className="modal fade"
        id="reviewsModalToggle"
        aria-hidden="true"
        aria-labelledby="reviewsModalToggle"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="reviewsModalToggle">
                Modal 3
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <p>Here comes a comment section</p>
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-warning"
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
        className="btn btn-success"
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
