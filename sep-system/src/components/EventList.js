import React from "react";
import EventRequestForm from './EventRequestForm';

// Components
import EventItem from './EventItem';

class EventList extends React.Component {
  render() {
    return (
      <div>
        <h1>Events</h1>
        <EventRequestForm addEventProps={this.props.addEventProps}/>
        <h2>Upcoming Events</h2>
        <ul>
          {this.props.eventPlans.map(event => (
            event.approved &&
            <EventItem
              key={event.id}
              event={event} 
            />
          ))}
        </ul>
        <h2>Event requests waiting to be approved</h2>
        <ul>
          {this.props.eventPlans.map(event => (
            !event.approved &&
            <EventItem
              key={event.id}
              event={event} 
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default EventList;