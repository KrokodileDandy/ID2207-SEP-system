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
        <ul>
          {this.props.eventPlans.map(event => (
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