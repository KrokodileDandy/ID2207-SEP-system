# ID2207 SEP System

This is a repository for the extreme programming exercise in Modern Methods in Software Engineering at KTH Royal Institute of Technology.

## Application Structure

The file `state.js` contains the application's execution state. We simulate a database by providing a `dbData` variable inside `state.js`.

## Tests

GitHub actions will execute the tests when trying to push onto the `main` branch or if a merge request to that branch is created.

To execute the tests manually, navigate into `sep-system/` and execute `npm test`.
