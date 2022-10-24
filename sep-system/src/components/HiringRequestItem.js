import React from "react";
import { dbData } from "../data/state";

class HiringRequestItem extends React.Component {

    onClick = (e) => {
        e.preventDefault();
        alert(
            "Event: " + dbData.hiringRequests[0].name +
            "\Role: " + dbData.hiringRequests[0].role
        );
    }

    render() {
        const { event, role, type, comment, fromDepartment } = this.props.request;
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
            </li>
        )
    }
}

export default HiringRequestItem;