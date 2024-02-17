import { createSlice, nanoid } from "@reduxjs/toolkit";

//can be array also
const initialState = {
  todos: [],
  editingTodoId:null,
  toUpdateText:null
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //contains properties and functions
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      }
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      const id = action.payload
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    updateTodo: (state, action) => {
     const {id,newText} = action.payload

      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      );
    },
     setEditingTodoId:(state,action) =>{
      state.editingTodoId = action.payload
       state.toUpdateText= action.payload
     }
  },
}); //mostly objects


export const {addTodo, removeTodo,updateTodo ,setEditingTodoId} = todoSlice.actions

export default todoSlice.reducer