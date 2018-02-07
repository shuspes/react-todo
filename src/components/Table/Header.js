import React from "react";
import PropTypes from "prop-types";
import { Table } from 'semantic-ui-react';

class Header extends React.Component {
  handleSort = columnKey => {
    if(this.props.onSort) this.props.onSort(columnKey);
  };

  render() {
    const {columns = {}, sortPropertyKey, sortOrder} = this.props;

    return (
      <Table.Header>
        <Table.Row>
          {
            columns.map(column => {
              const sortDirection = column.IsSortable == null || column.IsSortable
                ? sortPropertyKey === column.Key
                  ? sortOrder
                  : null
                : null;

              return (
                <Table.HeaderCell key={column.Key} sorted={sortDirection} 
                          onClick={column.IsSortable == null || column.IsSortable 
                              ? this.handleSort.bind(this, column.Key) 
                              : null} >
                  {column.DisplayName}
                </Table.HeaderCell>
              );
            })
          }
        </Table.Row>
      </Table.Header>
    );
  }
}

Header.propTypes = {
  column: PropTypes.arrayOf(PropTypes.shape({
    Key: PropTypes.string,
    DisplayName: PropTypes.string,
    IsSortable: PropTypes.bool
  })),
  onSort: PropTypes.func,
  sortPropertyKey: PropTypes.string,
  sortOrder: PropTypes.string
};

export default Header;