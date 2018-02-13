import { CHANGE_FILTER } from "../actions";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  const { type, payload: { filter = {} } = {} } = action;
  if (!type) return state;

  switch (type) {
    case CHANGE_FILTER:
      return {
        ...state,
        ...filter
      };
    default:
      return state;
  }
};