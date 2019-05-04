import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Form, Dropdown,DropdownButton,MenuItem, } from "react-bootstrap";
import "./Register.css";
import { userService } from '../../service/user.service';

export class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      repeat_password: "",
      login: "",
      name: "",
      surname: "",
      role: "",
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0 && this.state.password === this.state.repeat_password;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  adminRoleClicked = event => {
      this.setState({
          role: "ADMINISTRATOR"
      })
  }

  employeeRoleClicked = event => {
    this.setState({
        role: "EMPLOYEE"
    })
}

  handleRegister = event => {
    event.preventDefault();
    const { login, email, name, surname, password, role } = this.state;

    if (!(email && password && login)) {
      return;
    }

    userService.register(login, password, email, name, surname, role)
    .then(
      user => {
          const { from } = this.props.location.state || { from: { pathname: "/" } };
          this.props.history.push(from);
          window.location.reload();
      },
      error => console.log(error)//this.setState({ error, loading: false })
     );
  }

  render() {
    return (
      <div className="Register">
      <div>
        <h3>Registration</h3>
      </div>
      <form>
      <FormGroup controlId="login" bsSize="large">
          <Form.Label>Login</Form.Label>
          <FormControl
            autoFocus
            type="login"
            value={this.state.login}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="email" bsSize="large">
          <Form.Label>Email</Form.Label>
          <FormControl
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="name" bsSize="large">
          <Form.Label>Name</Form.Label>
          <FormControl
            autoFocus
            type="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="surname" bsSize="large">
          <Form.Label>Surname</Form.Label>
          <FormControl
            autoFocus
            type="surname"
            value={this.state.surnames}
            onChange={this.handleChange}
          />
        </FormGroup>

        <DropdownButton id="dropdown-basic-button" title="Role">
            <Dropdown.Item onClick={this.adminRoleClicked}>Administrator</Dropdown.Item>
            <Dropdown.Item onClick={this.employeeRoleClicked}>Employee</Dropdown.Item>
        </DropdownButton>

        <FormGroup controlId="password" bsSize="large">
          <Form.Label>Password</Form.Label>
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="repeat_password" bsSize="large">
          <Form.Label>Repeat Password</Form.Label>
          <FormControl
            value={this.state.repeat_password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <Button
          block
          bsSize="large"
          disabled={!this.validateForm()}
          type="submit"
          onClick={this.handleRegister}
        >
          Register
        </Button>
      </form>
    </div>
    )
  }
}

export default Register
