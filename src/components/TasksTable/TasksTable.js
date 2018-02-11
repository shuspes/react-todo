import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { openForm } from "../../actions";
import { Table } from "../Table";

export class TasksTable extends React.Component {
  static defaultProps = {
    editableColumns: ["IsComplete"]
  };

  render() {
    const { properties, editableColumns, tasks, cellClick, openTask } = this.props;
    return <Table columns={properties}
      rows={tasks}
      editableColumns={editableColumns}
      hasRemoveAction={true}
      cellClick={cellClick}
      openItem={openTask} />
  };
};

TasksTable.propTypes = {
  properties: PropTypes.array,
  editableColumns: PropTypes.array,
  tasks: PropTypes.array,
  cellClick: PropTypes.func,
  openTask: PropTypes.func
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

const mapDispatchToProps = dispatch => ({
  openTask: taskId => dispatch(openForm(taskId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksTable);