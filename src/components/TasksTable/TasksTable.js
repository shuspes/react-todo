import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { openForm, changeTask, deleteTask } from "../../actions";
import { Table } from "../Table";
import filterFunc from "../../utils/filter";

export class TasksTable extends React.Component {
  static defaultProps = {
    editableColumns: ["IsComplete"] //TODO: move to property
  };

  render() {
    const { properties, editableColumns, tasks, openTask, removeTask, editTask } = this.props;
    return <Table columns={properties}
      rows={tasks}
      editableColumns={editableColumns}
      hasRemoveAction={true}
      cellClick={editTask}
      onRemove={removeTask}
      openItem={openTask} />
  };
};

TasksTable.propTypes = {
  properties: PropTypes.array,
  editableColumns: PropTypes.array,
  tasks: PropTypes.array,
  removeTask: PropTypes.func,
  openTask: PropTypes.func,
  editTask: PropTypes.func
};

const mapStateToProps = state => {
  const {
    startupData: {
      tableProperties = [],
      filterProperties = []
    } = {},
    tasks = [],
    filter = {}
  } = state || {};

  return { properties: tableProperties, tasks: filterFunc(tasks, filterProperties, filter) };
};

const mapDispatchToProps = dispatch => ({
  openTask: taskId => dispatch(openForm(taskId)),
  editTask: (taskId, propertyKey, value) => dispatch(changeTask(taskId, { [propertyKey]: value })),  
  removeTask: taskId => dispatch(deleteTask(taskId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksTable);