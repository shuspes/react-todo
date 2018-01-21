import React from "react";
import PropTypes from "prop-types";
import { Property } from "../Property";

class Cell extends React.Component {
  render() {
    const {column = {}, value = "", editableColumns = []} = this.props; 

    return (
      <td>
        <Property value={value} property={column} isReadonly={!editableColumns.includes(column.Key)} />
      </td>
    );
  }
}

Cell.propTypes = {
  column: PropTypes.object,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  editableColumns: PropTypes.arrayOf(PropTypes.string)
};

export default Cell;