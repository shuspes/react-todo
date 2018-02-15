import React from 'react';
import { connect } from "react-redux";
import { loadProperties, loadTasks } from "../../actions";
import "./App.css";
import { getProperties, getTasks } from "../../utils/apiWrapper";
import { TasksTable } from "../../components/TasksTable";
import { CreateForm } from "../CreateForm";
import { FilterForm } from "../FilterForm";
import { EditForm } from "../EditForm";
import { Header } from "../Header";
import { Calendar } from "../Calendar";

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
      <React.Fragment>
        <Header />  
        <div className="css-todoApp-container">      
          <div className="css-todoApp">    
          {
            this.props.activeMode === "table"
            ? (
              <React.Fragment>
                <EditForm />
                <CreateForm />
                <FilterForm />
                <TasksTable />
              </React.Fragment>
            )
            : (
              <Calendar />
            )
          }    
          </div>
        </div>
      </React.Fragment>
    );
  }
};

const mapStateToProps = state => {
  const {viewMode: {activeMode} = {}} = state;
  return {activeMode};
};

const mapDispatchToProps = dispatch => ({
  loadProperties: properties => dispatch(loadProperties(properties)),
  loadTasks: tasks => dispatch(loadTasks(tasks))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);