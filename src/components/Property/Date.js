import React from "react";
import PropTypes from "prop-types";

class Date extends React.Component {
  handleChange = ev => {
    if(this.props.onChange) this.props.onChange(ev.target.value);
  };

  render() {
    const {className = "", isReadonly = false, property = {}, value = ""} = this.props;    
    return isReadonly
    ? value
    : (
      <input className={className + " css-property"} 
              type="date" 
              value={value} 
              onChange={this.handleChange} />
    );
  };
};

Date.propTypes = {
  isReadonly: PropTypes.bool,
  value: PropTypes.string,
  className: PropTypes.string,
  property: PropTypes.object,
  onChange: PropTypes.func
};

export default Date;