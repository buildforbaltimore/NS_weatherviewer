import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserLocations } from "../../actions";
import { Tabs, Tab } from "react-materialize";

class LocationTabs extends Component {
  componentDidMount() {
    this.props.fetchUserLocations();
  }

  renderTabs() {
    if (this.props.locs.length !== 0) {
      const tabs = this.props.locs.map((loc, index) => {
        return (
          <Tab title={loc} key={index}>
            {loc}
          </Tab>
        );
      });
      return <Tabs>{tabs}</Tabs>;
    }
  }

  render() {
    return (
      <div className="row white">
        <div className="col s12 l10 offset-l1">
          <div>{this.renderTabs()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    locs: Object.values(state.locations.locs),
    locsLoading: state.locations.loading
  };
};

export default connect(
  mapStateToProps,
  { fetchUserLocations }
)(LocationTabs);
