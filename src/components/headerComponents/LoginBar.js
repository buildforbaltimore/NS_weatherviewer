import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Button, Icon } from "react-materialize";
import LoginFormModal from "./LoginFormModal";

class LoginBar extends Component {
  onButtonClick = () => {
    this.props.logoutUser();
  };

  renderLoginBar = () => {
    if (this.props.user) {
      return (
        <Button waves="light" className="red" onClick={this.onButtonClick}>
          Log Out<Icon left>do_not_disturb</Icon>
        </Button>
      );
    }
    return <LoginFormModal />;
  };

  render() {
    return <div>{this.renderLoginBar()}</div>;
  }
}

const mapStateToProps = state => {
  return { user: state.auth.user };
};

export default connect(
  mapStateToProps,
  { logoutUser }
)(LoginBar);
