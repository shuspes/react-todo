import React from "react";
import PropTypes from "prop-types";

export class Header extends React.Component {
  render() {
    const { currentDate } = this.props;
    return (
      <div className="css-calendar-header">
        <div className="css-calendar-header-leftButton">
          <button className="css-button navigation leftButton">&lt;</button>
        </div>
        <div className="css-calendar-header-caption">
         {currentDate.toLocaleString("ru", {month: 'long', year: 'numeric'})}
        </div>
        <div className="css-calendar-header-rightButton">
          <button className="css-button navigation rightButton">&gt;</button>
        </div>
      </div>
    )
  }
};

Header.propTypes = {
  currentDate: PropTypes.any
};