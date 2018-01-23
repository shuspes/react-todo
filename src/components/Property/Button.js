import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  render() {
    const {className = "", property = {}, onChange, isReadonly = false} = this.props;
    return <button className={className} onClick={onChange} disabled={isReadonly}>{property.DisplayName}</button>;
  }
};

Button.propTypes = {
  isReadonly: PropTypes.bool,
  onChange: PropTypes.func,
  property: PropTypes.object,
  className: PropTypes.string
};

export default Button;