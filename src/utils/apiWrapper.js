import { properties, tasksList as stubTasksList, createGuid } from "./appData";

const storageTaskListKey = "tasksList";

let tasksList

try {
  tasksList = JSON.parse(localStorage.getItem(storageTaskListKey));
} catch (err) {
  console.log("Error on parsing tasks");  
}

tasksList = Array.isArray(tasksList) ? tasksList : stubTasksList;

const saveTasks = () => localStorage.setItem(storageTaskListKey, JSON.stringify(tasksList));

export const addTask = task => {
  const newTask = {...task, Id: createGuid(), IsComplete: false};
  tasksList.push(newTask);
  saveTasks();
  return new Promise(resolve => setTimeout(resolve, 0, newTask));
}

export const getProperties = () => new Promise(resolve => setTimeout(resolve, 0, (properties)));

export const getTasks = () => new Promise(resolve => setTimeout(resolve, 0, tasksList));

export const removeTask = taskId => {
  tasksList = tasksList.filter(it => it.Id !== taskId); 
  saveTasks();  
  return new Promise((resolve, reject) => setTimeout(resolve, 0, taskId));
};

export const editTask = (taskId, changeSet) => {
  tasksList = tasksList.map(task => task.Id === taskId ? {...task, ...changeSet} : task);
  saveTasks();
  return new Promise(resolve => setTimeout(resolve, 0, tasksList));
};
