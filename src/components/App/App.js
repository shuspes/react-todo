import React from 'react';
import { connect } from "react-redux";
import { loadProperties, loadTasks } from "../../actions";
import "./App.css";
import { getProperties, getTasks, addTask, removeTask, editTask } from "../../utils/apiWrapper";
import filterFunc from "../../utils/filter";
import { TasksTable } from "../../components/TasksTable";
import { CreateForm } from "../CreateForm";
import { FilterForm } from "../FilterForm";
import { EditForm } from "../EditForm";
import { tasksList } from '../../utils/appData';

export class App extends React.Component {
  componentWillMount() {
    getProperties()
      .then(startupData => this.props.loadProperties(startupData))
      .then(getTasks)
      .then(tasksList => {
        this.props.loadTasks(tasksList);
      });
  }

  editTask = (taskId, task) => {
    editTask(taskId, task).then(tasksList => this.setState({ tasksList })).then(() => this.setState({ taskId: null }));
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

  render() {
    return (
      <div className="css-todoApp">
        <EditForm />
        <CreateForm />
        <FilterForm />
        <TasksTable cellClick={this.handleCellClick.bind(this)} />
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  loadProperties: properties => dispatch(loadProperties(properties)),
  loadTasks: tasks => dispatch(loadTasks(tasks))
});

export default connect(undefined, mapDispatchToProps)(App);