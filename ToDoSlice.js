import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const ToDoSlice = createSlice({
  name: "ToDo",
  initialState: {
    list: [],
    textValue: "",
  },
  reducers: {
    addTask: (state, action) => {
      const reducer = {
        id: uuidv4(),

        text: action.payload,
      };
      state.list.push(reducer);
    },
    deleteTask: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = ToDoSlice.actions;

export default ToDoSlice.reducer;
