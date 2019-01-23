import React, { Component } from "react";
import { connect } from "react-redux";
import LoginBar from "./LoginBar";
import SearchBar from "./SearchBar";
import LocationTabs from "./LocationTabs";
import "../../css/Header.css";

class Header extends Component {
  renderLocationTabs = () => {
    if (this.props.isSignedIn) {
      return <LocationTabs />;
    }
    return;
  };

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col s12 m2">
              <LoginBar />
            </div>
            <div className="col s12 m10">
              <SearchBar />
            </div>
          </div>
          <h2>WeatherViewer</h2>
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
