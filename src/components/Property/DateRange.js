import React from "react";
import PropTypes from 'prop-types';
import Date from "./Date";

class DateRange extends React.Component {
  handleChange = (key, newDate) => {
    let {value = ["", ""], onChange} = this.props;
    const indexForUpdate = key === "DateRangeFrom" ? 0 : 1;
    value[indexForUpdate] = newDate;
    
    if(onChange) onChange(value);
  };

  render() {    
    const {className = "", isReadonly = false, property = {}, value = ["", ""]} = this.props;   
    if (value.length < 2) return null; 
    const dateFromVal = value[0];
    const dateToVal = value[1];

    return (
      <div style={{display: "inline-block"}}>
        <Date onChange={this.handleChange.bind(this, "DateRangeFrom")} 
              className={className} 
              isReadonly={isReadonly} 
              value={dateFromVal}
              property={({...property, Key: "DateRangeFrom", DisplayName: property.DisplayName + " From"})} />
        <Date onChange={this.handleChange.bind(this, "DateRangeTo")} 
              className={className} 
              isReadonly={isReadonly} 
              value={dateToVal}
              property={({...property, Key: "DateRangeTo", DisplayName: property.DisplayName + " To"})} />
      </div>
    );
  };
};

DateRange.propTypes = {
  isReadonly: PropTypes.bool,
  value: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  property: PropTypes.object,
  onChange: PropTypes.func
};

export default DateRange;