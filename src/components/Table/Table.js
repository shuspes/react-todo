import React from 'react';
import "./Table.css";
import Header from "./Header";
import Body from "./Body";

class Table extends React.Component {
  render() {
    const {columns = [], rows = [], isReadonly = false, editableColumns = []} = this.props;
    return (
      <table className="css-table">
        <Header columns={columns} />
        <Body columns={columns} rows={rows} isReadonly={isReadonly} editableColumns={editableColumns} />
      </table>
    );
  };
};

export default Table;