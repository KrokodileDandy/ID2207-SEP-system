import React from "react";

class EventItem extends React.Component {

  render() {
    const { name, client, date } = this.props.event;
    return (
      <li>
        Event: {name} <br/> Date: {date} <br/>Client: {client} <br/><br/>
      </li>
    )
  }
}

export default EventItem;