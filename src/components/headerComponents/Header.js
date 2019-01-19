import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon } from "react-materialize";
import LoginBar from "./LoginBar";
import LocationTabs from "./LocationTabs";

class Header extends Component {
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
          WeatherViewer
          <div className="headerButtons">
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
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps)(Header);
