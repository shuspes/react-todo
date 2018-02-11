import { OPEN_EDIT_TASK_FORM, CLOSE_EDIT_TASK_FORM } from "../actions";

const INITIAL_STATE = {
  isOpen: false,
  taskId: ""
};

export default (state = INITIAL_STATE, action) => {
  const { type } = action;
  if (!type) return state;

  switch (type) {
    case OPEN_EDIT_TASK_FORM:
      const { payload: { taskId } = {} } = action;
      return {
        ...state,
        isOpen: true,
        taskId
      };
    case CLOSE_EDIT_TASK_FORM:
      return {
        ...state,
        isOpen: false,
        taskId: ""
      };
    default:
      return state;
  }
}