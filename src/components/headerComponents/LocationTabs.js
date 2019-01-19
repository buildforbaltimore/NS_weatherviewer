import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserLocations } from "../../actions";

class LocationTabs extends Component {
  componentDidMount() {
    this.props.fetchUserLocations();
  }

  render() {
    return <div>LocationTabs</div>;
  }
}

export default connect(
  null,
  { fetchUserLocations }
)(LocationTabs);
