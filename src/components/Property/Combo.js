import React from "react";
import PropTypes from "prop-types";

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

  render() {
    const {isReadonly = false, property = {}} = this.props;
    const {PossibleValues: possibleValues = []} = property;

    return isReadonly
    ? (<span>{this.getDisplayValue()}</span>)
    : (
      <select defaultValue={this.getValue()}>
        {
          possibleValues.map(it => (<option key={it.Key} value={it.Key}>{it.DisplayName}</option>))
        }
        <option></option>
      </select>
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
  isReadonly: PropTypes.bool
};

export default Combo;