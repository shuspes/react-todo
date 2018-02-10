import { UPDATE_TASKS } from "../actions/actionTypes";

const INITIAL_STATE = [];

const tasks = (state = INITIAL_STATE, action) => {
  const { type } = action;
  if(!type) return state;

  switch (type) {
    case UPDATE_TASKS:
      const {payload: {tasks = []} = {}} = action;      
      return [
        ...state,
        ...tasks
      ]
    default:
      return state;
  }
};
export default tasks;