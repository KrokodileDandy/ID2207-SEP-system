import React, { Component } from "react";

class TodoForm extends Component {
  state = {
    title: "",
    description: "",
    activityPlan: ""
  };

  onChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title, this.state.description, this.state.activityPlan);
      this.setState({title: "", description: "", activityPlan: ""});
    } else {
      alert("Please write a title");
    }
  }

  render() {
    return (
      <div className="container">
        <h2>Add a new task</h2>
        <form
          onSubmit={this.handleSubmit}
          className="form-container">
            <input 
              aria-label="task title"
              name="title"
              type="text"
              placeholder="Add Todo..."
              className="input-text"
              value={this.state.title}
              onChange={this.onChange} />
            <input
              aria-label="task description"
              name="description"
              type="textarea"
              placeholder="Description..."
              className="input-text"
              value={this.state.description}
              onChange={this.onChange} />
            <input
              aria-label="activity plan"
              name="activityPlan"
              type="textarea"
              placeholder="Activity plan..."
              className="input-text"
              value={this.state.activityPlan}
              onChange={this.onChange} />
            <button>Add</button>
        </form>
      </div>
    )
  }
}
export default TodoForm;