import { HASH_CHANGE } from "./actionTypes";

export const hashChange = hash => ({
  type: HASH_CHANGE,
  payload: {
    hash
  }
});