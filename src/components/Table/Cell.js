import React from "react";
import PropTypes from "prop-types";
import { Table } from 'semantic-ui-react';
import { Property } from "../Property";

class Cell extends React.Component {
  render() {
    const {column = {}, value = "", editableColumns = [], cellClick} = this.props; 

    return (
      <Table.Cell>
        <Property className="css-property-table" 
                  value={value} 
                  property={column} 
                  isReadonly={!editableColumns.includes(column.Key)}
                  onChangeProperty={cellClick.bind(null, column.Key)} />
      </Table.Cell>
    );
  }
}

Cell.propTypes = {
  column: PropTypes.object,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  editableColumns: PropTypes.arrayOf(PropTypes.string),
  cellClick: PropTypes.func
};

export default Cell;