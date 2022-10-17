import React, { Component } from "react";

class EventRequestForm extends Component {
  state = {
    name1: "",
    client: "",
    date: ""
  };

  onChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
  };

  onChangeName = e => {
    this.setState({
        name1: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name1.trim()) {
      this.props.addEventProps(this.state.name1);
      this.setState({name1: ""});
    } else {
      alert("Please write a name");
    }
  }

  render() {
    return (
      <div>
        Add a new event:
        <form
          onSubmit={this.handleSubmit}
          className="form-container">
            <input 
                aria-label="eventname"
                name="event"
                type="textarea"
                placeholder="Event Name..."
                value={this.state.name1}
                onChange={this.onChangeName} />
            <input
                aria-label="client"
                name="client"
                type="textarea"
                placeholder="Client..."
                value={this.state.client}
                onChange={this.onChange} />
            <input
                aria-label="date"
                name="date"
                type="textarea"
                placeholder="Date..."
                value={this.state.date}
                onChange={this.onChange} />
            <button>Add</button>
        </form>
      </div>
    )
  }
}
export default EventRequestForm;