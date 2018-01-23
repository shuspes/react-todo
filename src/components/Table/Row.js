import React from "react";
import PropTypes from "prop-types";
import Cell from "./Cell";

class Row extends React.Component {
  render() {
    const {columns = [], row = {}, editableColumns = [], cellClick} = this.props; 

    return (
      <tr>
        {
          columns.map(column => 
              <Cell key={column.Key} 
                    value={row[column.Key]} 
                    column={column} 
                    editableColumns={editableColumns}
                    cellClick={cellClick.bind(null, row.Id)} />
          )
        }
      </tr>
    );
  }
}

Row.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  editableColumns: PropTypes.arrayOf(PropTypes.string),
  row: PropTypes.object,
  cellClick: PropTypes.func
};

export default Row;