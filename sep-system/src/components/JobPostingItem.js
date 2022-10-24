import React from "react";

class JobPostingItem extends React.Component {
    render() {
        const { event, role, type, comment, fromDepartment, status } = this.props.posting;
        return (
            <li>
                Event: {event}
                <br />
                Role: {role}
                <br/> 
                Job type: {type}
                <br/>
                Comment: {comment} 
                <br/>
                Requesting department: {fromDepartment}
                <br />
                Status: {status}
            </li>
        )
    }
}

export default JobPostingItem;