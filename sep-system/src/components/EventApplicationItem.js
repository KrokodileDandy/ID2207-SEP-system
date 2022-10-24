import React from "react";

class EventApplicationItem extends React.Component {

  render() {
    const { event, name, status } = this.props.event;
    return (
      <li>
        Event: {event} <br/> Name: {name} <br/>Status: {status} <br/><br/>
      </li>
    )
  }
}

export default EventApplicationItem;