import * as startupActions from "./startupData";
import * as tasks from "./tasks";
import * as editTaskForm from "./editTaskForm";
import * as filter from "./filter";
import * as hash from "./hash";
export * from "./actionTypes";

export const loadProperties = startupActions.loadProperties;
export const loadTasks = tasks.loadTasks;
export const createTask = tasks.createTask;
export const changeTask = tasks.changeTask;
export const deleteTask = tasks.deleteTask;
export const openForm = editTaskForm.openForm;
export const closeForm = editTaskForm.closeForm;
export const changeFilterValue = filter.changeFilterValue;
export const hashChange = hash.hashChange;