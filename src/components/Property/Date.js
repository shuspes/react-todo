import React from "react";
import PropTypes from "prop-types";

class Date extends React.Component {
  render() {
    const {className = "", value = "", isReadonly = false} = this.props;    
    return isReadonly
    ? value
    : (
      <input className={className + " css-property"} type="date" value={value} />
    );
  };
};

Date.propTypes = {
  isReadonly: PropTypes.bool,
  value: PropTypes.string,
  className: PropTypes.string
};

export default Date;