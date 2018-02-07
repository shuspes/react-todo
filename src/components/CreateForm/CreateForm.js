import React from "react";
import PropTypes from 'prop-types';
import { Form } from "../Form";

export class CreateForm extends React.Component {
  render() {
    const {properties = [], formName = "", buttonName = "", addTask} = this.props;
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