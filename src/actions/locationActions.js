import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import {
  FETCH_USER_LOCATIONS,
  FETCH_USER_LOCATIONS_SUCCESS,
  DELETE_USER_LOCATION,
  ADD_USER_LOCATION
} from "./types";

export const fetchUserLocations = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    dispatch({ type: FETCH_USER_LOCATIONS });

    firebase
      .database()
      .ref(`/users/${currentUser.uid}/locations`)
      .on("value", snapshot => {
        dispatch({
          type: FETCH_USER_LOCATIONS_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};
