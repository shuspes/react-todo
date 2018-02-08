import {combineReducers} from "redux";
import startupData from "./startupData";
import tasks from "./tasks";

const reducers = combineReducers({startupData, tasks});
export default reducers;