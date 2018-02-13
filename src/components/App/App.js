import React from 'react';
import { connect } from "react-redux";
import { loadProperties, loadTasks } from "../../actions";
import "./App.css";
import { getProperties, getTasks } from "../../utils/apiWrapper";
import { TasksTable } from "../../components/TasksTable";
import { CreateForm } from "../CreateForm";
import { FilterForm } from "../FilterForm";
import { EditForm } from "../EditForm";

export class App extends React.Component {
  componentWillMount() {
    getProperties()
      .then(startupData => this.props.loadProperties(startupData))
      .then(getTasks)
      .then(tasksList => {
        this.props.loadTasks(tasksList);
      });
  }

  render() {
    return (
      <div className="css-todoApp">
        <EditForm />
        <CreateForm />
        <FilterForm />
        <TasksTable />
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  loadProperties: properties => dispatch(loadProperties(properties)),
  loadTasks: tasks => dispatch(loadTasks(tasks))
});

export default connect(undefined, mapDispatchToProps)(App);