import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Button, Icon, Modal, Row, Col, Preloader } from "react-materialize";
import { loginUser } from "../../actions";
import "../../css/LoginFormModal.css";

class LoginFormModal extends Component {
  renderInput = ({ input, label, type, meta }) => {
    const className = `input-field col s12 ${
      meta.error && meta.touched ? "invalid" : ""
    }`;
    return (
      <div className={className}>
        <input
          {...input}
          id={`login-${type}`}
          type={type}
          className="validate"
          autoComplete="off"
        />
        <label htmlFor={`login-${type}`}>{label}</label>
        <span
          className="helper-text"
          data-error={`${
            type === "email"
              ? "Please enter a valid email."
              : "Please enter your password."
          }`}
        />
      </div>
    );
  };

  renderModalContent = () => {
    if (this.props.loading) {
      return (
        <div className="center-align">
          <Preloader size="big" />
        </div>
      );
    }
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Row>
          <Field
            type="email"
            name="email"
            component={this.renderInput}
            label="Email"
          />
          <Field
            type="password"
            name="password"
            component={this.renderInput}
            label="Password"
          />

          <Col>
            <Button>Submit</Button>
          </Col>
        </Row>
      </form>
    );
  };

  onSubmit = formValues => {
    // Submit to new formSubmit action creator.  Login to firebase.
    this.props.loginUser(formValues);
  };

  render() {
    return (
      <Modal
        header="Login/Sign Up"
        bottomSheet
        trigger={
          <Button waves="light" className="green">
            Log In<Icon left>account_circle</Icon>
          </Button>
        }
      >
        <div className="container">{this.renderModalContent()}</div>
      </Modal>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (formValues.email === "undefined") {
    errors.email = "Please enter your email.";
  }

  if (!formValues.password) {
    errors.password = "Please enter your password.";
  }

  return errors;
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error
  };
};

const formWrapped = reduxForm({
  form: "loginUser",
  validate
})(LoginFormModal);

export default connect(
  mapStateToProps,
  { loginUser }
)(formWrapped);
