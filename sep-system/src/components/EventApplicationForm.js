import React, { Component } from "react";

class EventApplicationForm extends Component {
  state = {
    event: "",
    name: "",
    status: ""
  };

  onChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim()) {
      this.props.addEventApplicationProps(this.state.event, this.state.name, this.state.state);
      this.setState({event: "", name:"", state: "Open"});
    } else {
      alert("Please write an event name and an event application name.");
    }
  }

  render() {
    return (
      <div className="container">
        <h2>Add a new event application</h2>
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
                aria-label="event application name"
                name="name"
                type="textarea"
                placeholder="Event application name..."
                className="input-text"
                value={this.state.name}
                onChange={this.onChange} />
            <button>Add</button>
        </form>
      </div>
    )
  }
}
export default EventApplicationForm;