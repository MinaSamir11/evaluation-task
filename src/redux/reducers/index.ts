import { combineReducers } from "redux";

import post, { PostState } from "./post";
import appState from "./appState";

export type reducersState = {
  post: PostState;
};

const rootReducer = combineReducers({
  appState,
  post,
});

export default rootReducer;
