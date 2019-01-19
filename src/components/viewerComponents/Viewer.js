import React, { Component } from "react";
import { connect } from "react-redux";

class Viewer extends Component {
  render() {
    return <div>VIEWER</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(Viewer);
