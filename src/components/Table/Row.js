import React from "react";
import PropTypes from "prop-types";
import { Table } from 'semantic-ui-react';
import Cell from "./Cell";

class Row extends React.Component {
  render() {
    const {columns = [], row = {}, editableColumns = [], cellClick, openItem} = this.props; 

    return (
      <Table.Row onDoubleClick={openItem ? openItem.bind(this, row.Id): null}>
        {
          columns.map(column => 
              <Cell key={column.Key} 
                    value={row[column.Key]} 
                    column={column} 
                    editableColumns={editableColumns}
                    cellClick={cellClick.bind(null, row.Id)} />
          )
        }
      </Table.Row>
    );
  }
}

Row.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  editableColumns: PropTypes.arrayOf(PropTypes.string),
  row: PropTypes.object,
  cellClick: PropTypes.func,
  openItem: PropTypes.func
};

export default Row;