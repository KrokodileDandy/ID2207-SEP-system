import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import useAuthenticateContext from "../context/useAuthenticate";
import { dbData } from "../data/state";

function NavBar() {
    const username  = useContext(useAuthenticateContext);
    const list = ['ProductionManager', 'Employee', 'CustomerServiceManager', 
    "AdministrationDepartmentManager", "CustomerService", "FinancialManager", 
    "ServiceManager", "HumanResources", "Admin"];
    const accessList = dbData.role[username.username];
    return (
      list.includes(username.username) &&
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {accessList.includes('eventPlans') &&
              <li>
                <Link to="/events">Events</Link>
              </li>
            }
            {accessList.includes('budgetRequests') &&
              <li>
                <Link to="/budgetRequests">Budget Requests</Link>  
              </li>}
            {accessList.includes('todos') &&
              <li>
                <Link to="/tasks">Tasks</Link>
              </li>
            }
            {accessList.includes('inbox') &&
              <li>
                <Link to="/inbox">Inbox</Link>
              </li>
            }
          </ul>
        </nav>
    )
  }

export default NavBar;