import React from "react";
import String from "./String";
import Combo from "./Combo";
import Checkbox from "./Checkbox";
import Date from "./Date";

class Property extends React.Component {
  render() {
    const {
      isReadonly = false,
      value,
      property: {
        PropertyType = "string"
      }
    } = this.props;
    switch (PropertyType) {
      case "string":
        return <String property={this.props.property} isReadonly={isReadonly} value={value} />
      case "combo":
        return <Combo property={this.props.property} isReadonly={isReadonly} value={value} />
      case "checkbox":
        return <Checkbox property={this.props.property} isReadonly={isReadonly} value={value} />
      case "date":
        return <Date property={this.props.property} isReadonly={isReadonly} value={value} />
      default:
        return <String property={this.props.property} isReadonly={isReadonly} value={value} />
    };
  };
};

export default Property;