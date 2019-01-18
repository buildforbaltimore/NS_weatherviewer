import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon } from "react-materialize";
import LoginBar from "./LoginBar";

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

  render() {
    return (
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
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(Header);
