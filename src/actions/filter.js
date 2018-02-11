import { CHANGE_FILTER } from "./actionTypes";

export const changeFilterValue = filter => ({
  type: CHANGE_FILTER,
  payload: {
    filter
  }
});