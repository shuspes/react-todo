import React from "react";
import PropTypes from "prop-types";

class Checkbox extends React.Component {
  render() {
    const {isReadonly = false, property = {}, value = false, className = ""} = this.props;
    return (
      <label className={className + " css-property"}>
        <input className="css-checkbox" type="checkbox" checked={value} disabled={isReadonly} />
        {property.ShouldDisplayLabel && property.DisplayName}
      </label>
    );
  };
};

Checkbox.propTypes = {
  isReadonly: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  property: PropTypes.shape({
    ShouldDisplayLabel: PropTypes.bool,
    DisplayName: PropTypes.string
  }),
  className: PropTypes.string
};

export default Checkbox;