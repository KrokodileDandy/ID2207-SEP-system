import React from "react";
import InboxItem from "../components/InboxItem";
import { dbData } from "../data/state";

const Inbox = () => {
    return (
    <div>
        <h1>Inbox</h1>
        <ul>
            {dbData.inbox.map(event => (
            <InboxItem
                key={event.id}
                event={event} 
                />
            ))}
        </ul>
    </div>
    );
}
export default Inbox;