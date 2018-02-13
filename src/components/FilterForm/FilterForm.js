import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeFilterValue } from "../../actions";
import { Form } from "../Form";

export class FilterForm extends React.Component {
  static defaultProps = {
    formName: "Filter"
  }

  render() {
    const { properties, formName, filterChanged, filter } = this.props;
    return (
      <Form properties={properties} formName={formName} handlePropertyChanged={filterChanged} initialSet={filter} />
    );
  };
};

FilterForm.propTypes = {
  properties: PropTypes.array,
  formName: PropTypes.string,
  filterChanged: PropTypes.func,
  filter: PropTypes.object
};

const mapStateToProps = state => {
  const {
    startupData: {
      filterProperties = []
    } = {},
    filter = {}
  } = state || {};

  return { properties: filterProperties, filter };
};

const mapDispatchToProps = dispatch => ({
  filterChanged: filterObject => dispatch(changeFilterValue(filterObject))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);