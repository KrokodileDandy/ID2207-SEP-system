/**
 * This file represents the application's state. We simulate a database by
 * providing a `dbData` variable.
 * 
 * The example below shows how the data can be imported into a React component:
 * 
 * @example import { dbData } from "../data/state";
 */

// Generate new IDs for task items
import { v4 as uuidv4 } from "uuid";

var dbData = {
    validUsers: [
        {
            username: "ProductionManager",
            password: "ProductionManagerPassword",
        },
        {
            username: "Employee",
            password: "EmployeePassword",
        },
        {
            username: "CustomerServiceManager",
            password: "CustomerServiceManagerPassword",
        },
    ],
    eventPlans: [
        {
            name: "Wedding - Mr. John Smith and Ms. Svenja Swan",
            client: "Mr. Smith",
            date: "31.10.2022"
        },
        {
            name: "Funeral - Mr. Gerald Smith",
            client: "Mr. Smith",
            date: "30.10.2022"
        }
    ],
    // Event application by the key managers
    eventApplications: [
        {
            name: "Wedding - Mr. Smith and Ms. Swan",
            by: "Production Manager"
        }
    ],
    // Task list of each department
    activityPlans: [
        {
            name: "Wedding - Mr. Smith and Ms. Swan",
        }
    ],
    todos: [
        {
            id: uuidv4(),
            activityPlan: null,
            title: "Task 1",
            completed: true
        },
        {
            id: uuidv4(),
            activityPlan: null,
            title: "Task 2",
            completed: false
        }
    ]
};

export {dbData};