import { filterProperties, tasksProperties, tasksList as stubTasksList, createGuid } from "./appData";

const storageTaskListKey = "tasksList";

let tasksList

try {
  tasksList = JSON.parse(localStorage.getItem(storageTaskListKey));
} catch (err) {
  console.log("Error on parsing tasks");  
}

tasksList = Array.isArray(tasksList) ? tasksList : stubTasksList;

const saveTasks = _ => localStorage.setItem(storageTaskListKey, JSON.stringify(tasksList));

export const addTask = task => {
  tasksList.push({...task, Id: createGuid(), IsComplete: false});
  saveTasks();
  return new Promise(resolve => setTimeout(resolve, 0, tasksList));
}

export const getAppSettings = () => new Promise(resolve => setTimeout(resolve, 0, ({filterProperties, tasksProperties})));

export const getTasks = _ => new Promise(resolve => setTimeout(resolve, 0, tasksList));

export const removeTask = taskId => {
  tasksList = tasksList.filter(it => it.Id !== taskId); 
  saveTasks();  
  return new Promise((resolve, reject) => setTimeout(resolve, 0, taskId));
};

export const editTask = (taskId, changeSet) => {
  tasksList = tasksList.map(task => task.Id === taskId ? {...task, ...changeSet} : task);
  saveTasks();
  return new Promise(resolve => setTimeout(resolve, 2000, tasksList));
};
