import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { LoginForm } from "../LoginForm";
import App from "./App";

export class Main extends React.Component {
  render() {
    return this.props.isLogin
      ? (
        <App />
      )
      : (
        <LoginForm />
      );
  }
};

Main.propTypes = {
  isLogin: PropTypes.bool
};

const mapStateToProps = state => {
  const { user } = state;

  return { isLogin: Object.keys(user).length > 0 };
};

export default connect(mapStateToProps, undefined)(Main);
