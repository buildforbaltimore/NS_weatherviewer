import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import {
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  RESET_LOCATIONS
} from "./types";

export const logoutUser = () => {
  return dispatch => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: LOGOUT_USER });
        dispatch({ type: RESET_LOCATIONS });
      });
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(error => {
        console.log(error);
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => createUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserFail = dispatch => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};

const createUserSuccess = (dispatch, user) => {
  // Add initial locations to database
  const defaultLocs = {
    0: {
      name: "Denver, CO",
      lat: 39.7392358,
      long: -104.990251
    },
    1: {
      name: "New York City, NY",
      lat: 40.7127753,
      long: -74.0059728
    },
    2: {
      name: "Austin, TX",
      lat: 30.267153,
      long: -97.74306079999999
    }
  };

  firebase
    .database()
    .ref(`/users/${user.user.uid}/locations`)
    .set(defaultLocs)
    .then(() => {
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
      });
    });
};
