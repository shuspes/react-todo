import { UPDATE_TASKS, ADD_TASK, EDIT_TASK, DELETE_TASK, INSERT_TASK } from "../actions";

const INITIAL_STATE = [];

const tasks = (state = INITIAL_STATE, action) => {
  const { type } = action;
  if (!type) return state;

  switch (type) {
    case UPDATE_TASKS:
      const { payload: { tasks = [] } = {} } = action;
      return [
        ...state,
        ...tasks
      ];
    case ADD_TASK:
      const { payload: { task = {} } = {} } = action;
      return [
        ...state,
        task
      ];
    case EDIT_TASK:
      const { payload: { taskId, taskChanges } = {} } = action;
      return state.map(it => {
        return (it.Id === taskId) ? { ...it, ...taskChanges } : it;
      });
    case DELETE_TASK:
      const { payload: { taskId: taskIdForDeletion } = {} } = action;
      return state.filter(it => it.Id !== taskIdForDeletion);
    case INSERT_TASK:
      const { payload: { task: inderedTask, index } = {} } = action;
      if(index > state.length - 1) {
        return [...state.slice(0), inderedTask];
      }
      return [...state.slice(0, index), inderedTask, ...state.slice(index)];
    default:
      return state;
  }
};
export default tasks;