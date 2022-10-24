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
            if (user.username == username
                && user.password == password) {
                    correctUsernameAndPassword = true;
                    handleUsername(user.username);
                    return correctUsernameAndPassword;
                }
            });
            return correctUsernameAndPassword;
    };

    const handleOnChangeUsername = (e) => {
        e.preventDefault()
        setUsername(e.target.value);
    };

    const handleOnChangePassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        checkUsernameAndPassword() ? navigate("/home") : alert("Invalid username or password");
    };

    return (
      <div className="container">
        <form
          onSubmit={e => handleSubmit(e)}
          className="form-container">
            <input 
                aria-label="Username"
                name="username"
                type="text"
                placeholder="Username"
                className="input-text"
                value={username}
                onChange={e => handleOnChangeUsername(e)} />
            <input
                aria-label="Password"
                name="password"
                type="textarea"
                placeholder="Password"
                className="input-text"
                value={password}
                onChange={e => handleOnChangePassword(e)} />
            <button>Login</button>
        </form>
      </div>
    )
  };
export default LoginForm;