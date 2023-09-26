import React, { useState, useEffect } from "react";
import axios from "axios";
import "../pages/Advice.css";

function Advice() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="home-container">
      <div className="home-sub-container">
        <div className="advice-text-container">
          <h1 className="advice-text">{advice}</h1>
        </div>
        <div className="">
          <button onClick={fetchAdvice} className="advice-text-button">
            <span className="p-3 text-lg">Give Me Advice</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Advice;
