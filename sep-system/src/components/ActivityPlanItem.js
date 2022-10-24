import React from "react";

class ActivityPlanItem extends React.Component {

  render() {
    const { event, name, fromDepartment } = this.props.plan;
    return (
      <li>
        Event: {event} <br/> Name: {name} <br/>Department: {fromDepartment} <br/><br/>
      </li>
    )
  }
}

export default ActivityPlanItem;