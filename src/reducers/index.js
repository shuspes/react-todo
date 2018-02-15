import { combineReducers } from "redux";
import startupData from "./startupData";
import tasks from "./tasks";
import editTaskForm from "./editTaskForm";
import filter from "./filter";
import hash from "./hash";
import viewMode from "./viewMode";

const reducers = combineReducers({ hash, filter, viewMode, startupData, tasks, editTaskForm });
export default reducers;