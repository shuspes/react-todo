import React from "react";
import PropTypes from "prop-types";

class Date extends React.Component {
  render() {
    const {value = "", isReadonly = false} = this.props;    
    return isReadonly
    ? value
    : (
      <input type="date" value={value} />
    );
  };
};

Date.propTypes = {
  isReadonly: PropTypes.bool,
  value: PropTypes.string
};

export default Date;