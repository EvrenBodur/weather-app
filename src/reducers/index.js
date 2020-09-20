import { combineReducers } from "redux";
import fetchWeatherDataReducer from "../reducers/fetchWeatherDataReducer";

const reducers = {
  weatherData: fetchWeatherDataReducer,
};

const rootReducer = combineReducers(reducers);
export default rootReducer;
