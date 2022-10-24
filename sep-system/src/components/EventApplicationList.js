import React from "react";

// Components
import EventApplicationForm from './EventApplicationForm';
import EventApplicationItem from './EventApplicationItem';

class EventApplicationList extends React.Component {
  render() {
    return (
      <div>
        <h1>Event Applications</h1>
        <EventApplicationForm addEventApplicationProps={this.props.addEventApplicationProps}/>
        <ul>
          {this.props.eventApplications.map(event => (
            <EventApplicationItem
              key={event.id}
              event={event} 
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default EventApplicationList;