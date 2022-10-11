import React from "react";

// Components
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h1>Task Management</h1>
        <TodoForm addTodoProps={this.props.addTodoProps} />
        <ul>
          {this.props.todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChangeProps={this.props.handleChangeProps}
              setUpdate={this.props.setUpdate} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TodoList;