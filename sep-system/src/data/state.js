/**
 * This file represents the application's state. We simulate a database by
 * providing a `dbData` variable.
 * 
 * The example below shows how the data can be imported into a React component:
 * 
 * @example import { dbData } from "../data/state";
 */

var dbData = {
    todos: [
        {
            id: 1,
            title: "Task 1",
            completed: true
        },
        {
            id: 2,
            title: "Task 2",
            completed: false
        }
    ]
};

export {dbData};