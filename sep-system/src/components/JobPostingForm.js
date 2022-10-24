import React, { Component } from "react";

class JobPostingForm extends Component {
  state = {
    event: "",
    role: "",
    type: "",
    department: "",
    comment: "",
    status: ""
  };

  onChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.event.trim()) {
      this.props.addJobPostingProps(
        this.state.event,
        this.state.role,
        this.state.type,
        this.state.department,
        this.state.comment,
        "Open"
      );
      this.setState({event: ""});
    } else {
      alert("Please write an event name");
    }
  };

  render() {
    return (
      <div className="container">
        <h2>Add a new job posting</h2>
        <form
          onSubmit={this.handleSubmit}
          className="form-container">
            <input 
              aria-label="event name"
              name="event"
              type="text"
              placeholder="Event name..."
              className="input-text"
              value={this.state.event}
              onChange={this.onChange} />
            <input 
              aria-label="role name"
              name="role"
              type="text"
              placeholder="Role..."
              className="input-text"
              value={this.state.item}
              onChange={this.onChange} />
            <input 
              aria-label="job type"
              name="type"
              type="text"
              placeholder="Full-time / Half-time / Freelancer..."
              className="input-text"
              value={this.state.price}
              onChange={this.onChange} />
            <input 
              aria-label="department"
              name="department"
              type="text"
              placeholder="Department..."
              className="input-text"
              value={this.state.department}
              onChange={this.onChange} />
            <input
              aria-label="hiring request comment"
              name="comment"
              type="textarea"
              placeholder="Comments..."
              className="input-text"
              value={this.state.description}
              onChange={this.onChange} />
            <button>Add</button>
        </form>
      </div>
    )
  }
}
export default JobPostingForm;