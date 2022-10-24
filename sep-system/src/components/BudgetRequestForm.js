import React, { Component } from "react";

class BudgetRequestForm extends Component {
  state = {
    event: "",
    item: "",
    price: "",
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
      this.props.addBudgetRequestProps(
        this.state.event,
        this.state.item,
        this.state.price,
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
      <div className="container">
        <h2>Add a new budget request</h2>
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
              aria-label="item name"
              name="item"
              type="text"
              placeholder="Item name..."
              className="input-text"
              value={this.state.item}
              onChange={this.onChange} />
            <input 
              aria-label="price"
              name="price"
              type="text"
              placeholder="Price in SEK..."
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
              aria-label="budget request comment"
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
export default BudgetRequestForm;