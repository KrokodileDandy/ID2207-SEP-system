import React from "react";

class InboxItem extends React.Component {

  onClickApprove = (e) => {
    e.preventDefault();
    const confirm = window.confirm('Are you sure you want to approve the event request?');
    if (confirm) {
      alert('Event request approved');
    }
  }

  onClickReject = (e) => {
    e.preventDefault();
    const confirm = window.confirm('Are you sure you want to reject the event request?');
    if (confirm) {
      alert('Event request rejected');
    }
  }

  render() {
    const { name, client, date, budget, preferences } = this.props.event;
    return (
      <li>
        Event: {name} 
        <br/> 
        Date: {date} 
        <br/>
        Client: {client} 
        <br/>
        Budget: {budget}
        <br/>
        Preferences: {preferences}
        <br/>
        <button onClick={this.onClickApprove}>Approve</button><button onClick={this.onClickReject}>Reject</button>
        <br/>
      </li>
    )
  }
}

export default InboxItem;