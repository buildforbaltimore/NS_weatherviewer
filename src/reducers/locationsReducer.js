import {
  FETCH_USER_LOCATIONS,
  FETCH_USER_LOCATIONS_SUCCESS,
  RESET_LOCATIONS,
  ADD_USER_LOCATION,
  DELETE_USER_LOCATION
} from "../actions/types";

const INITIAL_STATE = {
  locs: {},
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_LOCATIONS:
      return { ...state, loading: true };
    case FETCH_USER_LOCATIONS_SUCCESS:
      return { ...state, locs: action.payload, loading: false };
    case RESET_LOCATIONS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
