import React from "react";
// clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, or partly-cloudy-night

const CurrentWeatherBG = props => {
  const bg = require(`../../assets/bgImg/${props.weatherType}.jpg`);

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgbroundPosition: "center"
      }}
    >
      {props.children}
    </div>
  );
};

export default CurrentWeatherBG;
