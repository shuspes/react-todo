import React from 'react';
import PropTypes from "prop-types";
import "./Table.css";
import sortBy from "../../utils/sortBy";
import Header from "./Header";
import Body from "./Body";
import { Table as SemanticTable } from 'semantic-ui-react'

export class Table extends React.Component {
  state = {
    sortPropertyKey: null,
    sortOrder: "ascending"
  };

  getRemoveProperty = () => ({
    Key: "Remove",
    DisplayOrder: 10000,
    DisplayName: "Remove",
    Type: "button",
    IsSortable: false
  });

  handleCellClick = (rowId, propertyKey, value) => {
    const removeProperty = this.getRemoveProperty();
    if(propertyKey === removeProperty.Key && this.props.onRemove) {
      this.props.onRemove(rowId);
    } else if(this.props.cellClick) {
      this.props.cellClick(rowId, propertyKey, value);
    }
  };

  handleSortClick = propertyKey => {
    if (this.state.sortPropertyKey === propertyKey) {
      this.setState({ sortOrder: this.state.sortOrder === "ascending" ? "descending" : "ascending" });
    } else {
      this.setState({ sortPropertyKey: propertyKey, sortOrder: "ascending" });
    }
  };

  render() {
    const { columns = [], rows = [], editableColumns = [], hasRemoveAction = false, openItem } = this.props;
    const { sortPropertyKey, sortOrder } = this.state;
    const tableColumns = hasRemoveAction ? [...columns, this.getRemoveProperty()] : columns;
    const tableEditableColumns = hasRemoveAction ? [...editableColumns, "Remove"] : editableColumns;
    const sortedRows = sortBy(rows, sortPropertyKey, sortOrder);

    return (
      <SemanticTable className="css-table" sortable fixed>
        <Header columns={tableColumns}
          onSort={this.handleSortClick}
          sortPropertyKey={sortPropertyKey}
          sortOrder={sortOrder} />
        <Body columns={tableColumns}
          rows={sortedRows}
          editableColumns={tableEditableColumns}
          cellClick={this.handleCellClick}
          openItem={openItem} />
      </SemanticTable>
    );
  };
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
  editableColumns: PropTypes.arrayOf(PropTypes.string),
  hasRemoveAction: PropTypes.bool,
  onRemove: PropTypes.func,
  cellClick: PropTypes.func,
  openItem: PropTypes.func
};