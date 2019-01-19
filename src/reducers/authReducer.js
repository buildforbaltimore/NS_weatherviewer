import {
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER
} from "../actions/types";

const INITIAL_STATE = {
  user: null,
  isSignedIn: false,
  loading: false,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload,
        isSignedIn: true
      };
    case LOGIN_USER_FAIL:
      return { ...state, error: "Authentication Failed!", loading: false };
    case LOGIN_USER:
      return { ...state, error: "", loading: true };
    case LOGOUT_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
};
