import React from "react";
import "../styles/WeatherCard.css";
const WeatherCard = ({ info }) => {
  return (
    <div className="weather-card-container">
      <div className="card-header">
        <img src={info.icon} alt={info.status} />
      </div>
      <div className="card-body">
        <span>Date: {info.date}</span>
        <span>Day: {info.day}</span>
        <span>Desc: {info.description}</span>
        <span>Degree: {info.degree}</span>
        <span>Max: {info.max}</span>
        <span>Min: {info.min}</span>
        <span>Night: {info.night}</span>
        <span>Humidity: {info.humidity}%</span>
      </div>
    </div>
  );
};

export default WeatherCard;
