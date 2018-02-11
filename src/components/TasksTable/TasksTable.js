import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Table } from "../Table";

export class TasksTable extends React.Component {
  static defaultProps = {
    editableColumns: ["IsComplete"]
  };

  render() {
    const {properties, editableColumns, tasks, cellClick, openItem} = this.props;
    return <Table columns={properties}
      rows={tasks}
      editableColumns={editableColumns}
      hasRemoveAction={true}
      cellClick={cellClick}
      openItem={openItem} />
  };
};

TasksTable.propTypes = {
  properties: PropTypes.array,
  editableColumns: PropTypes.array,
  tasks: PropTypes.array,
  cellClick: PropTypes.func,
  openItem: PropTypes.func
};

const mapStateToProps = state => {
  const {
    startupData: {
      tableProperties = []
    } = {},
    tasks = []
  } = state || {};

  return { properties: tableProperties, tasks };
};

export default connect(mapStateToProps, undefined)(TasksTable);