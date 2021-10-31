import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
function Info() {
  const { id } = useParams();
  const moreDetailsCancelTokenSource = axios.CancelToken.source();
  const votesCancelTokenSource = axios.CancelToken.source();
  const [moreDetails, setMoreDetails] = useState([]);
  const [voteCounts, setVoteCounts] = useState([]);
  const { currentUser } = useAuth();

  const [details, setDetails] = useState([]);
  const [detailsError, setDetailsError] = useState([]);

  const detailsCancelTokenSource = axios.CancelToken.source();

  function fetchDetails(id) {
    axios({
      method: "get",
      url: `http://localhost:8080/spd/${id}`,
      cancelToken: detailsCancelTokenSource.token,
    }).then(
      (response) => {
        setDetails(response.data);
        console.log("details" + details);
      },
      (error) => {
        console.log("error");
        setDetailsError(error);
      }
    );
  }

  function handleVote(type, id) {
    const vote = {
      type: type,
      ownerId: id,
      voterId: currentUser,
      receiverType: "s",
    };

    axios({
      method: "post",
      url: "http://localhost:8080/vt",
      data: vote,
    })
      .then((response) => {
        console.log("repone post like:" + response.data);
      })
      .catch((error) => console.log("post like:" + error));
  }

  function fetchVotes(id) {
    axios({
      method: "get",
      url: `http://localhost:8080/vt/c-s/${id}`,
      cancelToken: votesCancelTokenSource.token,
    })
      .then((response) => {
        setVoteCounts(response.data);
        console.log("voteCounts " + voteCounts);
      })

      .catch((error) => console.log("error while fetching votes:" + error));
  }
  const fetchMoreDetails = (id) => {
    axios({
      method: "get",
      url: `http://localhost:8080/sped/${id}`,
      cancelToken: moreDetailsCancelTokenSource.token,
    }).then(
      (response) => {
        setMoreDetails(response.data);
        console.log(
          "fetching extra details for id : " +
            id +
            "data is equal to " +
            response.data
        );
      },
      (error) => {
        console.log("error");
      }
    );
  };
  useEffect(() => {
    fetchMoreDetails(id);
    fetchVotes(id);
    fetchDetails(id);
    return () => {
      moreDetailsCancelTokenSource.cancel();
      votesCancelTokenSource.cancel();
      detailsCancelTokenSource.cancel();
    };
  }, []);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-6">
          <img
            src={details.frontImageUrl}
            className="d-block w-100  "
            alt="..."
          />
        </div>
        <div className="col-6">
          <img
            src={details.backImageUrl}
            className="d-block w-100  "
            alt="..."
          />
        </div>
        <div className="col-6 ">
          <table className="table table-striped justify-content-center">
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
              <tr>
                <th scope="row">Platform</th>
                <td colSpan="2">{details.platform}</td>
              </tr>
              <tr>
                <th scope="row">Model</th>
                <td colSpan="2">{details.model}</td>
              </tr>
              <tr>
                <th scope="row">Main Camera</th>
                <td colSpan="2">{details.mainCamera}</td>
              </tr>
              <tr>
                <th scope="row">Front Camera</th>
                <td colSpan="2">{details.selfieCamera}</td>
              </tr>
              <tr>
                <th scope="row">Battery (mAh)</th>
                <td colSpan="2">{details.battery}</td>
              </tr>

              <tr>
                <th scope="row">Memory </th>
                <td colSpan="2">{details.memory}</td>
              </tr>

              <tr>
                <th scope="row">RAM</th>
                <td colSpan="2">{details.ram}</td>
              </tr>

              <tr>
                <th scope="row">Release Date</th>
                <td colSpan="2">{details.releaseDate}</td>
              </tr>
              <tr>
                <th scope="row">Display Size (Inch)</th>
                <td colSpan="2">{details.displaySize}</td>
              </tr>

              <tr>
                <th scope="row">Display Resolution</th>
                <td colSpan="2">{details.displayResolution}</td>
              </tr>
              <tr>
                <th scope="row">Manufacturer</th>
                <td colSpan="2">{details.manufacturer}</td>
              </tr>
              <tr>
                <th scope="row">Height</th>
                <td colSpan="2">{details.height}</td>
              </tr>
              <tr>
                <th scope="row">Width</th>
                <td colSpan="2">{details.width}</td>
              </tr>
              <tr>
                <th scope="row">Depth</th>
                <td colSpan="2">{details.depth}</td>
              </tr>
              <tr>
                <th scope="row">Weight</th>
                <td colSpan="2">{details.weight}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-center">
          <Link to={`/smartphoneReview/${id}`}>
            <button className="btn btn-success justify-content-center ">
              Read Reviews
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Info;
