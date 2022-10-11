import React from "react";

class EventItem extends React.Component {

  render() {
    const { name, date } = this.props.event;

    return (
      <li>
        {name} ({date})
      </li>
    )
  }
}

export default EventItem;