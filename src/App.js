import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Body from "./components/Body";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "./actions/fetchWeatherDataAction";
import { getInput } from "./actions/fetchWeatherDataAction";
import "./styles/App.css";

const App = () => {
  const dispatch = useDispatch();
  const { data, city, text } = useSelector((state) => state.weatherData);
  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(fetchWeatherData(text));
  }, [text, dispatch]);

  const handleOnClick = () => {
    dispatch(getInput(input));
  };

  const handleInput = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  return (
    <div className="app-container">
      <Header />
      <Search handleOnClick={handleOnClick} handleInput={handleInput} />
      <Body city={city} data={data} />
    </div>
  );
};

export default App;
