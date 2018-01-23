import React from 'react';
import PropTypes from "prop-types";
import "./Table.css";
import Header from "./Header";
import Body from "./Body";

export class Table extends React.Component {
  getRemoveProperty = _ => ({
    Key: "Remove",
    DisplayOrder: 10000,  
    DisplayName: "Remove",
    Type: "button",
    IsSortable: false
  });

  handleCellClick = (rowId, propertyKey, value) => {
    if(this.props.cellClick) this.props.cellClick(rowId, propertyKey, value);
  };

  render() {
    const {columns = [], rows = [], editableColumns = [], hasRemoveAction = false} = this.props;
    const tableColumns = hasRemoveAction ? [...columns, this.getRemoveProperty()] : columns;
    const tableEditableColumns = hasRemoveAction ? [...editableColumns, "Remove"] : editableColumns;

    return (
      <table className="css-table">
        <Header columns={tableColumns} />
        <Body columns={tableColumns} rows={rows} editableColumns={tableEditableColumns} cellClick={this.handleCellClick} />
      </table>
    );
  };
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
  editableColumns: PropTypes.arrayOf(PropTypes.string),
  hasRemoveAction: PropTypes.bool,
  cellClick: PropTypes.func
};