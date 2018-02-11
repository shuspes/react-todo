import { combineReducers } from "redux";
import startupData from "./startupData";
import tasks from "./tasks";
import editTaskForm from "./editTaskForm";
import filter from "./filter"

const reducers = combineReducers({ startupData, tasks, editTaskForm, filter });
export default reducers;