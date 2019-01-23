import React, { Component } from "react";
import { connect } from "react-redux";
import { Preloader } from "react-materialize";
import { selectLocation, fetchWeather } from "../actions/weatherActions";
import firebase from "firebase/app";
import { geoLocate } from "./geoLocate";
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

    const getLocWeather = newLoc => {
      this.props.selectLocation(newLoc);
      this.props.fetchWeather(newLoc);
    };

    geoLocate(getLocWeather);
  }

  renderViewer = () => {
    if (!this.props.loading) {
      return <Viewer />;
    }
    return (
      <div className="center-align">
        <Preloader size="big" />
      </div>
    );
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
  return {
    loading: state.weather.loading
  };
};

export default connect(
  mapStateToProps,
  { selectLocation, fetchWeather }
)(App);
