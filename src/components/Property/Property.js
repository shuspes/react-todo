import React from "react";
import './Property.css';
import PropTypes from "prop-types";
import String from "./String";
import Combo from "./Combo";
import Checkbox from "./Checkbox";
import Date from "./Date";
import Textarea from "./Textarea";

export class Property extends React.Component {
  render() {
    const {
      isReadonly = false,
      value = "",
      property,
      property: {
        Type
      },
      className = ""
    } = this.props;
    
    switch (Type) {
      case "string":
        return <String className={className} property={property} isReadonly={isReadonly} value={value} />
      case "combo":
        return <Combo className={className} property={property} isReadonly={isReadonly} value={value} />
      case "checkbox":
        return <Checkbox className={className} property={property} isReadonly={isReadonly} value={value} />
      case "date":
        return <Date className={className} property={property} isReadonly={isReadonly} value={value} />
      case "textarea":
        return <Textarea className={className} property={property} isReadonly={isReadonly} value={value} />
      case "longString":
        return <String property={property} isReadonly={isReadonly} value={value} className={className + " css-longString"} />
      default:
        return <String className={className} property={property} isReadonly={isReadonly} value={value} />
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
  }).isRequired,
  className: PropTypes.string
};