import React from "react";
import { dbData } from "../data/state";

class BudgetRequestItem extends React.Component {

    onClick = (e) => {
        e.preventDefault();
        alert(
            "Event: " + dbData.eventPlans[0].name +
            "\nBudget: " + dbData.eventPlans[0].budget +
            "\nPreferences: " + dbData.eventPlans[0].preferences
        );
    }

    onClickApprove = (e) => {
        e.preventDefault();
        const confirm = window.confirm('Are you sure you want to approve the event request?');
        if (confirm) {
        alert('Event request approved');
        }
    }

    onClickReject = (e) => {
        e.preventDefault();
        const confirm = window.confirm('Are you sure you want to reject the event request?');
        if (confirm) {
        alert('Event request rejected');
        }
    }

    render() {
        const { event, newBudget, description } = this.props.event;
        return (
            <>
                Event: {event} 
                <br/> 
                newBudget: {newBudget} 
                <br/>
                Description: {description} 
                <br/>
                <button onClick={this.onClickApprove}>Approve</button><button onClick={this.onClickReject}>Reject</button>
                <br/>
                <button onClick={this.onClick}>See original event request info</button>
            </>
        )
    }
}

export default BudgetRequestItem;