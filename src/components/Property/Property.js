import React from "react";
import './Property.css';
import PropTypes from "prop-types";
import String from "./String";
import Combo from "./Combo";
import Checkbox from "./Checkbox";
import Date from "./Date";
import Textarea from "./Textarea";
import Button from './Button';
import DateRange from './DateRange';

export class Property extends React.Component {
  render() {
    const {
      isReadonly = false,
      value,
      property,
      property: {
        Type
      },
      className = "",
      onChangeProperty,
      isDisabled = false
    } = this.props;
    
    switch (Type) {
      case "string":
        return <String isDisabled={isDisabled} onChange={onChangeProperty} className={className} property={property} isReadonly={isReadonly} value={value} />
      case "combo":
        return <Combo isDisabled={isDisabled} onChange={onChangeProperty} className={className} property={property} isReadonly={isReadonly} value={value} />
      case "checkbox":
        return <Checkbox isDisabled={isDisabled} onChange={onChangeProperty} className={className} property={property} isReadonly={isReadonly} value={value} />
      case "date":
        return <Date isDisabled={isDisabled} onChange={onChangeProperty} className={className} isReadonly={isReadonly} value={value} />
      case "textarea":
        return <Textarea isDisabled={isDisabled} onChange={onChangeProperty} className={className} property={property} isReadonly={isReadonly} value={value} />
      case "longString":
        return <String isDisabled={isDisabled} onChange={onChangeProperty} property={property} isReadonly={isReadonly} value={value} className={className + " css-longString"} />
      case "button":
        return <Button isDisabled={isDisabled} onChange={onChangeProperty} property={property} className={className} isReadonly={isReadonly} />;
      case "dateRange":
        return <DateRange isDisabled={isDisabled} onChange={onChangeProperty} property={property} className={className} isReadonly={isReadonly} value={value} />;        
      default:
        return <String isDisabled={isDisabled} onChange={onChangeProperty} className={className} property={property} isReadonly={isReadonly} value={value} />
    }
  };
};

Property.propTypes = {
  isReadonly: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  property: PropTypes.shape({
    Type: PropTypes.string
  }).isRequired,
  className: PropTypes.string,
  onChangeProperty: PropTypes.func,
  isDisabled: PropTypes.bool
};