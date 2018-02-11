import React from 'react';
import { Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import { loadProperties, loadTasks } from "../../actions";
import "./App.css";
import { getAppSettings, getProperties, getTasks, addTask, removeTask, editTask } from "../../utils/apiWrapper";
import filterFunc from "../../utils/filter";
import { TasksTable } from "../../components/TasksTable";
import { CreateForm } from "../CreateForm";
import { FilterForm } from "../FilterForm";
import { EditForm } from "../EditForm";
import { tasksList } from '../../utils/appData';

export class App extends React.Component {
  state = {
    filterFormProp: [],
    tasksProperties: [],
    tasksList: [],
    filterObject: {},
    taskId: null
  };

  componentWillMount() {
    getAppSettings().then(properties => {
      this.setState({
        filterFormProp: properties.filterProperties,
        tasksProperties: properties.tasksProperties
      });
    }).then(getProperties)
      .then(startupData => this.props.loadProperties(startupData))
      .then(getTasks)
      .then(tasksList => {
        this.setState({ tasksList });
        this.props.loadTasks(tasksList);
      });
  }

  addTask = task => {
    addTask(task).then(tasksList => this.setState({ tasksList }));
  };

  editTask = (taskId, task) => {
    editTask(taskId, task).then(tasksList => this.setState({ tasksList })).then(_ => this.setState({ taskId: null }));
  };

  handleCellClick(taskId, propertyKey, value) {
    if (taskId && propertyKey) {
      const { tasksList = [] } = this.state;
      if (propertyKey === "Remove") {
        const removedTask = tasksList.find(it => it.Id === taskId) || {};
        const removedTaskIndex = tasksList.indexOf(removedTask);
        if (removedTaskIndex < 0) return;

        this.setState({ tasksList: tasksList.filter(it => it.Id !== taskId) });

        removeTask(taskId).catch(() => {
          if (removedTaskIndex > this.state.tasksList.length - 1) {
            this.setState({ tasksList: [...this.state.tasksList, removedTask] });
          } else {
            let newTasksList = [...this.state.tasksList];
            newTasksList.splice(removedTaskIndex, 0, removedTask);
            this.setState({ tasksList: newTasksList });
          }
        });
      } else {
        editTask(taskId, { [propertyKey]: value }).then(tasksList => this.setState({ tasksList }));
      }
    }
  };

  handleOpenTask = taskId => {
    this.setState({ taskId });
  };

  handleCloseTask = _ => {
    this.setState({ taskId: null });
  };

  render() {
    const { filterFormProp = [], tasksProperties = [], tasksList = [], filterObject = {}, taskId } = this.state;
    const tableColumns = tasksProperties.filter(it => it.ForTable);
    const filteredList = filterFunc(tasksList, filterFormProp, filterObject);

    return (
      <div className="css-todoApp">
        <Modal open={Boolean(taskId)} closeOnDimmerClick={true} onClose={this.handleCloseTask} closeIcon={true} >
          <Modal.Header>Edit Task</Modal.Header>
          <EditForm task={tasksList.find(it => it.Id === taskId)}
            editTask={this.editTask.bind(this, taskId)} />
        </Modal>
        <CreateForm addTask={this.addTask} />
        <FilterForm filterChanged={filterObject => this.setState({ filterObject })} />
        <TasksTable cellClick={this.handleCellClick.bind(this)}
          openItem={this.handleOpenTask.bind(this)} />
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  loadProperties: properties => dispatch(loadProperties(properties)),
  loadTasks: tasks => dispatch(loadTasks(tasks))
});

export default connect(undefined, mapDispatchToProps)(App);