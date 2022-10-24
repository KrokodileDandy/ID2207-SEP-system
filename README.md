# ID2207 SEP System

This is a repository for the extreme programming exercise in "Modern Methods in Software Engineering" at KTH Royal Institute of Technology.

## Setup

If not already done yet, clone this repository by executing `git clone git@github.com:KrokodileDandy/ID2207-SEP-system.git`. Then navigate into the `sep-system/` folder and execute `npm install` to setup the development environment. In order to execute the application, run `npm start`.

## How to Use

The system uses user authentication. That means, in order to use the system, one has to login. The following users are available:

| Username | Password | Access |
| --- | --- | --- |
| ProductionManager | ProductionManagerPassword | Inbox (various), event applications, activity plans, budget requests, hiring requests |
| Employee | EmployeePassword | Tasks, budget requests |
| AdministrationDepartmentManager | AdministrationDepartmentManagerPassword | Inbox for event requests |
| CustomerServiceManager | CustomerServiceManagerPassword | Inbox for event requests, event plans |
| CustomerService | CustomerServicePassword | Event plans |
| FinancialManager | FinancialManagerPassword | Inbox for event and budget requests|
| ServiceManager | ServiceManagerPassword | Inbox (various), event applications, activity plans, budget requests, hiring requests |
|  HumanResources| HumanResourcesPassword | Inbox for hiring requests, job postings |
| Admin | AdminPassword | Everything |

> **Attention!** Based on which user is logged in and what role they have, not all components of the system will be shown! We *highly* recommend using the **Admin** user, which hase access to *all* components of the system at all times!

## Application Structure

The React app is inside the folder `sep-system/`. All following explanations assume you are in that folder.

The file `data/state.js` contains the application's execution state. We simulate a database by providing a `dbData` variable inside `state.js`, which is called upon system startup in the `SepContainer` component. All data changes are handled by code inside that component too.

## Tests

GitHub actions will execute the tests when trying to push onto the `main` branch or if a merge request to that branch is created.

To execute the tests manually, execute `npm test`.
