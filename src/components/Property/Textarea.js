import React from "react";
import PropTypes from "prop-types";

class Textarea extends React.Component {
  render() {
    const {className = "", value = "", isReadonly = false, property = {}} = this.props;
    
    return isReadonly
      ? value
      : <textarea className={className + " css-property"} placeholder={property.DisplayName} value={value}></textarea>
  };
};

Textarea.propTypes = {
  isReadonly: PropTypes.bool,
  value: PropTypes.string,
  prop: PropTypes.shape({
    DisplayName: PropTypes.string
  }),
  className: PropTypes.string
};

export default Textarea;