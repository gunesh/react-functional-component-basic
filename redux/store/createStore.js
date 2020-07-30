import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootEpic from "../epic/rootEpic";
import actionInterceptor from "./ActionInterceptor";
import rootReducer from "../reducers/rootReducer";
import { createEpicMiddleware } from "redux-observable";

const epicMiddleware = createEpicMiddleware();
export const middlewares = [thunk, epicMiddleware, actionInterceptor];

const initialState = {
  
};

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares)
);
epicMiddleware.run(rootEpic);
export default store;
