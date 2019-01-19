import {
  FETCH_USER_LOCATIONS_SUCCESS,
  ADD_USER_LOCATION,
  DELETE_USER_LOCATION
} from "../actions/types";

const INITIAL_STATE = {
  locs: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_LOCATIONS_SUCCESS:
      return { ...state, locs: action.payload };
    default:
      return state;
  }
};
