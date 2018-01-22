import React from 'react';
import "./App.css";
import { getAppSettings, getTasks, addTask } from "../../utils/apiWrapper";
import { Table } from "../../components/Table";
import { CreateForm } from "../CreateForm";
import { FilterForm } from "../FilterForm";
import { tasksList } from '../../utils/appData';

export class App extends React.Component {
  state = {
    filterFormProp: [],
    tasksProperties: [],
    tasksList: []
  };

  componentWillMount() {
    getAppSettings().then(({filterProperties, tasksProperties}) => {
      return this.setState({
        filterFormProp: filterProperties, 
        tasksProperties: tasksProperties
      });
    }).then(getTasks).then(tasksList => this.setState({tasksList}));
  }

  addTask = task => {
    addTask(task).then(tasksList => this.setState({tasksList}));
  };

  render() {
    const {filterFormProp = [], tasksProperties = [], tasksList = []} = this.state;
    const addFormProp = tasksProperties.filter(it => it.ForForm);
    const tableColumns = tasksProperties.filter(it => it.ForTable);

    return (
      <div className="css-todoApp">
        <CreateForm properties={addFormProp} formName="Add Task" buttonName="Add" addTask={this.addTask} />        
        <FilterForm properties={filterFormProp} formName="Filter" />
        <Table columns={tableColumns} rows={tasksList} editableColumns={["IsComplete"]} />
      </div>
    );
  }
};