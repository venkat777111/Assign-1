import React from "react";

function TodoItem({ todo, index, toggleTodo, deleteTodo }) {
  return (
    <li
      className={todo.completed ? "completed" : ""}
      onClick={() => toggleTodo(index)}
    >
      {todo.text}
      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation(); // Prevent toggle when deleting
          deleteTodo(index);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
