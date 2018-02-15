import { CHANGE_VIEW_MODE } from "./actionTypes";

export const changeViewMode = modeKey => ({
  type: CHANGE_VIEW_MODE,
  payload: {
    modeKey
  }
});