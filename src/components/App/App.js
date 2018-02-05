import React from 'react';
import PropTypes from 'prop-types';
import "./App.css";
import { filterProperties, tasksProperties, tasksList } from "./appData";
import { Table } from "../../components/Table";
import { CreateForm } from "../CreateForm";
import { FilterForm } from "../FilterForm";

export class App extends React.Component {
  static defaultProps = {
    filterProperties,
    tasksProperties,
    tasksList
  };

  render() {
    const {filterProperties = [], tasksProperties = [], tasksList = []} = this.props;
    const filterFormProp = filterProperties;
    const addFormProp = tasksProperties.filter(it => it.ForForm);
    const tableColumns = tasksProperties.filter(it => it.ForTable);

    return (
      <div className="css-todoApp">
        <CreateForm properties={addFormProp} formName="Add Task" buttonName="Add" />        
        <FilterForm properties={filterFormProp} formName="Filter" />
        <Table columns={tableColumns} rows={tasksList} editableColumns={["IsComplete"]} />
      </div>
    );
  }
};

App.propTypes = {
  filterProperties: PropTypes.array,
  tasksProperties: PropTypes.array,
  tasksList: PropTypes.array
}; 