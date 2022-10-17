import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import useAuthenticateContext from "../context/useAuthenticate";

function NavBar() {
    const username  = useContext(useAuthenticateContext);
    const list = ['ProductionManager', 'Employee', 'CustomerServiceManager'];
    return (
      list.includes(username.username) &&
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
    )
  }

export default NavBar;