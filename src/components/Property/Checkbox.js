import React from "react";
import PropTypes from "prop-types";
import { Checkbox as SemanticCheckbox } from 'semantic-ui-react'

class Checkbox extends React.Component {
  handleChange = (ev, data) => {
    if(this.props.onChange) this.props.onChange(data.checked);  
  };

  render() {
    const {isReadonly = false, property = {}, className = "", value = false, isDisabled = false} = this.props;
    return <SemanticCheckbox checked={Boolean(value)} 
                    readOnly={isReadonly} 
                    disabled={isDisabled}
                    onChange={this.handleChange}
                    className={className + " css-property"}
                    label={property.ShouldDisplayLabel ? property.DisplayName : ""} />
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
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool
};

export default Checkbox;