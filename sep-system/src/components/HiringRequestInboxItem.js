import React from "react";

class HiringRequestInboxItem extends React.Component {

    onClick = (e) => {
        e.preventDefault();
    }

    onClickApprove = (e) => {
        e.preventDefault();
        const confirm = window.confirm('Are you sure you want to approve the hiring request?');
        if (confirm) {
        alert('Hiring request approved');
        }
    }

    onClickReject = (e) => {
        e.preventDefault();
        const confirm = window.confirm('Are you sure you want to reject the hiring request?');
        if (confirm) {
        alert('Hiring request rejected');
        }
    }

    render() {
        const { event, role, type, fromDepartment, comment } = this.props.request;
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
                <button onClick={this.onClickApprove}>Approve</button><button onClick={this.onClickReject}>Reject</button>
            </li>
        )
    }
}

export default HiringRequestInboxItem;