import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import { CHANGE_FILTER, hashChange, changeFilterValue } from "./actions";
import { getFilterObject } from "./utils/hash";

const hashMiddleware = store => {
  store.dispatch(hashChange(window.location.hash));
  window.addEventListener("hashchange", function(event) {
    store.dispatch(hashChange(window.location.hash));
  });

  return next => action => {
    next(action); 
  }; 
};

const filterMiddleware = store => {
  const initFilter = getFilterObject(window.location.hash);
  if(initFilter) {
    store.dispatch(changeFilterValue(JSON.parse(initFilter)));
  };

  return next => action => {
    if(action.type === CHANGE_FILTER) {
      window.location.hash = "filterValue?" + JSON.stringify(action.payload.filter);
    }
    next(action); 
  }
};

const middleware = applyMiddleware(thunkMiddleware, hashMiddleware, filterMiddleware);

const store = createStore(
  reducers,
  compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
export default store;