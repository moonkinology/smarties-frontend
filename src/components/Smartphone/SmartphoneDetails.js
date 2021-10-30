import React, { useEffect, useState } from "react";
import DetailsMain from "./DetailsMain";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

function SmartphoneDetails({ id }) {
  const moreDetailsCancelTokenSource = axios.CancelToken.source();
  const [moreDetails, setMoreDetails] = useState([]);
  const [moreDetailsError, setMoreDetailsError] = useState();
  const { currentUser } = useAuth();
  async function fetchMoreDetails() {
    await axios({
      method: "get",
      url: `http://localhost:8080/sped/${id}`,
      cancelToken: moreDetailsCancelTokenSource.token,
    }).then(
      (response) => {
        console.log(moreDetails);
      },
      (error) => {
        console.log("error");
      }
    );
  }

  async function fetchVotes() {
    const vote = {
      type: true,
      ownerId: id,
      voterId: currentUser,
      receiverType: "c",
    };
    try {
      const response = await axios({
        method: "get",
        url: `http://localhost:8080/vt/s/id=${id}`,
        data: vote,
      });
      console.log("votes resp: " + JSON.stringify(response.data));
    } catch (error) {
      console.log("error while fetching votes:" + error);
    }
  }

  async function handleLike() {
    const vote = {
      type: true,
      ownerId: id,
      voterId: currentUser,
      receiverType: "c",
    };
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8080/vt",
        data: vote,
      });
      console.log("repone post like:" + response.data);
    } catch (error) {
      console.log("post like:" + error);
    }
  }

  async function handleDislike() {
    const vote = {
      type: true,
      ownerId: id,
      voterId: currentUser,
      receiverType: "c",
    };
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8080/vt",
        data: vote,
      });
      console.log("repone post dislike:" + response.data);
    } catch (error) {
      console.log(" post dislike:" + error);
    }
  }

  useEffect(() => {
    fetchVotes();
    fetchMoreDetails();
    console.log(currentUser?.uid);
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

              {currentUser && (
                <button
                  className="btn btn-danger m-2"
                  data-bs-target="#detailsModalToggle"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                  onClick={handleLike}
                >
                  like
                </button>
              )}

              {currentUser && (
                <button
                  className="btn btn-success"
                  data-bs-target="#detailsModalToggle"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                  onClick={handleDislike}
                >
                  dislike
                </button>
              )}
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
