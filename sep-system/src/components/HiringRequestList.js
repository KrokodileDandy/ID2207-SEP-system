import React from "react";

// Components
import HiringRequestItem from "./HiringRequestItem";
import HiringRequestForm from "./HiringRequestForm";

class HiringRequestList extends React.Component {
  render() {
    return (
      <div>
        <h1>Hiring Requests</h1>
        <HiringRequestForm addHiringRequestProps={this.props.addHiringRequestProps} />
        <ul>
          {this.props.hiringRequests.map(hiringRequest => (
            <HiringRequestItem
              key={hiringRequest.id}
              request={hiringRequest} />
          ))}
        </ul>
      </div>
    )
  }
}

export default HiringRequestList;