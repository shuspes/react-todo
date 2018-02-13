import React from "react";
import PropTypes from "prop-types";

class Date extends React.Component {
  handleChange = ev => {
    if(this.props.onChange) this.props.onChange(ev.target.value);
  };

  render() {
    const {className = "", isReadonly = false, value = "", isDisabled = false} = this.props;    
    return isReadonly
    ? value
    : (
      <div className={className + " css-property ui input"} >
        <input style={{padding: "8px"}} type="date" 
                value={value} 
                disabled={isDisabled}
                onChange={this.handleChange} />
      </div>
    );
  };
};

Date.propTypes = {
  isReadonly: PropTypes.bool,
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool
};

export default Date;