import React, { Component } from "react";
import TodoItem from "./TodoItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: "Frühstück", completed: false },
        { id: 2, text: "React lernen", completed: false },
      ],
      newTodo: "",
    };
  }

  toggleComplete = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  addTodo = () => {
    const { newTodo, todos } = this.state;
    if (newTodo.trim() === "") return;

    const newTodoItem = {
      id: todos.length + 1,
      text: newTodo,
      completed: false,
    };

    this.setState({
      todos: [...todos, newTodoItem],
      newTodo: "",
    });
  };

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  // Funktion zum Löschen aller erledigten To-Dos
  deleteCompletedTodos = () => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => !todo.completed),
    }));
  };

  render() {
    const { todos, newTodo } = this.state;
    const hasCompletedTodos = todos.some((todo) => todo.completed);

    return (
      <div>
        <h1>Meine To-Do Liste</h1>
        
        <input
          type="text"
          value={newTodo}
          onChange={this.handleInputChange}
          placeholder="Neues To-Do hinzufügen"
        />
        <button onClick={this.addTodo} className="btn btn-primary">Hinzufügen</button>

        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={this.toggleComplete}
          />
        ))}

        {/* Button zum Löschen aller erledigten To-Dos */}
        <button
          onClick={this.deleteCompletedTodos}
          disabled={!hasCompletedTodos} // Button deaktivieren, wenn es keine erledigten To-Dos gibt
          
          className="btn btn-danger"
        >
          Erledigte löschen
        </button>
      </div>
    );
  }
}

export default App;
