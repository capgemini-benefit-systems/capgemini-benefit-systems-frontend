import { userService } from '../../service/user.service';
import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Form, Alert } from "react-bootstrap";
import "./Login.css";
import { NavLink } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    userService.logout();
    this.state = {
      username: "",
      password: "",
      submitted: false,
      loading: false,
      error: ''
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;

    // stop here if form is invalid
    if (!(username && password)) {
        return;
    }

    this.setState({ loading: true });
    userService.login(username, password)
        .then(
            user => {
                const { from } = this.props.location.state || { from: { pathname: "/" } };
                this.props.history.push(from);
                window.location.reload();
            },
            error => this.setState({ error, loading: false })
        );
  }

  render() {
    return (
      <div className="Login">
        <div>
          <h3>Sign In</h3>
        </div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <Form.Label>Login</Form.Label>
            <FormControl
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <Form.Label>Password</Form.Label>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
        <NavLink exact to="/register"> Create New Account </NavLink>
        
      </div>



    );
  }
}

export default Login;

 //https://serverless-stack.com/chapters/create-a-login-page.html