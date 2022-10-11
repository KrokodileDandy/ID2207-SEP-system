import React from "react";
import { dbData } from "../data/state";
import { Route, Routes } from "react-router-dom";
// Generate new IDs for task items
import { v4 as uuidv4 } from "uuid";

// Pages
import About from "../pages/About";
import NotFound from "../pages/NotFound";

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

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={
            <TodoList
              todos={this.state.todos}
              handleChangeProps={this.handleChange}
              addTodoProps={this.addTodoItem}
              setUpdate={this.setUpdate} />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    )
  }
}

export default SepContainer;