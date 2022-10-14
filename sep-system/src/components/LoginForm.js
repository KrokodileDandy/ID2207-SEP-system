import React, { Component } from "react";
import { dbData } from "../data/state";
import { Link } from "react-router-dom";
class LoginForm extends Component {
    state = {
        username: "",
        password: ""
    };
    
    checkUsernameAndPassword = e => {
        e.preventDefault();
        var correctUsernameAndPassword = false;
        dbData.validUsers.map((user) => {
            if (user.username == this.state.username
                && user.password == this.state.password) {
                    correctUsernameAndPassword = true;
                    return correctUsernameAndPassword;
                }
            });
            return correctUsernameAndPassword;
        };
        
        onChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            });
        };
        
        handleSubmit = e => {
        e.preventDefault();
        if (this.checkUsernameAndPassword(e)) {
            // Write logic here
            alert("Correct username and password");
        }
        else {
            // Write logic here
            alert("Invalid username or password");
        }
    };

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="form-container">
            <input 
                aria-label="Username"
                name="username"
                type="text"
                placeholder="Username"
                value={this.state.title}
                onChange={this.onChange} />
            <input
                aria-label="Password"
                name="password"
                type="textarea"
                placeholder="Password"
                value={this.state.description}
                onChange={this.onChange} />
            <button>Login</button>
        </form>
      </div>
    )
  }
}
export default LoginForm;