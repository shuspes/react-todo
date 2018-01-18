import React from "react";

class Header extends React.Component {
  render() {
    const {
      columns
    } = this.props;

    return (
      <thead>
        <tr>
          {
            columns.map(column => <th key={column.Key}>{column.DisplayName}</th>)
          }
        </tr>
      </thead>
    );
  }
}

export default Header;