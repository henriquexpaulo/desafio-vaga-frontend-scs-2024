import React from "react";
import arrowIcon from "../../assets/seta.svg";
import arrowIconRight from "../../assets/setadireita.svg";
import car1 from "../../assets/Carro1Main.svg";
import car2 from "../../assets/Carro2Main.svg";
import car3 from "../../assets/carRed.svg";
import Card from "../Card/Card";
import "./Main.css";

const Main = () => {
  return (
    <div className="cardsContainer">
      <div className="arrowContainer">
        <img className="arrowIcon" src={arrowIcon} alt="Arrow" />
      </div>
      <Card carImage={car1} carName="Mustang" carRate="8/10" carEfE="9/10" carVelo="180 Km/h" carYear={2015} />
      <Card carImage={car2} carName="Mustang" carRate="9/10" carEfE="9/10" carVelo="180 Km/h" carYear={2015} />
      <Card  carImage={car3} carName="Mustang" carRate="6/10" carEfE="9/10" carVelo="180 Km/h" carYear={2015} />
      <div className="arrowContainerRight">
      <img className="arrowIconRight" src={arrowIconRight} alt="Arrow" />
      </div>
    </div>
    
  );
};

export default Main;
