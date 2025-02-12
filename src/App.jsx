import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Frühstück", completed: false },
    { id: 2, text: "React lernen", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  // Funktion zum Hinzufügen eines neuen To-Dos
  const addTodo = () => {
    if (newTodo.trim() === "") return;

    const newTodoItem = {
      id: todos.length + 1,
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  };

  // Funktion zum Umschalten des "Erledigt"-Status eines To-Dos
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Funktion zum Löschen aller erledigten To-Dos
  const deleteCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // Überprüfen, ob es erledigte To-Dos gibt
  const hasCompletedTodos = todos.some((todo) => todo.completed);

  return (
    <div>
      <h1>Meine To-Do Liste</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Neues To-Do hinzufügen"
          className="inputTodo"
        />
        <button onClick={addTodo} className="addNewTodo">
          Hinzufügen
        </button>
      </div>

      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
      ))}

      {/* Button zum Löschen aller erledigten To-Dos */}
      <button
        className="btn-delete"
        onClick={deleteCompletedTodos}
        disabled={!hasCompletedTodos}        
      >
        Erledigte löschen
      </button>
    </div>
  );
}

export default App;
