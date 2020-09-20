import * as actionTypes from "./actionTypes";

export const fetchWeatherData = (text) => (dispatch) => {
  fetch(
    `https://api.collectapi.com/weather/getWeather?data.lang=en&data.city=${text}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "apikey 7KEqFMaZ13PPclW9OdXpx7:3cXT2nfxzqEK3bRPDi1l6E",
      },
    }
  )
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: actionTypes.FETCH_WEATHER_DATA,
        payload: data,
      })
    );
};

export const getInput = (input) => (dispatch) => {
  dispatch({
    type: actionTypes.GET_INPUT,
    payload: input,
  });
};
