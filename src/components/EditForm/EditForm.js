import React from "react";
import PropTypes from 'prop-types';
import { Form } from "../Form";

export class EditForm extends React.Component {
  render() {
    const {properties = [], formName = "", buttonName = "", task = {}} = this.props;
    return (
      <Form itemValues={task} isDisabled={task.IsComplete} properties={properties} formName={formName} buttonName={buttonName} handleSubmit={null} />
    );
  };
};

EditForm.propTypes = {
  properties: PropTypes.array,
  formName: PropTypes.string,
  buttonName: PropTypes.string,
  task: PropTypes.object
  // addTask: PropTypes.func
};