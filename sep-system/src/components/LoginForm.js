import React, { Component, useContext, useEffect, useState } from "react";
import useAuthenticateContext from "../context/useAuthenticate";
import { dbData } from "../data/state";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();


function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(useAuthenticateContext);
    const handleUsername = (username) => setUser(username);
    const navigate = useNavigate();
    
    const checkUsernameAndPassword = () => {
        var correctUsernameAndPassword = false;
        dbData.validUsers.map((user) => {
            console.log('user.username: ' + user.username);
            console.log('user.password: ' + user.username);
            if (user.username == username
                && user.password == password) {
                    correctUsernameAndPassword = true;
                    handleUsername(user.username);
                    console.log('USERNAME: ' + username);
                    return correctUsernameAndPassword;
                }
            });
            return correctUsernameAndPassword;
    };

    const handleOnChangeUsername = (e) => {
        //console.log('USERNAME: ' + username);
        e.preventDefault()
        setUsername(e.target.value);
    };

    const handleOnChangePassword = (e) => {
        //console.log('PASSWORD: ' + password);
        e.preventDefault()
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        checkUsernameAndPassword() ? navigate("/tasks") : alert("Invalid username or password");
    };

    return (
      <div>
        <form
          onSubmit={e => handleSubmit(e)}
          className="form-container">
            <input 
                aria-label="Username"
                name="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => handleOnChangeUsername(e)} />
            <input
                aria-label="Password"
                name="password"
                type="textarea"
                placeholder="Password"
                value={password}
                onChange={e => handleOnChangePassword(e)} />
            <button>Login</button>
        </form>
      </div>
    )
  };
export default LoginForm;