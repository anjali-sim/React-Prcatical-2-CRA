import React, { Component } from "react";
import Navbar from "./Navbar";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import "../css/todo.css";

// main component having other child components in it
class Todo extends Component {
  render() {
    return (
      <>
        <div className="container main-body">
          <Navbar />
          <TodoList />
          <AddTodo />
        </div>
      </>
    );
  }
}

export default Todo;
