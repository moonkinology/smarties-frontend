import React, { useEffect, useState } from "react";
import SmartphoneCard from "./SmartphoneCard";
import Search from "../UI/Search";
import Filter from "../UI/Filter";
import axios from "axios";
import useFirestore from "../../hooks/UseFirestore";
import { storage, firestore, timestamp } from "../../firebase/config";

function Smartphones() {
  const [cardData, setCardData] = useState([]);
  const [error, setError] = useState();
  const cancelTokenSource = axios.CancelToken.source();
  function fetchData() {
    axios({
      method: "get",
      url: "http://localhost:8080/spc/all",
      cancelToken: cancelTokenSource.token,
    }).then(
      (response) => {
        setCardData(response.data);
        console.log(cardData);
      },
      (error) => {
        console.log("error");
        setError(error);
      }
    );
  }

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

        <Filter />
      </div>
      <div className="row mt-5">
        {cardData.map((data) => (
          <div className="col-sm-4 mb-5">
            <SmartphoneCard key={data.id} info={data} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Smartphones;
