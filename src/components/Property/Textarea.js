import React from "react";
import PropTypes from "prop-types";

class Textarea extends React.Component {
  state = {
    value: this.props.value || ""
  };

  handleChange = ev => {
    this.setState({value: ev.target.value});
  };

  render() {
    const {className = "", isReadonly = false, property = {}} = this.props;
    const {value = ""} = this.state;
    
    return isReadonly
      ? value
      : <textarea className={className + " css-property"} 
                  placeholder={property.DisplayName} 
                  value={value} 
                  onChange={this.handleChange}
                  cols="100" rows="4"></textarea>
  };
};

Textarea.propTypes = {
  isReadonly: PropTypes.bool,
  value: PropTypes.string,
  prop: PropTypes.shape({
    DisplayName: PropTypes.string
  }),
  className: PropTypes.string
};

export default Textarea;