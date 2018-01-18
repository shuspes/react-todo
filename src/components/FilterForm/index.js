import React from "react";
import FilterForm from "./FilterForm";

class FilterFormContainer extends React.Component {
  render() {
    const {properties = [], formName = ""} = this.props;
    return (
      <FilterForm properties={properties} formName={formName} />
    );
  };
};

export default FilterFormContainer;