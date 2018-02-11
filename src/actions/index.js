import * as startupActions from "./startupData";
import * as tasks from "./tasks";

export const loadProperties = startupActions.loadProperties;
export const loadTasks = tasks.loadTasks;
export const createTask = tasks.createTask;
export const changeTask = tasks.changeTask;