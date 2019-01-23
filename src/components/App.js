import React, { Component } from "react";
import { connect } from "react-redux";
import { selectLocation, fetchWeather } from "../actions/weatherActions";
import firebase from "firebase/app";
import Header from "./headerComponents/Header";
import Viewer from "./viewerComponents/Viewer";

class App extends Component {
  componentDidMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDuF9cTmjQ-TLudImXudbsM0NhhnIYhPo4",
      authDomain: "weatherviewer-fe811.firebaseapp.com",
      databaseURL: "https://weatherviewer-fe811.firebaseio.com",
      projectId: "weatherviewer-fe811",
      storageBucket: "weatherviewer-fe811.appspot.com",
      messagingSenderId: "268643853160"
    };
    firebase.initializeApp(config);

    this.geoLocate();
  }

  geoLocate = () => {
    const getLocWeather = () => {
      this.props.selectLocation(newLoc);
      this.props.fetchWeather(newLoc);
    };

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
          getLocWeather(newLoc);
        },
        function error(error_message) {
          // for when getting location results in an error
          getLocWeather(fallBack);
        }
      );
    } else {
      getLocWeather(fallBack);
    }
  };

  renderViewer = () => {
    if (!this.props.location) {
      return;
    }
    return <Viewer />;
  };

  render() {
    return (
      <div>
        <Header />

        {this.renderViewer()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { location: state.weather.location };
};

export default connect(
  mapStateToProps,
  { selectLocation, fetchWeather }
)(App);
