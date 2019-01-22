import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserLocations, selectLocation } from "../../actions";
import { Tabs, Tab } from "react-materialize";

class LocationTabs extends Component {
  componentDidMount() {
    this.props.fetchUserLocations();
    this.tabsRef = React.createRef();
  }
  shouldComponentUpdate() {
    if (this.tabsRef.current === null) {
      return true;
    }
    return false;
  }

  selectTab = tab => {
    this.props.selectLocation(this.props.locs[tab.substr(1)]);
  };

  renderTabs() {
    const { locs, selectedLoc } = this.props;

    if (locs.length !== 0) {
      const tabs = locs.map((loc, index) => {
        return (
          <Tab
            title={loc.name}
            key={index}
            active={selectedLoc === loc.name ? true : false}
          />
        );
      });
      return (
        <Tabs ref={ref => (this.tabsRef = ref)} onChange={this.selectTab}>
          {tabs}
        </Tabs>
      );
    }
  }

  render() {
    return (
      <div className="row white">
        <div className="col s12 l10 offset-l1">{this.renderTabs()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    locs: Object.values(state.locations.locs),
    selectedLoc: state.weather.location
  };
};

export default connect(
  mapStateToProps,
  { fetchUserLocations, selectLocation }
)(LocationTabs);
