import React from "react";
import PropTypes from "prop-types";

class String extends React.Component {
  render() {
    const {isReadonly = false, property = {}, value = ""} = this.props;
    return isReadonly
      ? value
      : <input placeholder={property.DisplayName} />
  };
};

String.propTypes = {
  isReadonly: PropTypes.bool,
  value: PropTypes.string,
  prop: PropTypes.shape({
    DisplayName: PropTypes.string
  })
};

export default String;