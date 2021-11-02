// src/store/index.js
import { combineReducers, createStore } from "redux";
import balanceReducer from "./balance/reducer";
import userReducer from "./user/reducer";

// config devtools
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;

// create a store based on reducers.
const store = createStore(
  combineReducers({
    balance: balanceReducer,
    user: userReducer,
  }),
  enhancer
);

export default store;
