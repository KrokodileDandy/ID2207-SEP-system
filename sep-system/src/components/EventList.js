import React from "react";

// Components
import EventItem from './EventItem';

class EventList extends React.Component {
  render() {
    return (
      <div>
        <h1>Events</h1>
        <ul>
          {this.props.eventPlans.map(event => (
            <EventItem
              key={event.id}
              event={event} />
          ))}
        </ul>
      </div>
    )
  }
}

export default EventList;