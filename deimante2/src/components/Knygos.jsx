import Knyga from "./Knyga";
import React from "react";
import { useState, useEffect } from "react";

const Knygos = () => {
  const [knygosData, setKnygosData] = useState([]);
  const [error, setError] = useState()
  const [tipas, setTipas] =useState([])

  useEffect(() => {
    fetch("https://in3.dev/knygos/")
      .then((response) => response.json())
      .then((data) => setKnygosData(data))
      .catch((error) => setError(error.message));
  }, []);

  useEffect(() => {
    fetch("https://in3.dev/knygos/types")
      .then((response) => response.json())
      .then((data) => setTipas(data))
      .catch((error) => setError(error.message));
  }, []);


  return (
    <>
      <h2>Books:</h2>
      <div className="row">
        {knygosData.map((ev) => (
          <Knyga
            key={ev.id}
            author={ev.author}
            title={ev.title}
            img={ev.img}
            price={ev.price}

            type={tipas.length && tipas.find((c) => ev.type === c.id).title}
          />
        ))}
        {error && error}
      </div>
    </>
  );
};

export default Knygos;