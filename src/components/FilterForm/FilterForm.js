import React from "react";
import Form from "../Form";

class FilterForm extends React.Component {
  render() {
    const {properties = [], formName = ""} = this.props;
    return (
      <Form properties={properties} formName={formName} />
    );
  };
};

export default FilterForm;