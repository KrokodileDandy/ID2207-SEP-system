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
    todos: [
        {
            id: uuidv4(),
            title: "Task 1",
            completed: true
        },
        {
            id: uuidv4(),
            title: "Task 2",
            completed: false
        }
    ]
};

export {dbData};