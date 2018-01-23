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

  handleChange = ev => {
    if(this.props.onChange) this.props.onChange(ev.target.value);
  };

  render() {
    const {isReadonly = false, property = {}, className = ""} = this.props;
    const {PossibleValues: possibleValues = []} = property;

    return isReadonly
    ? (<span>{this.getDisplayValue()}</span>)
    : (
      <select className={className + " css-property"} value={this.getValue()} onChange={this.handleChange}>
        {
          possibleValues.map(it => (<option key={it.Key} value={it.Key}>{it.DisplayName}</option>))
        }
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
  isReadonly: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func
};

export default Combo;