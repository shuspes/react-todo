import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component {
  handleSort = columnKey => {
    if(this.props.onSort) this.props.onSort(columnKey);
  };

  render() {
    const {columns = {}, sortPropertyKey, sortOrder} = this.props;

    return (
      <thead>
        <tr>
          {
            columns.map(column => 
              <th key={column.Key} 
                  onClick={column.IsSortable == null || column.IsSortable 
                    ? this.handleSort.bind(this, column.Key) 
                    : null}>
                {column.DisplayName}
                {
                  column.IsSortable == null || column.IsSortable
                    ? sortPropertyKey === column.Key
                      ? <span className={"css-sort-" + sortOrder}/>
                      : (
                          <div>
                            <span className="css-sort-asc"/>
                            <span className="css-sort-desc"/>
                          </div>
                      )
                    : null
                }
              </th>
            )
          }
        </tr>
      </thead>
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