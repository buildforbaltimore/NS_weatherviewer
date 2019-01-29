import React from "react";
// clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, or partly-cloudy-night
const Climacon = props => {
  let iconName;

  switch (props.iconName) {
    case "clear-day":
      iconName = "Sun";
      break;
    case "clear-night":
      iconName = "Moon";
      break;
    case "rain":
      iconName = "Cloud-Rain";
      break;
    case "snow":
      iconName = "Cloud-Snow-Alt";
      break;
    case "sleet":
      iconName = "Cloud-Hail";
      break;
    case "wind":
      iconName = "Wind";
      break;
    case "fog":
      iconName = "Cloud-Fog";
      break;
    case "cloudy":
      iconName = "Cloud";
      break;
    case "partly-cloudy-day":
      iconName = "Cloud-Sun";
      break;
    case "partly-cloudy-night":
      iconName = "Cloud-Moon";
      break;
    default:
      iconName = props.iconName;
  }

  const iconSrc = require(`../../assets/SVG/${iconName}.svg`);

  return <img src={iconSrc} alt={iconName} />;
};

export default Climacon;
