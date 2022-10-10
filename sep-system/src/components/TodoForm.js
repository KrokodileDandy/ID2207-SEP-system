import React, { Component } from "react";

class TodoForm extends Component {
  state = {
    title: "",
    description: ""
  };

  onChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({title: ""});
  }

  render() {
    return (
      <div>
        <h2>Task List</h2>
        <form onSubmit={this.handleSubmit}>
            <input 
                name="title"
                type="text"
                placeholder="Add Todo..."
                value={this.state.title}
                onChange={this.onChange} />
            <input
                name="description"
                type="textbox"
                placeholder="Description..."
                value={this.state.description}
                onChange={this.onChange} />
            <button>Add</button>
        </form>
      </div>
    )
  }
}
export default TodoForm;