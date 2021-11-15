import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        userid: sessionStorage.getItem('currentloggedin'),
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
      localStorage.setItem('todos', JSON.stringify([...state.todos]));
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem('todos', JSON.stringify([...state.todos]));
    },
    toggleTodoComplete(state, action) {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload.id);
      toggleTodo.completed = !toggleTodo.completed;
      localStorage.setItem('todos', JSON.stringify([...state.todos]));
    },
    editTodo(state, action) {
      const editTodoItem = state.todos.find((todo) => todo.id === action.payload.id);
      editTodoItem.text = action.payload.text;
      localStorage.setItem('todos', JSON.stringify([...state.todos]));
    },
  },
});

export const { addTodo, removeTodo, toggleTodoComplete, editTodo } = todoSlice.actions;
export default todoSlice.reducer;