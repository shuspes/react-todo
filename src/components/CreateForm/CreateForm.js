import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Form } from "../Form";

export class CreateForm extends React.Component {
  static defaultProps = {
    formName: "Add Task",
    buttonName: "Add"
  }

  render() {
    const {properties, formName, buttonName, addTask} = this.props;
    return (
      <Form properties={properties} formName={formName} buttonName={buttonName} handleSubmit={addTask} />
    );
  };
};

CreateForm.propTypes = {
  properties: PropTypes.array,
  formName: PropTypes.string,
  buttonName: PropTypes.string,
  addTask: PropTypes.func
};

const mapStateToProps = state => {
  const {
    startupData: {
      filterProperties = []
    } = {}
  } = state || {};

  return {properties: filterProperties};
};

export default connect(mapStateToProps, undefined)(CreateForm);