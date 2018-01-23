import React from "react";
import PropTypes from "prop-types";

class Checkbox extends React.Component {
  handleChange = ev => {
    if(this.props.onChange) this.props.onChange(ev.target.checked);  
  };

  render() {
    const {isReadonly = false, property = {}, className = "", value = false} = this.props;
    return (
      <label className={className + " css-property"}>
        <input className="css-checkbox" type="checkbox" checked={value} disabled={isReadonly} onChange={this.handleChange} />
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
  className: PropTypes.string,
  onChange: PropTypes.func
};

export default Checkbox;