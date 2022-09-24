import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

let composeEnhancers = compose;

// const middleware = applyMiddleware();
let middleware = [thunk];

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// export const store = createStore(reducers, {}, composeEnhancers(middleware));

export const store = createStore(reducers, {}, applyMiddleware(...middleware));
