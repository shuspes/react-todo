import React from "react";
import PropTypes from "prop-types";
import String from "./String";
import Combo from "./Combo";
import Checkbox from "./Checkbox";
import Date from "./Date";

export class Property extends React.Component {
  render() {
    const {
      isReadonly = false,
      value = "",
      property,
      property: {
        Type
      }
    } = this.props;
    
    switch (Type) {
      case "string":
        return <String property={property} isReadonly={isReadonly} value={value} />
      case "combo":
        return <Combo property={property} isReadonly={isReadonly} value={value} />
      case "checkbox":
        return <Checkbox property={property} isReadonly={isReadonly} value={value} />
      case "date":
        return <Date property={property} isReadonly={isReadonly} value={value} />
      default:
        return <String property={property} isReadonly={isReadonly} value={value} />
    };
  };
};

Property.propTypes = {
  isReadonly: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  property: PropTypes.shape({
    Type: PropTypes.string
  }).isRequired
};