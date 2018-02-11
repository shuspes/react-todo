import { UPDATE_TASKS, ADD_TASK, EDIT_TASK } from "../actions";

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
        return (it.Id === taskId) ? {...it, ...taskChanges} : it;
      });
    default:
      return state;
  }
};
export default tasks;