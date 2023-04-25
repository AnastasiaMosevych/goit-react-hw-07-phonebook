import { configureStore } from "@reduxjs/toolkit";
import { PhonebookReducer } from "./PhonebookSlice";

export const store = configureStore({
  reducer: {
    phonebook: PhonebookReducer,
  },
});
