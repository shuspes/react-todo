import React from "react";
import PropTypes from 'prop-types';
import { Form } from "../Form";

export class EditForm extends React.Component {
  render() {
    const {properties = [], buttonName = "", task = {}} = this.props;
    return (
      <Form shouldDisplayBorder={false} 
            itemValues={task} 
            isDisabled={task.IsComplete} 
            properties={properties} 
            buttonName={buttonName} 
            handleSubmit={null} />
    );
  };
};

EditForm.propTypes = {
  properties: PropTypes.array,
  buttonName: PropTypes.string,
  task: PropTypes.object
  // addTask: PropTypes.func
};