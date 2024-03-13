import { configureStore, Tuple } from "@reduxjs/toolkit";

import { userReducer } from "../methord/userSlice";

export const user = configureStore({
  reducer: userReducer,
});

// combineReducers
// createStore
