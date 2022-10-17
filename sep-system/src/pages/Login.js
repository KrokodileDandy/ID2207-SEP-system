import React from "react";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div>
        <h1>Login</h1>
        <p>Log in to an existing account using username and password</p>
        <LoginForm/>

        <h1>Create user</h1>
        <p>Create a new user if you do not already have an existing account</p>
    </div>
  );
}
export default Login;