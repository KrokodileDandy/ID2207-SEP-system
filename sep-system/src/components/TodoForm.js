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
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({title: ""});
    } else {
      alert("Please write a title");
    }
  }

  render() {
    return (
      <div>
        <h2>Task List</h2>
        <form
          onSubmit={this.handleSubmit}
          className="form-container">
            <input 
                aria-label="task title"
                name="title"
                type="text"
                placeholder="Add Todo..."
                value={this.state.title}
                onChange={this.onChange} />
            <input
                aria-label="task description"
                name="description"
                type="textarea"
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