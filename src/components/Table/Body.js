import React from "react";
import Row from "./Row";

class Body extends React.Component {
  render() {
    const {columns = [], rows = [], isReadonly = false, editableColumns = []} = this.props;

    return (
      <tbody>
      {
        rows.map(row => <Row key={row.Id} row={row} columns={columns} isReadonly={isReadonly} editableColumns={editableColumns}/>)
      }
      </tbody>
    );
  }
}

export default Body;