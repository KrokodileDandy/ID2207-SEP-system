import React from "react";

// Components
import TodoItem from "./BudgetRequestItem";
import BudgetRequestForm from "./BudgetRequestForm";

class BudgetRequestList extends React.Component {
  render() {
    return (
      <div>
        <h1>Budget Requests</h1>
        <BudgetRequestForm addBudgetRequestProps={this.props.addBudgetRequestProps} />
        <ul>
          {this.props.budgetRequests.map(budgetRequest => (
            <TodoItem
              key={budgetRequest.id}
              event={budgetRequest} />
          ))}
        </ul>
      </div>
    )
  }
}

export default BudgetRequestList;