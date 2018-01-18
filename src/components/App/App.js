import React from 'react';
import "./App.css";
import Table from "../../components/Table";
import FilterForm from "../FilterForm";
import Form from "../../components/Form";

class App extends React.Component {
  render() {
    const {actionProperties = [], actionList = [], filterProperties = []} = this.props;
    return (
      <div className="css-todoApp">
        <Form properties={actionProperties.filter(it => it.IsFormVisible)} formName="Add Task" buttonName="Add" />        
        <FilterForm properties={filterProperties} formName="Filter" />
        <Table columns={actionProperties.filter(it => it.IsTableVisible)}
               rows={actionList} 
               isReadonly={true} 
               editableColumns={["IsComplete"]} />
      </div>
    );
  }
};

export default App;