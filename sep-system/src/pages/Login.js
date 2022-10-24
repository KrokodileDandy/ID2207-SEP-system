import React from "react";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div>
        <h1>Login</h1>
        <p>Log in to an existing account using username and password</p>
        <LoginForm/>

        <h1>Create user</h1>
        <p>The system doesn't support creating users at the moment. Contact an administrator to create an account for you.</p>
    </div>
  );
}
export default Login;