import { filterProperties, tasksProperties, tasksList as stubTasksList, createGuid } from "./appData";

const storageTaskListKey = "tasksList";

let tasksList

try {
  tasksList = JSON.parse(localStorage.getItem(storageTaskListKey));
} catch (err) {
  console.log("Error on parsing tasks");  
}

tasksList = Array.isArray(tasksList) ? tasksList : stubTasksList;

const saveTask = _ => localStorage.setItem(storageTaskListKey, JSON.stringify(tasksList));

export const addTask = task => {
  tasksList.push(task);
  saveTask();
  return new Promise(resolve => setTimeout(resolve, 0, tasksList));
}

export const getAppSettings = () => new Promise(resolve => setTimeout(resolve, 0, ({filterProperties, tasksProperties})));

export const getTasks = _ => new Promise(resolve => 
  setTimeout(resolve, 0, tasksList));
