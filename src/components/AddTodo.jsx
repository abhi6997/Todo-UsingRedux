import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  setEditingTodoId,
  updateTodo,
} from "../features/Todo/todoSlice.js";

const AddTodo = () => {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();
  const editingTodoId = useSelector((state) => state.editingTodoId);
  const toEditText = useSelector((state) => state.toUpdateText);
  

  const addorUpdateTodoHandler = (e) => {
    e.preventDefault();

    if (editingTodoId) {
      dispatch(updateTodo({ id: editingTodoId, newText: input }));
      dispatch(setEditingTodoId(null));
    }
    setInput("");
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form
      onSubmit={editingTodoId ? addorUpdateTodoHandler : addTodoHandler}
      className="space-x-3 mt-12"
    >
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder={editingTodoId ? "Update Todo" : "Enter a todo"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {editingTodoId ? "Upadte" : "Add"}
      </button>
    </form>
  );
};

export default AddTodo;
