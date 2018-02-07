import React from "react";
import PropTypes from "prop-types";
import { Form } from "../Form";

export class FilterForm extends React.Component {
  render() {
    const {properties = [], formName = "", filterChanged} = this.props;
    return (
      <Form properties={properties} formName={formName} handlePropertyChanged={filterChanged} />
    );
  };
};

FilterForm.propTypes = {
  properties: PropTypes.array,
  formName: PropTypes.string,
  filterChanged: PropTypes.func
};