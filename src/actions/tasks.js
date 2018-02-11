import { addTask, removeTask, editTask } from "../utils/apiWrapper";
import { UPDATE_TASKS, ADD_TASK, EDIT_TASK } from "./actionTypes";

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

export const changeTask = (taskId, taskChanges) => dispatch => {
  editTask(taskId, taskChanges).then(() => dispatch(editTaskAction(taskId, taskChanges)));
};

const editTaskAction = (taskId, taskChanges) => ({
  type: EDIT_TASK,
  payload: {
    taskId,
    taskChanges
  }
});

const addTaskAction = task => {
  if(typeof task !== "object" || Object.keys(task).length === 0) return;  
  return {
    type: ADD_TASK,
    payload: {
      task
    }
  };
}