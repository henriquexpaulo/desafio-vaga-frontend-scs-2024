import React from "react";
import carYImg from "../../assets/data.svg";
import carVeloImg from "../../assets/velocidadeMaxima.svg";
import carEfEImg from "../../assets/efiEnergetica.svg";
import carRateImg from "../../assets/classificacaoPublico.svg";
import "./Card.css";

const Card = ({ carImage, carName, carYear, carVelo, carEfE, carRate }) => {
  return (
    <div className="cardContainer">
      <div className="card">
        <img className="carImage" src={carImage} alt={carName} />
        <div className="cardDetails">
          <p className="carName">{carName}</p>
          <ul className="cardInfoList">
            <li className="cardInfoItem">
              <img src={carYImg} alt="year" />
              <span>{carYear}</span>
            </li>
            <li className="cardInfoItem">
              <img src={carVeloImg} alt="speed" />
              <span>{carVelo}</span>
            </li>
            <li className="cardInfoItem">
              <img src={carEfEImg} alt="energy efficiency" />
              <span>{carEfE}</span>
            </li>
            <li className="cardInfoItem">
              <img src={carRateImg} alt="public rating" />
              <span>{carRate}</span>
            </li>
          </ul>
          <button className="viewCarBtn">Ver carro</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
