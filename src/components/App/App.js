import React from 'react';
import "./App.css";
import { getAppSettings, getTasks, addTask, removeTask } from "../../utils/apiWrapper";
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

  handleCellClick(taskId, propertyKey, value) {
    if(taskId && propertyKey) {
      const {tasksList = []} = this.state;
      if(propertyKey === "Remove") {
        const removedTask = tasksList.find(it => it.Id === taskId) || {};
        const removedTaskIndex = tasksList.indexOf(removedTask);        
        if(removedTaskIndex < 0) return;
        
        this.setState({tasksList: tasksList.filter(it => it.Id !== taskId)});

        removeTask(taskId).catch(() => {          
          if(removedTaskIndex > this.state.tasksList.length - 1) {
            this.setState({tasksList: [...this.state.tasksList, removedTask]});
          } else {            
            let newTasksList = [...this.state.tasksList];
            newTasksList.splice(removedTaskIndex, 0, removedTask);
            this.setState({tasksList: newTasksList});
          }
        });
      }
    }
  };

  render() {
    const {filterFormProp = [], tasksProperties = [], tasksList = []} = this.state;
    const addFormProp = tasksProperties.filter(it => it.ForForm);
    const tableColumns = tasksProperties.filter(it => it.ForTable);

    return (
      <div className="css-todoApp">
        <CreateForm properties={addFormProp} formName="Add Task" buttonName="Add" addTask={this.addTask} />        
        <FilterForm properties={filterFormProp} formName="Filter" />
        <Table columns={tableColumns} 
                rows={tasksList} 
                editableColumns={["IsComplete"]} 
                hasRemoveAction={true} 
                cellClick={this.handleCellClick.bind(this)} />
      </div>
    );
  }
};