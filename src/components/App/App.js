import React from 'react';
import { Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import { loadProperties } from "../../actions";
import "./App.css";
import { getAppSettings, getProperties, getTasks, addTask, removeTask, editTask } from "../../utils/apiWrapper";
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
    getAppSettings().then(properties => {
      this.setState({
        filterFormProp: properties.filterProperties, 
        tasksProperties: properties.tasksProperties
      });
    }).then(getProperties)
      .then(startupData => this.props.loadProperties(startupData))
      .then(getTasks).then(tasksList => this.setState({tasksList}));
  }

  addTask = task => {
    addTask(task).then(tasksList => this.setState({tasksList}));
  };

  editTask = (taskId, task) => { 
    editTask(taskId, task).then(tasksList => this.setState({tasksList})).then(_ => this.setState({taskId: null}));
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
        <Modal open={Boolean(taskId)} closeOnDimmerClick={true} onClose={this.handleCloseTask} closeIcon={true} >
        <Modal.Header>Edit Task</Modal.Header>
          <EditForm task={tasksList.find(it => it.Id === taskId)} 
                    properties={formProp} 
                    buttonName="Edit" 
                    editTask={this.editTask.bind(this, taskId)} />                    
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

const mapDispatchToProps = dispatch => ({
  loadProperties: properties => dispatch(loadProperties(properties))
});

export default connect(undefined, mapDispatchToProps)(App);