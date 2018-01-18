import React from "react";
import Cell from "./Cell";

class Row extends React.Component {
  render() {
    const {columns = [], row = {}, isReadonly = false, editableColumns = []} = this.props; 

    return (
      <tr>
        {
          columns.map(column => <Cell key={column.Key} value={row[column.Key]} column={column} isReadonly={isReadonly} editableColumns={editableColumns} />)
        }
      </tr>
    );
  }
}

export default Row;