import React from "react";
import PropTypes from "prop-types";

class String extends React.Component {
  handleChange = ev => {
    if(this.props.onChange) this.props.onChange(ev.target.value);
  };

  render() {
    const {isReadonly = false, property = {}, className = "", value = ""} = this.props;
    return isReadonly
      ? value
      : <input placeholder={property.DisplayName} 
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