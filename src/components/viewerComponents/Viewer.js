import React, { Component } from "react";
import { connect } from "react-redux";
import { TimelineSection } from "./TimelineSection";

class Viewer extends Component {
  render() {
    const { name, lat, long } = this.props.selectedLoc;
    const { minutely, hourly, daily } = this.props.weather;

    return (
      <div>
        <h3>{name}</h3>
        <p className="center-align">
          Lat: {lat}, Long: {long}
        </p>
        {/* <TimelineSection sliderMax={minutely.data.length - 1} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    selectedLoc: state.weather.location,
    weather: state.weather.weather
  };
};

export default connect(mapStateToProps)(Viewer);
