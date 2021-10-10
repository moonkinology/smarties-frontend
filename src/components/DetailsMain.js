import React from "react";
import MoreDetails from "./MoreDetails";

function DetailsMain() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <table class="table">
            <img
              src="https://www.telekom.de/resources/images/655284/samsung-galaxy-s21-5g-phantom-gray-vorne.png"
              className="d-block w-100"
              alt="..."
            />
          </table>
        </div>
        <div className="col-6">
          <table class="table">
            <thead>
              <tr>
                <th scope="col" colspan="3">
                  Important Features
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td colspan="2">Otto</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td colspan="2">Thornton</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td colspan="2">Larry the Bird</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td colspan="2">Larry the Bird</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <MoreDetails />
    </div>
  );
}

export default DetailsMain;
