import React from "react";
import PropTypes from "prop-types";
import { Table } from 'semantic-ui-react';
import Row from "./Row";

class Body extends React.Component {
  render() {
    const {columns = [], rows = [], editableColumns = [], cellClick, openItem} = this.props;

    return (
      <Table.Body>
        {
          rows.map(row => <Row key={row.Id} 
                                row={row} 
                                columns={columns} 
                                editableColumns={editableColumns} 
                                cellClick={cellClick}
                                openItem={openItem}/>)
        }
      </Table.Body>
    );
  }
}

Body.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  editableColumns: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.arrayOf(PropTypes.object),
  cellClick: PropTypes.func,
  openItem: PropTypes.func
};

export default Body;