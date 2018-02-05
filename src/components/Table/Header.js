import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component {
  render() {
    const {columns = {}} = this.props;

    return (
      <thead>
        <tr>
          {
            columns.map(column => 
              <th key={column.Key}>
                {column.DisplayName}
                <span className="css-sort-asc"/>
                <span className="css-sort-desc"/>
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
    DisplayName: PropTypes.string
  }))
};

export default Header;