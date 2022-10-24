import React, { Component } from "react";

class ActivityPlanForm extends Component {
  state = {
    event: "",
    name: "",
    department: ""
  };

  onChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim()) {
      this.props.addActivityPlanProps(this.state.event, this.state.name, this.state.department);
      this.setState({event: "", name:"", state: ""});
    } else {
      alert("Please write an event name, an activity plan name, and a department name.");
    }
  }

  render() {
    return (
      <div className="container">
        <h2>Add a new activity plan</h2>
        <form
          onSubmit={this.handleSubmit}
          className="form-container">
            <input 
              aria-label="event name"
              name="event"
              type="textarea"
              placeholder="Event Name..."
              className="input-text"
              value={this.state.event}
              onChange={this.onChange} />
            <input
              aria-label="activity plan name"
              name="name"
              type="textarea"
              placeholder="Activity plan name..."
              className="input-text"
              value={this.state.name}
              onChange={this.onChange} />
            <input
              aria-label="department"
              name="department"
              type="textarea"
              placeholder="department"
              className="input-text"
              value={this.state.department}
              onChange={this.onChange} />
            <button>Add</button>
        </form>
      </div>
    )
  }
}
export default ActivityPlanForm;