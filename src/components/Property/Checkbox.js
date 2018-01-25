import React from "react";
import PropTypes from "prop-types";
import { Checkbox as SemanticCheckbox } from 'semantic-ui-react'

class Checkbox extends React.Component {
  handleChange = (ev, data) => {
    if(this.props.onChange) this.props.onChange(data.checked);  
  };

  render() {
    const {isReadonly = false, property = {}, className = "", value = false} = this.props;
    return <SemanticCheckbox checked={Boolean(value)} 
                    readOnly={isReadonly} 
                    onChange={this.handleChange}
                    className={className + " css-property"}
                    label={property.ShouldDisplayLabel ? property.DisplayName : ""} />
    // return (
    //   <label className={className + " css-property"}>
    //     <input className="css-checkbox" type="checkbox" checked={value} disabled={isReadonly} onChange={this.handleChange} />
    //     {property.ShouldDisplayLabel && property.DisplayName}
    //   </label>
    // );
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