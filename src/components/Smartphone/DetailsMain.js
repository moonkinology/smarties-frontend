import React, { useEffect, useState } from "react";
import axios from "axios";
function DetailsMain({ id }) {
  const [details, setDetails] = useState([]);
  const [detailsError, setDetailsError] = useState([]);

  const detailsCancelTokenSource = axios.CancelToken.source();

  async function fetchDetails() {
    await axios({
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

  useEffect(() => {
    fetchDetails();
    return () => {
      detailsCancelTokenSource.cancel();
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
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

        <table className="table col-6">
          <thead>
            <tr>
              <th scope="col" colSpan="6" class="text-center">
                Important Features
              </th>
            </tr>
          </thead>
          <tbody>
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
    </div>
  );
}

export default DetailsMain;
