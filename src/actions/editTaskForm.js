import { OPEN_EDIT_TASK_FORM, CLOSE_EDIT_TASK_FORM } from "./actionTypes";

export const openForm = taskId => ({
  type: OPEN_EDIT_TASK_FORM,
  payload: {
    taskId
  }
});

export const closeForm = () => ({
  type: CLOSE_EDIT_TASK_FORM
});