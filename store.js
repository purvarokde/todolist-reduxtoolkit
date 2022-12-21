import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../components/ToDoSlice";

const store = configureStore({
  reducer: {
    reducer: listReducer,
  },
});

export default store;
