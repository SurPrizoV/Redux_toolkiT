import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
        state.todos.push({
          id: new Date().toISOString(),
          text: action.payload.text,
          completed: false,
        });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(item => item.id !== action.payload.id)
    },
    toggleTodoComplete(state, action) {
      const toggledTodo = state.todos.find(item => item.id === action.payload.id)
      toggledTodo.completed = !toggledTodo.completed;
    },
  },
});

export const {addTodo, removeTodo, toggleTodoComplete} = TodoSlice.actions;
export default TodoSlice.reducer;