import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
// import { combineReducers } from "redux";
// import { contactsListReducer, filterReducer } from "./contacts/reducers";
import { contactsAPI } from "./contacts/contactsSlice";

export const store = configureStore({
  reducer: {
    [contactsAPI.reducerPath]: contactsAPI.reducer
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(), contactsAPI.middleware
  ],
});

setupListeners(store.dispatch);







