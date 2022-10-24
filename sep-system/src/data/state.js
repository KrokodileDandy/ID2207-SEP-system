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
            username: "AdministrationDepartmentManager",
            password: "AdministrationDepartmentManagerPassword",
        },
        {
            username: "CustomerServiceManager",
            password: "CustomerServiceManagerPassword",
        },
        {
            username: "CustomerService",
            password: "CustomerServicePassword",
        },
        {
            username: "FinancialManager",
            password: "FinancialManagerPassword",
        },
        {
            username: "ServiceManager",
            password: "ServiceManagerPassword",
        },
        {
            username: "HumanResources",
            password: "HumanResourcesPassword",
        },
        {
            username: "Admin",
            password: "AdminPassword"
        }
    ],
    role: { 
        ProductionManager: ['todos','inbox'],
        Employee: ['inbox', 'budgetRequests'],
        AdministrationDepartmentManager: ['inbox'],
        CustomerServiceManager: ['eventPlans', 'inbox'],
        CustomerService: ['eventPlans','inbox'],
        FinancialManager: ['inbox',],
        ServiceManager: ['todos'],
        HumanResources: ['inbox'],
        Admin: ['inbox', 'eventPlans', 'todos', 'budgetRequests']
    },
    eventRequests: [
        {
            id: uuidv4(),
            name: "Wedding - Mr. Norbert Pfaffer and Ms. Elizabeth Hilde",
            client: "Mr. Pfaffer",
            date: "16.02.2023",
            budget: "150000 SEK",
            preferences: "Flowers, food, band, ceremony, facility"
        }
    ],
    eventPlans: [
        {
            id: uuidv4(),
            name: "Wedding - Mr. John Smith and Ms. Svenja Swan",
            client: "Mr. Smith",
            date: "31.10.2022",
            budget: "250000 SEK",
            preferences: "Flowers, food, band, ceremony, facility",
            approved: true
        },
        {
            id: uuidv4(),
            name: "Funeral - Mr. Gerald Smith",
            client: "Mr. Smith",
            date: "30.10.2022",
            budget: "20000 SEK",
            preferences: "Food, flowers",
            approved: true
        },
        {
            id: uuidv4(),
            name: "Birthday - Mr. Liam Cooper",
            client: "Mr. Smith",
            date: "01.11.2022",
            budget: "10000 SEK",
            preferences: "Food, drinks, show, band, party",
            approved: false
        },
        {
            id: uuidv4(),
            name: "Anniversary - Mr. Steve Nash and Ms. Sarah Nash",
            client: "Mr. Nash",
            date: "02.11.2022",
            budget: "15000 SEK",
            preferences: "Food, flowers",
            approved: false
        }
    ],
    // Event application by the key managers
    eventApplications: [
        {
            event: "Wedding - Mr. John Smith and Ms. Svenja Swan",
            name: "Wedding - Mr. Smith and Ms. Swan",
        }
    ],
    // Task list of each department
    activityPlans: [
        {
            event: "Wedding - Mr. John Smith and Ms. Svenja Swan"
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
    ],
    budgetRequests: [
        {
            id: uuidv4(),
            event: "Wedding - Mr. John Smith and Ms. Svenja Swan",
            fromDepartment: "",
            newBudget: "275000 SEK",
            description: "There are not many available bands for so it's more expensive than we first anticipated."
        }
    ]
};

export {dbData};