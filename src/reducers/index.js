import { combineReducers } from "redux";
import startupData from "./startupData";
import tasks from "./tasks";
import editTaskForm from "./editTaskForm";

const reducers = combineReducers({ startupData, tasks, editTaskForm });
export default reducers;