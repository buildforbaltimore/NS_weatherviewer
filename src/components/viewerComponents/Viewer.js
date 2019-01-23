import React, { Component } from "react";
import { connect } from "react-redux";
import CurrentWeather from "./CurrentWeather";
import TimelineSection from "./TimelineSection";

class Viewer extends Component {
  render() {
    const { currently, minutely, hourly, daily } = this.props.weather;

    return (
      <div>
        <CurrentWeather location={this.props.selectedLoc} weather={currently} />

        <div className="container">
          <TimelineSection rangeMax={minutely.data.length - 1} />
        </div>
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
