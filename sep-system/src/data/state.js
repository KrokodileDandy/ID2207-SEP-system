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
        ProductionManager: [
            'inbox',
            'eventApplications',
            'activityPlans',
            'budgetRequests',
            'hiringRequests'
        ],
        Employee: [
            'todos',
            'budgetRequests'
        ],
        AdministrationDepartmentManager: ['inbox'],
        CustomerServiceManager: [
            'eventPlans',
            'inbox'
        ],
        CustomerService: [
            'eventPlans'
        ],
        FinancialManager: ['inbox'],
        ServiceManager: [
            'inbox',
            'eventApplications',
            'activityPlans',
            'budgetRequests',
            'hiringRequests'
        ],
        HumanResources: [
            'inbox',
            'jobPostings'
        ],
        Admin: [
            'inbox',
            'eventPlans',
            'eventApplications',
            'activityPlans',
            'todos',
            'budgetRequests',
            'hiringRequests',
            'jobPostings'
        ]
    },
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
            name: "Wedding - Mr. John Smith and Ms. Svenja Swan: Production",
            status: "Open"
        },
        {
            event: "Wedding - Mr. John Smith and Ms. Svenja Swan",
            name: "Wedding - Mr. John Smith and Ms. Svenja Swan: Service",
            status: "Open"
        }
    ],
    // Task list of each department
    activityPlans: [
        {
            eventApplication: "Wedding - Mr. John Smith and Ms. Svenja Swan: Production",
            name: "Wedding - Mr. John Smith and Ms. Svenja Swan: Production (Decoration)",
            fromDepartment: "Decoration"
        }
    ],
    todos: [
        {
            id: uuidv4(),
            activityPlan: "Wedding - Mr. John Smith and Ms. Svenja Swan: Production (Decoration)",
            title: "Create tasks for this event",
            description: "",
            completed: true
        },
        {
            id: uuidv4(),
            activityPlan: "Wedding - Mr. John Smith and Ms. Svenja Swan: Production (Decoration)",
            title: "Hire a specialized florist",
            description: "",
            completed: false
        },
        {
            id: uuidv4(),
            activityPlan: "Wedding - Mr. John Smith and Ms. Svenja Swan: Production (Decoration)",
            title: "Create a hiring request for the florist",
            description: "",
            completed: true
        },
        {
            id: uuidv4(),
            activityPlan: "Wedding - Mr. John Smith and Ms. Svenja Swan: Production (Decoration)",
            title: "Hire a band technician",
            description: "",
            completed: false
        },
        {
            id: uuidv4(),
            activityPlan: "Wedding - Mr. John Smith and Ms. Svenja Swan: Production (Decoration)",
            title: "Create a hiring request for the band technician",
            description: "Job posting is online",
            completed: true
        }
    ],
    budgetRequests: [
        {
            id: uuidv4(),
            event: "Wedding - Mr. John Smith and Ms. Svenja Swan",
            item: "Band",
            fromDepartment: "Audio",
            price: "275.000",
            comment: "There are not many available bands for so it's more expensive than we first anticipated."
        },
        {
            id: uuidv4(),
            event: "Wedding - Mr. John Smith and Ms. Svenja Swan",
            item: "Exotic flowers",
            fromDepartment: "Decoration",
            price: "1.000",
            comment: "The flowers the client wants seem to be exotic, we hence can't use the default pricing."
        }
    ],
    hiringRequests: [
        {
            id: uuidv4(),
            event: "Wedding - Mr. John Smith and Ms. Svenja Swan",
            role: "Florist",
            type: "Freelancer",
            fromDepartment: "Decoration",
            comment: "We need a specialized professional for the exotic plants."
        }
    ],
    jobPostings: [
        {
            id: uuidv4(),
            event: "Wedding - Mr. John Smith and Ms. Svenja Swan",
            role: "Band Technician",
            type: "Freelancer",
            fromDepartment: "Audio",
            comment: "We need a specialized professional for the exotic plants.",
            status: "Open"
        }
    ]
};

export {dbData};