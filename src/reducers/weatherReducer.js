import {
  SELECT_LOCATION,
  FETCH_WEATHER,
  FETCH_WEATHER_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
  location: null,
  weather: null,
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_LOCATION:
      return { ...state, location: action.payload };
    case FETCH_WEATHER:
      return { ...state, loading: true };
    case FETCH_WEATHER_SUCCESS:
      return { ...state, weather: action.payload, loading: false };
    default:
      return state;
  }
};
