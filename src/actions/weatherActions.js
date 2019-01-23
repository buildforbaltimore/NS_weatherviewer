import { SELECT_LOCATION, FETCH_WEATHER } from "./types";

const proxy = "https://cors-anywhere.herokuapp.com/";
const darkSkyKey = "62c131cc17c967f68488a151f5383bd0";

export const selectLocation = loc => {
  console.log(loc);
  return { type: SELECT_LOCATION, payload: loc };
};

export const fetchWeather = loc => async dispatch => {
  const { lat, long } = loc;

  try {
    const response = await fetch(
      `${proxy}https://api.darksky.net/forecast/${darkSkyKey}/${lat},${long}`
    );
    const weather = await response.json();

    return dispatch({ type: FETCH_WEATHER, payload: weather });
  } catch (err) {
    console.log(err);
  }
};
