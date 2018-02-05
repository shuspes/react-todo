import React from 'react';
import PropTypes from "prop-types";
import "./Table.css";
import Header from "./Header";
import Body from "./Body";

export class Table extends React.Component {
  render() {
    const {columns = [], rows = [], editableColumns = []} = this.props;
    return (
      <table className="css-table">
        <Header columns={columns} />
        <Body columns={columns} rows={rows} editableColumns={editableColumns} />
      </table>
    );
  };
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
  editableColumns: PropTypes.arrayOf(PropTypes.string)
};