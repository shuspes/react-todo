import React from "react";
import PropTypes from "prop-types";

class Checkbox extends React.Component {
  state = {
    value: Boolean(this.props.value)
  };

  handleChange = ev => {
    this.setState({value: ev.target.checked});
  };

  render() {
    const {isReadonly = false, property = {}, className = ""} = this.props;
    const {value = false} = this.state;
    return (
      <label className={className + " css-property"}>
        <input name={property.Key} className="css-checkbox" type="checkbox" checked={value} disabled={isReadonly} onChange={this.handleChange} />
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
    Key: PropTypes.string,
    ShouldDisplayLabel: PropTypes.bool,
    DisplayName: PropTypes.string
  }),
  className: PropTypes.string
};

export default Checkbox;