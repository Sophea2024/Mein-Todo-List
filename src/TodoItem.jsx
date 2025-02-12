import React from "react";
import "./TodoItem.css";

function TodoItem({ todo, toggleComplete }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
    </div>
  );
}

export default TodoItem;
