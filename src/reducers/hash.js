import { HASH_CHANGE } from "../actions";

const INITIAL_STATE = "";

export default (state = INITIAL_STATE, action) => {
  const { type } = action;
  if (!type) return state;

  switch (type) {
    case HASH_CHANGE:
      const { payload: { hash } = {} } = action;
      return hash;
    default:
      return state;
  };
};
