import React from 'react';
import PropTypes from "prop-types";
import Form from "./Form";

class FormContainer extends React.Component {
  render() {
    const {properties = [], formName = "", buttonName = ""} = this.props;
    return (
      <Form properties={properties} formName={formName} buttonName={buttonName} />
    );
  };
};

FormContainer.properties ={
  properties: PropTypes.array.isRequired,
  formName: PropTypes.string,
  buttonName: PropTypes.string
};

export default FormContainer;