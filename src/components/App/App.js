import React from 'react';
import { Modal } from "semantic-ui-react";
import "./App.css";
import { getAppSettings, getTasks, addTask, removeTask, editTask } from "../../utils/apiWrapper";
import filterFunc from "../../utils/filter";
import { Table } from "../../components/Table";
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
      } else {
        editTask(taskId, {[propertyKey]: value}).then(tasksList => this.setState({tasksList}));
      }
    }
  };

  handleOpenTask = taskId => {    
    this.setState({taskId});
  };

  handleCloseTask = _ => {
    this.setState({taskId: null});    
  };

  render() {
    const {filterFormProp = [], tasksProperties = [], tasksList = [], filterObject = {}, taskId} = this.state;
    const formProp = tasksProperties.filter(it => it.ForForm);
    const tableColumns = tasksProperties.filter(it => it.ForTable);
    const filteredList = filterFunc(tasksList, filterFormProp, filterObject);    

    return (
      <div className="css-todoApp">
        <Modal open={Boolean(taskId)} closeOnDimmerClick={true} onClose={this.handleCloseTask} >
          <EditForm task={tasksList.find(it => it.Id === taskId)} 
                    properties={formProp} 
                    formName="Edit Task" 
                    buttonName="Edit" /*addTask={this.addTask}*/ />                    
        </Modal>
        <CreateForm properties={formProp} formName="Add Task" buttonName="Add" addTask={this.addTask} />        
        <FilterForm properties={filterFormProp} formName="Filter" filterChanged={filterObject => this.setState({filterObject})} />
        <Table columns={tableColumns} 
                rows={filteredList} 
                editableColumns={["IsComplete"]} 
                hasRemoveAction={true} 
                cellClick={this.handleCellClick.bind(this)}
                openItem={this.handleOpenTask.bind(this)} />
      </div>
    );
  }
};