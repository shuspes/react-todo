import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Form } from "../Form";

export class FilterForm extends React.Component {
  static defaultProps = {
    formName: "Filter"
  }

  render() {
    const { properties, formName, filterChanged } = this.props;
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

const mapStateToProps = state => {
  const {
    startupData: {
      filterProperties = []
    } = {}
  } = state || {};

  return { properties: filterProperties };
};

export default connect(mapStateToProps, undefined)(FilterForm);