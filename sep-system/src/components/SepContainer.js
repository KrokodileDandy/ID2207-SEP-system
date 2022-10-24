import React from "react";
import { dbData } from "../data/state";
import { Route, Routes } from "react-router-dom";
// Generate new IDs for task items
import { v4 as uuidv4 } from "uuid";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Inbox from "../pages/Inbox";

// Components
import NavBar from "./Navbar";
import EventList from "./EventList";
import TodoList from "./TodoList";
import BudgetRequestList from "./BudgetRequestList";
import HiringRequestList from "./HiringRequestList";
import JobPostingsList from "./JobPostingsList";

class SepContainer extends React.Component {
  state = dbData;

  handleChange = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }))
  };

  addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    })
  }

  addEventItem = (name, client, date) => {
    const newEvent = {
      id: uuidv4(),
      name: name,
      client: client,
      date: date,
      budget: "",
      preferences: "",
      approved: false
    };
    this.setState({
      eventPlans: [...this.state.eventPlans, newEvent]
    });
  };

  addBudgetRequestItem = (event, item, price, department, comment) => {
    const newBudgetRequest = {
      id: uuidv4(),
      event: event,
      item: item,
      price: price,
      department: department,
      comment: comment,
    };
    this.setState({
      budgetRequests: [...this.state.budgetRequests, newBudgetRequest]
    });
  };
  
  addHiringRequestItem = (event, role, type, department, comment) => {
    const newHiringRequest = {
      id: uuidv4(),
      event: event,
      role: role,
      type: type,
      department: department,
      comment: comment,
    };
    this.setState({
      hiringRequests: [...this.state.hiringRequests, newHiringRequest]
    });
  };

  addJobPostingItem = (event, role, type, department, comment, status) => {
    const newJobPosting = {
      id: uuidv4(),
      event: event,
      role: role,
      type: type,
      department: department,
      comment: comment,
      status: status
    };
    this.setState({
      jobPostings: [...this.state.jobPostings, newJobPosting]
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/events" element={
            <EventList 
              eventPlans={this.state.eventPlans} 
              addEventProps={this.addEventItem}
              />}>
          </Route>
          <Route path="/tasks" element={
            <TodoList
              todos={this.state.todos}
              handleChangeProps={this.handleChange}
              addTodoProps={this.addTodoItem}
              setUpdate={this.setUpdate} />}>
          </Route>
          <Route path="/budgetRequests" element={
            <BudgetRequestList
              budgetRequests={this.state.budgetRequests}
              addBudgetRequestProps={this.addBudgetRequestItem} />}>
          </Route>
          <Route path="/hiringRequests" element={
            <HiringRequestList
              hiringRequests={this.state.hiringRequests}
              addHiringRequestProps={this.addHiringRequestItem} />}>
          </Route>
          <Route path="/jobPostings" element={
            <JobPostingsList
              jobPostings={this.state.jobPostings}
              addJobPostingProps={this.addJobPostingItem} />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/home" element={<Home />}/>
          <Route path="/inbox" element={
            <Inbox
            eventPlans={this.state.eventPlans}
            budgetRequests={this.state.budgetRequests}
            hiringRequests={this.state.hiringRequests}
            addEventProps={this.addEventItem} />}/>
        </Routes>
      </div>
    )
  }
}

export default SepContainer;