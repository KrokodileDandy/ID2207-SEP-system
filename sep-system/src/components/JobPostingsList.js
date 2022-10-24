import React from "react";

// Components
import JobPostingItem from "./JobPostingItem";
import JobPostingForm from "./JobPostingForm";

class JobPostingsList extends React.Component {
  render() {
    return (
      <div>
        <h1>Job Postings</h1>
        <JobPostingForm addJobPostingProps={this.props.addJobPostingProps} />
        <ul>
          {this.props.jobPostings.map(jobPosting => (
            <JobPostingItem
              key={jobPosting.id}
              posting={jobPosting} />
          ))}
        </ul>
      </div>
    )
  }
}

export default JobPostingsList;