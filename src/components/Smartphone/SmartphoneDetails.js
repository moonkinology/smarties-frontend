import React, { useEffect, useState } from "react";
import DetailsMain from "./DetailsMain";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

function SmartphoneDetails({ id }) {
  const moreDetailsCancelTokenSource = axios.CancelToken.source();
  const votesCancelTokenSource = axios.CancelToken.source();
  const [moreDetails, setMoreDetails] = useState([]);
  const [voteCounts, setVoteCounts] = useState([]);

  const [moreDetailsError, setMoreDetailsError] = useState();
  const { currentUser } = useAuth();
  function handleVote(type, id) {
    const vote = {
      type: type,
      ownerId: id,
      voterId: currentUser.uid,
      receiverType: "s",
    };

    axios({
      method: "post",
      url: "http://localhost:8080/vt",
      data: vote,
    })
      .then((response) => {
        console.log("repone post like:" + response.data);
        fetchVotes(id);
      })
      .catch((error) => console.log("post like:" + error));
  }
  async function fetchMoreDetails() {
    await axios({
      method: "get",
      url: `http://localhost:8080/sped/${id}`,
      cancelToken: moreDetailsCancelTokenSource.token,
    }).then(
      (response) => {
        setMoreDetails(response.data);
      },
      (error) => {
        console.log("error");
      }
    );
  }

  async function handleLike() {
    const vote = {
      type: true,
      ownerId: id,
      voterId: currentUser,
      receiverType: "s",
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
      type: false,
      ownerId: id,
      voterId: currentUser.uid,
      receiverType: "s",
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

  async function fetchVotes(id) {
    try {
      const { data } = await axios({
        method: "get",
        url: `http://localhost:8080/vt/c-s/${id}`,
        cancelToken: votesCancelTokenSource.token,
      });
      setVoteCounts(data);
      console.log("voteCounts " + voteCounts);
    } catch (error) {
      console.log("error while fetching votes:" + error);
    }
  }

  useEffect(() => {
    fetchMoreDetails(id);
    fetchVotes(id);
    return () => {
      moreDetailsCancelTokenSource.cancel();
      votesCancelTokenSource.cancel();
    };
  }, []);

  return (
    <div className="d-flex align-items-center flex-column">
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
                {id}
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
                More Details
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

            <div className="modal-body m-1">
              <p>Here comes a comment section</p>
              <div className="d-flex align-items-end justify-content-end d-grid gap-4 ">
                <button
                  type="button"
                  className="btn btn-outline-success position-relative"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-hand-thumbs-up-fill "
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                  </svg>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                    {voteCounts.pos}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger position-relative"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-hand-thumbs-down-fill  "
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.378 1.378 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.896 1.896 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2.094 2.094 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.162 3.162 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.823 4.823 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591z" />
                  </svg>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info ">
                    {voteCounts.neg}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
              </div>

              {currentUser && (
                <button
                  className="btn btn-danger m-2"
                  data-bs-target="#detailsModalToggle"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                  onClick={() => handleVote(true, id)}
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
                  onClick={() => handleVote(false, id)}
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
        className="btn btn-success position-absolute bottom-0 start-50 translate-middle-x  m-2"
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
