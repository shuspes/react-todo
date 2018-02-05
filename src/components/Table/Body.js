import React from "react";
import PropTypes from "prop-types";
import Row from "./Row";

class Body extends React.Component {
  render() {
    const {columns = [], rows = [], editableColumns = []} = this.props;

    return (
      <tbody>
      {
        rows.map(row => <Row key={row.Id} row={row} columns={columns} editableColumns={editableColumns}/>)
      }
      </tbody>
    );
  }
}

Body.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  editableColumns: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.arrayOf(PropTypes.object)
};

export default Body;