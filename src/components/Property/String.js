import React from "react";
import PropTypes from "prop-types";
import { Input } from 'semantic-ui-react'

class String extends React.Component {
  handleChange = (ev, data) => {
    if(this.props.onChange) this.props.onChange(data.value);
  };

  render() {
    const {isReadonly = false, property = {}, className = "", value = ""} = this.props;
    return isReadonly
      ? value
      : <Input placeholder={property.DisplayName} 
                value={value} 
                className={"css-property " + className} 
                onChange={this.handleChange} />
  };
};

String.propTypes = {
  isReadonly: PropTypes.bool,
  value: PropTypes.string,
  prop: PropTypes.shape({
    DisplayName: PropTypes.string
  }),
  className: PropTypes.string,
  onChange: PropTypes.func
};

export default String;