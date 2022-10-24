import React, { useContext } from "react";
import InboxItem from "../components/InboxItem";
import useAuthenticateContext from "../context/useAuthenticate";
import BudgetRequestInboxItem from "../components/BudgetRequestInboxItem";
import HiringRequestInboxItem from "../components/HiringRequestInboxItem";

function Inbox(props) {
    const username  = useContext(useAuthenticateContext);
    return (
    <div>
        <h1>Inbox</h1>
        {username.username == "CustomerServiceManager" | username.username == "Admin" &&
            <div>
                <h2>Event Requests</h2>
                <p><i>Need to be approved by the customer service manager.</i></p>
                <ul>
                    {props.eventPlans.map(event => (
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
            </div>
        }
        {username.username == "AdministrationDepartmentManager" | username.username == "Admin" &&
            <div>
                <h2>Event Request - Administrative</h2>
                <p><i>Need to be processed by the administration department manager.</i></p>
                <ul>
                    {props.eventPlans.map(event => (
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
            </div>
        }
        {username.username == "FinancialManager" | username.username == "Admin" &&
            <div>
                <h2>Event Requests - Financial</h2>
                <ul>
                    {props.eventPlans.map(event => (
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
                <h2>Budget Requests</h2>
                <ul>
                    {props.budgetRequests.map(request => (
                        <>
                            <BudgetRequestInboxItem
                                key={request.id}
                                event={request} 
                            />
                        </>
                    ))}
                </ul>
            </div>
        }
        {username.username == "HumanResources" | username.username == "Admin" &&
            <div>
                <h2>Hiring Requests</h2>
                <ul>
                    {props.hiringRequests.map(request => (
                        !request.approved && 
                        <>
                            <HiringRequestInboxItem
                                key={request.id}
                                request={request} 
                            />
                            <br/>
                        </>
                    ))}
                </ul>
            </div>
        }
    </div>
    );
}
export default Inbox;