import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes } from "react-router-dom";
import Login from './pages/Login';
import useAuthenticateContext from './context/useAuthenticate';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import EventList from './components/EventList';
import TodoList from './components/TodoList';
import { dbData } from './data/state';
import SepContainer from './components/SepContainer';

function App() {
  const [username, setUser] = useState("");
  return (
    <div className="App">
      <useAuthenticateContext.Provider value={{username, setUser}}>
        <BrowserRouter>
            {/* <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/events" element={<EventList eventPlans={dbData.eventPlans}/>}/>
              <Route path="/tasks" element={<TodoList todos={dbData.todos}/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/home" element={<Home/>}/>
            </Routes> */}
            <SepContainer/>
        </BrowserRouter>
      </useAuthenticateContext.Provider>
    </div>
  );
}

export default App;
