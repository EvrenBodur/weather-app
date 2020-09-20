import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  data: [],
  city: "",
  text: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WEATHER_DATA:
      return {
        ...state,
        data: action.payload.result,
        city: action.payload.city.toUpperCase(),
        isLoading: false,
      };
    case actionTypes.GET_INPUT:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};
