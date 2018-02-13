import { UPDATE_TASKS, ADD_TASK, EDIT_TASK, DELETE_TASK, INSERT_TASK } from "../actions";

const INITIAL_STATE = [];

const tasks = (state = INITIAL_STATE, action) => {
  const {
    type,
    payload: {
      tasks = [],
      task = {},
      taskId,
      taskChanges,
      index
    } = {}
  } = action;

  if (!type) return state;

  switch (type) {
    case UPDATE_TASKS:
      return [
        ...state,
        ...tasks
      ];
    case ADD_TASK:
      return [
        ...state,
        task
      ];
    case EDIT_TASK:
      return state.map(it => {
        return (it.Id === taskId) ? { ...it, ...taskChanges } : it;
      });
    case DELETE_TASK:
      return state.filter(it => it.Id !== taskId);
    case INSERT_TASK:
      if (index > state.length - 1) {
        return [...state.slice(0), task];
      }
      return [...state.slice(0, index), task, ...state.slice(index)];
    default:
      return state;
  }
};
export default tasks;