import React, { Component } from "react";
import { connect } from "react-redux";
import LoginBar from "./LoginBar";
import SearchBar from "./SearchBar";
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
          <SearchBar />
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
