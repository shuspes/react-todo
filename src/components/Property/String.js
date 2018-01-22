import React from "react";
import PropTypes from "prop-types";

class String extends React.Component {
  state = {
    value: this.props.value || ""
  };

  handleChange = ev => {
    this.setState({value: ev.target.value});
  };

  render() {
    const {isReadonly = false, property = {}, className = ""} = this.props;
    const {value = ""} = this.state;
    return isReadonly
      ? value
      : <input placeholder={property.DisplayName} 
                value={value} 
                className={"css-property " + className} 
                name={property.Key}
                onChange={this.handleChange} />
  };
};

String.propTypes = {
  isReadonly: PropTypes.bool,
  value: PropTypes.string,
  prop: PropTypes.shape({
    DisplayName: PropTypes.string,
    Key: PropTypes.string
  }),
  className: PropTypes.string
};

export default String;