import React from "react";
import PropTypes from "prop-types";
import { Select } from 'semantic-ui-react'

class Combo extends React.Component {
  getValue() {
    const {property = {}, value = ""} = this.props;
    const {PossibleValues: possibleValues = []} = property;

    if(possibleValues.length === 0) return "";
    if(value === "") return possibleValues[0].Key;
    return value;
  }

  getDisplayValue() {
    const {property = {}, value = ""} = this.props;
    const {PossibleValues: possibleValues = []} = property;

    if(possibleValues.length === 0) return "";
    const currentValue = possibleValues.find(it => it.Key === value);
    return currentValue ? currentValue.DisplayName : "";    
  }

  handleChange = (ev, data) => {
    if(this.props.onChange) this.props.onChange(data.value);
  };

  render() {
    const {isReadonly = false, property = {}, className = "", isDisabled = false} = this.props;
    const {PossibleValues: possibleValues = []} = property;
    const selectedValue = this.getValue();

    return isReadonly
    ? (<span>{this.getDisplayValue()}</span>)
    : (
      <Select className={className + " css-property"} 
              value={selectedValue} 
              disabled={isDisabled}
              onChange={this.handleChange} 
              options={possibleValues.map(it => ({
                key: it.Key,
                text: it.DisplayName,
                value: it.Key
              }))} />
    );
  };
};

Combo.propTypes = {
  property: PropTypes.shape({
    PossibleValues: PropTypes.arrayOf(PropTypes.shape({
      Key: PropTypes.string,
      DisplayName: PropTypes.string
    }))
  }),
  value: PropTypes.string,
  isReadonly: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool
};

export default Combo;