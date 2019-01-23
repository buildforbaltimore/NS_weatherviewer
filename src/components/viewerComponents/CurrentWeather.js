import React from "react";
import CurrentWeatherBG from "./CurrentWeatherBG";

const CurrentWeather = props => {
  const { name, lat, long } = props.location;
  const { icon } = props.weather;

  return (
    <CurrentWeatherBG weatherType={icon}>
      <h3>{name}</h3>
      <p className="center-align">
        Lat: {lat}, Long: {long}
      </p>
    </CurrentWeatherBG>
  );
};

export default CurrentWeather;
