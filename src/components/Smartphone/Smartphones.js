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
  async function fetchData() {
    await axios({
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

  cardData.map((data) => console.log("xx: " + data.platform));
  return (
    <div className="d-flex justify-content-center m-2 gap-2">
      <Search />

      <Filter />
      <div>
        {cardData.map((data) => (
          <SmartphoneCard key={data.id} info={data} />
        ))}
      </div>
    </div>
  );
}

export default Smartphones;
