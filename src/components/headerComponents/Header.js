import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon } from "react-materialize";
import LoginBar from "./LoginBar";
import LocationTabs from "./LocationTabs";

class Header extends Component {
  renderAddButton = () => {
    if (this.props.isSignedIn) {
      return (
        <Button waves="light" className="green">
          Add Location<Icon left>add_location</Icon>
        </Button>
      );
    }
    return;
  };

  renderLocationTabs = () => {
    if (this.props.isSignedIn) {
      return <LocationTabs />;
    }
    return;
  };

  render() {
    return (
      <div>
        <div className="container">
          <LoginBar />

          <h1>WeatherViewer</h1>

          <div className="headerButtons">
            {this.renderAddButton()}
            <Button waves="light" className="blue">
              Search<Icon right>search</Icon>
            </Button>
          </div>
        </div>

        {this.renderLocationTabs()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(Header);
