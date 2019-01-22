import { SELECT_LOCATION } from "../actions/types";

const INITIAL_STATE = {
  location: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_LOCATION:
      return { ...state, location: action.payload };
    default:
      return state;
  }
};
