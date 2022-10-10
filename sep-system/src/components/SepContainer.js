import React from "react";
import { dbData } from "../data/state";

// Components
import TodoList from "./TodoList";
import NavBar from "./Navbar";

class SepContainer extends React.Component {
  state = dbData;

  render() {
    return (
      <div>
        <NavBar />
        <h1>Hello from Create React App</h1>
        <p>I am in a React Component!</p>
        {/* The components on this page will later on be invisible, based on the navbar input. */}
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default SepContainer;