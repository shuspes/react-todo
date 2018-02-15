import { CHANGE_VIEW_MODE } from "../actions";

const INITIAL_STATE = {
  activeMode: "table",
  modes: [
    {
      name: "table",
      key: "table"
    },
    {
      name: "calendar",
      key: "calendar"
    }
  ]
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload: { modeKey } = {} } = action;
  if (!type) return state;

  switch (type) {
    case CHANGE_VIEW_MODE:
      return {
        ...state,
        activeMode: modeKey
      };
    default:
      return state;
  }
};
