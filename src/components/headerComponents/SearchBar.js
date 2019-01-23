import React, { Component } from "react";
import { connect } from "react-redux";
import { selectLocation, fetchWeather } from "../../actions/weatherActions";
import { Icon, Button } from "react-materialize";
import "../../css/SearchBar.css";

class SearchBar extends Component {
  state = { searchError: false, searchText: "" };

  onSearchSubmit = e => {
    e.preventDefault();

    if (!this.state.searchText) {
      return this.setState({
        searchError: "Please enter a location to search."
      });
    }

    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${
        this.state.searchText
      }&key=AIzaSyAMvm9ZguZY_l3Bu2RFaJKo85DMpgmOCeQ`
    )
      .then(res => res.json())
      .then(result => {
        if (result.status === "ZERO_RESULTS") {
          return this.setState({
            searchError: "No results found.  Check your spelling and try again."
          });
        }
        const { lat, lng } = result.results[0].geometry.location;
        const newLoc = {
          lat,
          long: lng,
          name: this.state.searchText
        };

        this.setState({ searchError: "" });
        this.props.selectLocation(newLoc);
        this.props.fetchWeather(newLoc);
      })
      .catch(err =>
        this.setState({
          searchError: "Something went wrong! Please try again."
        })
      );
  };

  render() {
    return (
      <div className="searchFormWrapper">
        <form onSubmit={this.onSearchSubmit}>
          <div className="row">
            <div className="input-field col s12 m10">
              <Icon className="prefix">search</Icon>
              <input
                className={`${this.state.searchError ? "invalid" : ""}`}
                value={this.state.searchText}
                onChange={e => this.setState({ searchText: e.target.value })}
                type="text"
                placeholder="Enter a location (eg. City, State)"
                autoComplete="off"
              />
              <span
                className="helper-text"
                data-error={this.state.searchError}
              />
            </div>

            <div className="col s12 m2">
              <Button waves="light">
                Search<Icon left>search</Icon>
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { selectLocation, fetchWeather }
)(SearchBar);
