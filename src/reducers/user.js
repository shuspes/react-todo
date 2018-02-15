import { UPDATE_USER } from "../actions";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  const { type, payload: { user } = {} } = action;
  if (!type) return state;

  switch (type) {
    case UPDATE_USER:
      return {
        ...state,
        ...user
      }
    default:
      return state;
  }
};