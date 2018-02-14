import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Calendar } from "../Calendar";

export class CalendarView extends React.Component {
  render() {
    return <Calendar />
  }
};

CalendarView.propTypes = {

};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, undefined)(CalendarView);