export const geoLocate = getWeather => {
  const fallBack = {
    lat: 39.7392358,
    long: -104.990251,
    name: "Denver, CO"
  };

  let newLoc = {};

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      function success(position) {
        newLoc = {
          lat: position.coords.latitude,
          long: position.coords.longitude,
          name: "Your current location"
        };
        return getWeather(newLoc);
      },
      function error(error_message) {
        // for when getting location results in an error
        return getWeather(fallBack);
      }
    );
  } else {
    return getWeather(fallBack);
  }
};
