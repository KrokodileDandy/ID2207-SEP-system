import React, { Component } from "react";

class HiringRequestForm extends Component {
  state = {
    event: "",
    role: "",
    type: "",
    department: "",
    comment: ""
  };

  onChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.event.trim()) {
      this.props.addHiringRequestProps(
        this.state.event,
        this.state.role,
        this.state.type,
        this.state.department,
        this.state.comment
      );
      this.setState({event: ""});
    } else {
      alert("Please write an event name");
    }
  };

  render() {
    return (
      <div>
        Add a new hiring request:
        <div className="container">
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
      </div>
    )
  }
}
export default HiringRequestForm;