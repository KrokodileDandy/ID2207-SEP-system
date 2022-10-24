import React from "react";

// Components
import ActivityPlanForm from "./ActivityPlanForm";
import ActivityPlanItem from "./ActivityPlanItem";

class ActivityPlansList extends React.Component {
  render() {
    return (
      <div>
        <h1>Activity Plans</h1>
        <ActivityPlanForm addActivityPlanProps={this.props.addActivityPlanProps}/>
        <ul>
          {this.props.activityPlans.map(plan => (
            <ActivityPlanItem
              key={plan.id}
              plan={plan} 
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default ActivityPlansList;