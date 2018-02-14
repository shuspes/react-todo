import React from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";

export class Calendar extends React.Component {
  static defaultProps = {
    weekFormat: [1, 2, 3, 4, 5, 6, 0],
    weekDaysConf: {0: "Вс", 1: "Пн", 2: "Вт", 3: "Ср", 4: "Чт", 5: "Пт", 6: "Сб"},
    currentDate: new Date(),
    dayForHighlight: new Date()
  };

  render() {
    const { currentDate } = this.props;
    return (
      <div className="css-calendar-container">
        <Header currentDate={currentDate} />
      </div>
    )
  }
};

Calendar.propTypes = {
  weekFormat: PropTypes.arrayOf(PropTypes.number),
  weekDaysConf: PropTypes.objectOf(PropTypes.string),
  currentDate: PropTypes.any,
  dayForHighlight: PropTypes.any
};