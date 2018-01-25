import React from 'react';
import PropTypes from "prop-types";
import "./Table.css";
import sortBy from "../../utils/sortBy";
import Header from "./Header";
import Body from "./Body";

export class Table extends React.Component {
  state = {
    sortPropertyKey: null,
    sortOrder: "asc"
  };

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

  handleSortClick = propertyKey => {
    if(this.state.sortPropertyKey === propertyKey) {
      this.setState({sortOrder: this.state.sortOrder === "asc" ? "desc" : "asc"});
    } else {
      this.setState({sortPropertyKey: propertyKey, sortOrder: "asc"});
    }
  };

  render() {
    const {columns = [], rows = [], editableColumns = [], hasRemoveAction = false, openItem} = this.props;
    const {sortPropertyKey, sortOrder} = this.state;
    const tableColumns = hasRemoveAction ? [...columns, this.getRemoveProperty()] : columns;
    const tableEditableColumns = hasRemoveAction ? [...editableColumns, "Remove"] : editableColumns;
    const sortedRows = sortBy(rows, sortPropertyKey, sortOrder);

    return (
      <table className="css-table">
        <Header columns={tableColumns} 
                onSort={this.handleSortClick} 
                sortPropertyKey={sortPropertyKey} 
                sortOrder={sortOrder} />
        <Body columns={tableColumns} 
              rows={sortedRows} 
              editableColumns={tableEditableColumns} 
              cellClick={this.handleCellClick}
              openItem={openItem} />
      </table>
    );
  };
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
  editableColumns: PropTypes.arrayOf(PropTypes.string),
  hasRemoveAction: PropTypes.bool,
  cellClick: PropTypes.func,
  openItem: PropTypes.func
};