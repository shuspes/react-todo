import { login as apiLogin } from "../utils/apiWrapper";
import { UPDATE_USER } from "./actionTypes";

export const login = userData => dispatch => {
  apiLogin(userData)
    .then(data => {
      return typeof data === "object"
        ? Promise.resolve(data)
        : Promise.reject(data);
    })
    .then(user => dispatch(updateUser(user)))
    .catch(validationMessage => {console.error(validationMessage)});
};

const updateUser = user => {
  return {
    type: UPDATE_USER,
    payload: {
      user
    }
  };
}