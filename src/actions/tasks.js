import { addTask, removeTask, editTask } from "../utils/apiWrapper";
import { UPDATE_TASKS, ADD_TASK, EDIT_TASK, DELETE_TASK, INSERT_TASK } from "./actionTypes";

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

export const deleteTask =  taskId => (dispatch, getState) => {
  const state = getState();
  const { tasks = [] } = state;
  const removedTask = tasks.find(it => it.Id === taskId) || {};
  const removedTaskIndex = tasks.indexOf(removedTask);
  if (removedTaskIndex < 0) return;
  Promise.resolve()
    .then(() => dispatch(removeTaskAction(taskId)))
    .then(() => removeTask(taskId))
    .catch(() => dispatch(revertTaskDeletion(removedTask, removedTaskIndex)));
};

const removeTaskAction = taskId => ({
  type: DELETE_TASK,
  payload: { taskId }
});

const revertTaskDeletion = (task, index) => ({
  type: INSERT_TASK,
  payload: {
    task,
    index
  }
});