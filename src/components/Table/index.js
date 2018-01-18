import React from 'react';
import Table from "./Table";

class TableContainer extends React.Component {
  render() {
    const {columns = [], rows = [], isReadonly = false, editableColumns = []} = this.props;
    return (
      <Table columns={columns} rows={rows} isReadonly={isReadonly} editableColumns={editableColumns} />
    );
  };
};

export default TableContainer;