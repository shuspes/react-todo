import { combineReducers } from "redux";
import startupData from "./startupData";
import tasks from "./tasks";
import editTaskForm from "./editTaskForm";
import filter from "./filter";
import hash from "./hash";

const reducers = combineReducers({ hash, filter, startupData, tasks, editTaskForm });
export default reducers;