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
    this.props.selectLocation(tab.firstChild.innerHTML);
  };

  renderTabs() {
    const { locs, selectedLoc } = this.props;

    if (locs.length !== 0) {
      const tabs = locs.map((loc, index) => {
        return (
          <Tab
            title={loc}
            key={index}
            active={selectedLoc === loc ? true : false}
          >
            <span hidden>{loc}</span>
          </Tab>
        );
      });
      return (
        <Tabs
          ref={ref => (this.tabsRef = ref)}
          tabOptions={{ onShow: this.selectTab }}
        >
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
