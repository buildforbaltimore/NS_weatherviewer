import React, { Component } from "react";
import { connect } from "react-redux";
import { selectLocation } from "../../actions";
import { Row, Icon, Button, Col } from "react-materialize";

class SearchBar extends Component {
  state = { searchError: false, searchText: "" };

  onSearchSubmit = () => {
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

        this.setState({ searchError: "" });
        this.props.selectLocation({
          lat,
          long: lng,
          name: this.state.searchText
        });
      })
      .catch(err =>
        this.setState({
          searchError: "Something went wrong! Please try again."
        })
      );
  };

  render() {
    return (
      <form onSubmit={this.onSearchSubmit}>
        <Row>
          <div className="input-field col s12 m6">
            <Icon className="prefix">search</Icon>
            <input
              className={`${this.state.searchError ? "invalid" : ""}`}
              value={this.state.searchText}
              onChange={e => this.setState({ searchText: e.target.value })}
              type="text"
              placeholder="Enter a location to search (eg. City, State)"
              autoComplete="off"
            />
            <span className="helper-text" data-error={this.state.searchError} />
          </div>

          <Col s={12} m={6}>
            <Button waves="light">
              Search<Icon left>search</Icon>
            </Button>
          </Col>
        </Row>
      </form>
    );
  }
}

export default connect(
  null,
  { selectLocation }
)(SearchBar);
