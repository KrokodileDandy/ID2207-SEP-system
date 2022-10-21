import React, { useContext } from "react";
import InboxItem from "../components/InboxItem";
import { dbData } from "../data/state";
import useAuthenticateContext from "../context/useAuthenticate";

function Inbox() {
    const username  = useContext(useAuthenticateContext);
    return (
    <div>
        <h1>Inbox</h1>
        {username.username == "CustomerServiceManager" &&
            <ul>
                {dbData.eventPlans.map(event => (
                !event.approved &&
                <>
                    <InboxItem
                        key={event.id}
                        event={event} 
                    />
                    <br/>
                </>
                ))}
            </ul>
        }
        {username.username == "AdministrationDepartmentManager" &&
            <ul>
                {dbData.eventPlans.map(event => (
                    !event.approved &&
                    <>
                        <InboxItem
                            key={event.id}
                            event={event} 
                        />
                        <button>Read financial feedback</button>
                        <br/>
                        <br/>
                    </>
                ))}
            </ul>
        }
        {username.username == "FinancialManager" &&
            <ul>
                {dbData.eventPlans.map(event => (
                    !event.approved && 
                    <>
                        <InboxItem
                            key={event.id}
                            event={event} 
                        />
                        <button>Give financial feedback</button>
                        <br/>
                        <br/>
                    </>
                ))}
            </ul>
        }
    </div>
    );
}
export default Inbox;