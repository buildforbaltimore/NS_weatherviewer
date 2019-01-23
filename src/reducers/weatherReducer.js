import { SELECT_LOCATION, FETCH_WEATHER } from "../actions/types";

const INITIAL_STATE = {
  location: {},
  weather: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_LOCATION:
      return { ...state, location: action.payload };
    case FETCH_WEATHER:
      return { ...state, weather: action.payload };
    default:
      return state;
  }
};
