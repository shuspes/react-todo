import { addTask, removeTask, editTask } from "../utils/apiWrapper";
import { UPDATE_TASKS, ADD_TASK } from "./actionTypes";

export const loadTasks = (tasks = []) => {
  return {
    type: UPDATE_TASKS,
    payload: {
      tasks
    }
  };
};

export const createTask = task => dispatch => {
  if(typeof task !== "object" || Object.keys(task).length === 0) return;
  addTask(task).then(newTask => dispatch(addTaskAction(newTask)));
};

const addTaskAction = task => {
  if(typeof task !== "object" || Object.keys(task).length === 0) return;  
  return {
    type: ADD_TASK,
    payload: {
      task
    }
  };
}