import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { todo, toggleComplete } = this.props;

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "8px",
        }}
      >
        {/* Checkbox zum Markieren des To-Dos */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          style={{ marginRight: "10px" }}
        />
        
        {/* To-Do-Text */}
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
            flex: 1,
          }}
        >
          {todo.text}
        </span>
      </div>
    );
  }
}

export default TodoItem;