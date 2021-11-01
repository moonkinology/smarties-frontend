import React, { useEffect, useState } from "react";
import SmartphoneCard from "./SmartphoneCard";
import Search from "../UI/Search";
import Filter from "../UI/Filter";
import axios from "axios";
import useFirestore from "../../hooks/UseFirestore";
import { storage, firestore, timestamp } from "../../firebase/config";

function Smartphones() {
  const [cardData, setCardData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState();
  const [filter, SetFilter] = useState(true);
  const cancelTokenSource = axios.CancelToken.source();
  function fetchData() {
    axios({
      method: "get",
      url: "http://localhost:8080/spc/all",
      cancelToken: cancelTokenSource.token,
    }).then(
      (response) => {
        setCardData(response.data);
        setFilteredData(response.data);
        console.log(cardData);
      },
      (error) => {
        console.log("error");
        setError(error);
      }
    );
  }

  const applyFilter = ({ platform, priceCategory, brand }) => {
    console.log(
      "platform: " +
        platform +
        " priceCategory: " +
        priceCategory +
        " brand: " +
        brand
    );
    if (platform && brand && priceCategory) {
      const data = cardData.filter(
        (data) => data.platform === platform && brand && data.brand === brand
      );
      SetFilter((prev) => !prev);
      setFilteredData(data);
    }
    if (platform && brand) {
      const data = cardData.filter(
        (data) => data.platform === platform && brand && data.brand === brand
      );
      SetFilter((prev) => !prev);
      setFilteredData(data);
    }
    if (platform) {
      const data = cardData.filter((data) => data.platform === platform);
      SetFilter((prev) => !prev);
      setFilteredData(data);
    }
  };

  };
  useEffect(() => {
    fetchData();

    return () => {
      cancelTokenSource.cancel();
    };
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-center m-2 gap-2">
        <Search />

        <Filter filterCallback={applyFilter} />
      </div>
      <div className="row mt-5">
        {filteredData.map((data) => (
          <div key={data.id} className="col-12 col-md-6 col-xl-4 col- mb-5">
            <SmartphoneCard info={data} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Smartphones;
