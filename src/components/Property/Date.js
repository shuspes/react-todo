import React from "react";
import PropTypes from "prop-types";

class Date extends React.Component {
  handleChange = ev => {
    if(this.props.onChange) this.props.onChange(ev.target.value);
  };

  render() {
    const {className = "", isReadonly = false, property = {}, value = "", isDisabled = false} = this.props;    
    return isReadonly
    ? value
    : (
      <input className={className + " css-property"} 
              type="date" 
              value={value} 
              disabled={isDisabled}
              onChange={this.handleChange} />
    );
  };
};

Date.propTypes = {
  isReadonly: PropTypes.bool,
  value: PropTypes.string,
  className: PropTypes.string,
  property: PropTypes.object,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool
};

export default Date;