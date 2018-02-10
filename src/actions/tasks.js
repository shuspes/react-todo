import { UPDATE_TASKS } from "./actionTypes";

export const loadTasks = (tasks = []) => {
  return {
    type: UPDATE_TASKS,
    payload: {
      tasks
    }
  }
}