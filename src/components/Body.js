import React from "react";
import BodyHeader from "./BodyHeader";
import WeatherCard from "./WeatherCard";
import "../styles/Body.css";

const Body = ({ city, data }) => {
  return (
    <div className="body-container">
      <BodyHeader city={city} />
      <div className="card-container">
        {data.map((info) => (
          <WeatherCard key={info.day} info={info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
