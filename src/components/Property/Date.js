import React from "react";
import PropTypes from "prop-types";

class Date extends React.Component {
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
    : (
      <input className={className + " css-property"} 
              type="date" 
              value={value} 
              name={property.Key}
              onChange={this.handleChange} />
    );
  };
};

Date.propTypes = {
  isReadonly: PropTypes.bool,
  value: PropTypes.string,
  className: PropTypes.string,
  property: PropTypes.shape({
    Key: PropTypes.string
  })
};

export default Date;