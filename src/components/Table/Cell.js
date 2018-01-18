import React from "react";
import Property from "../Property";

class Cell extends React.Component {
  render() {
    const {column = {}, value, isReadonly = false, editableColumns = []} = this.props; 

    return (
      <td>
        <Property value={value} property={column} isReadonly={isReadonly && !editableColumns.includes(column.Key)} />
      </td>
    );
  }
}

export default Cell;