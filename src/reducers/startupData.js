import { UPDATE_PROPERTIES } from "../actions/actionTypes";

const INITIAL_STATE = {
  properties: [],
  filterProperties: [],
  formProperties: [],
  tableProperties: []
};

const startupData = (state = INITIAL_STATE, action) => {
  const { type, payload: properties } = action;
  if(!type) return state;

  switch (type) {
    case UPDATE_PROPERTIES:
      return {
        ...state,
        ...properties
      }
    default:
      return state;
  }
};

export default startupData;