import React from "react";
import { dbData } from "../data/state";
// Generate new IDs for task items
import { v4 as uuidv4 } from "uuid";

// Components
import TodoList from "./TodoList";
import NavBar from "./Navbar";

class SepContainer extends React.Component {
  state = dbData;

  handleChange = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }))
  };

  addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <h1>SEP Container</h1>
        {/* The components on this page will later on be invisible, based on the navbar input. */}
        <TodoList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          addTodoProps={this.addTodoItem} />
      </div>
    )
  }
}

export default SepContainer;