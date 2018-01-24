import React from "react";
import PropTypes from "prop-types";

class Textarea extends React.Component {
  handleChange = ev => {
    if(this.props.onChange) this.props.onChange(ev.target.value);  
  };

  render() {
    const {className = "", isReadonly = false, property = {}, value = ""} = this.props;    
    return isReadonly
      ? value
      : <textarea className={className + " css-property"} 
                  placeholder={property.DisplayName} 
                  value={value} 
                  onChange={this.handleChange}></textarea>
  };
};

Textarea.propTypes = {
  isReadonly: PropTypes.bool,
  value: PropTypes.string,
  prop: PropTypes.shape({
    DisplayName: PropTypes.string
  }),
  className: PropTypes.string,
  onChange: PropTypes.func
};

export default Textarea;