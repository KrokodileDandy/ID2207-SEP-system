import React, { Component } from "react";

class EventRequestForm extends Component {
  state = {
    name: "",
    client: "",
    date: "",
  };

  onChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
  };

  onChangeName = e => {
    this.setState({
        name: e.target.value,
    });
  };

  onChangeClient = e => {
    this.setState({
        client: e.target.value,
    });
  };

  onChangeDate = e => {
    this.setState({
        date: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim()) {
      this.props.addEventProps(this.state.name, this.state.client, this.state.date);
      this.setState({name: "", client:"", date: ""});
    } else {
      alert("Please write a name, client and date");
    }
  }

  render() {
    return (
      <div>
        <h2>Add a new event:</h2>
        <form
          onSubmit={this.handleSubmit}
          className="form-container">
            <input 
                aria-label="eventname"
                name="event"
                type="textarea"
                placeholder="Event Name..."
                value={this.state.name}
                onChange={this.onChangeName} />
            <input
                aria-label="client"
                name="client"
                type="textarea"
                placeholder="Client..."
                value={this.state.client}
                onChange={this.onChangeClient} />
            <input
                aria-label="date"
                name="date"
                type="textarea"
                placeholder="Date..."
                value={this.state.date}
                onChange={this.onChangeDate} />
            <button>Add</button>
        </form>
      </div>
    )
  }
}
export default EventRequestForm;