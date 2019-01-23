if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    function success(position) {
      return {
        lat: position.coords.latitude,
        long: position.coords.longitude,
        name: "Your current location"
      };
    },
    function error(error_message) {
      // for when getting location results in an error
      return fallBack();
    }
  );
} else {
  return fallBack();
}

function fallBack() {
  return {
    lat: 39.7392358,
    long: -104.990251,
    name: "Denver, CO"
  };
}
