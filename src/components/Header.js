import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { userService } from '../service/user.service';
import Popup from "reactjs-popup";
import { Button, FormGroup, FormControl, Form } from "react-bootstrap";

export default class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      surname: "",
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    if(localStorage.getItem('user') == null) {
      return
  }
  let user = JSON.parse(localStorage.getItem('user'))
  let userId = parseInt(user.accountId) + 1
    userService.getUser(userId)
    .then(
      user => {
        console.log(user)
        this.setState({
          name: user.name,
          surname: user.surname,
          isLoggedIn: true,
        })
      }
    )
  }

  logOutClicked = event => {
    userService.logout();
    window.location.reload();
  }

  render() {
    var logout
    if(this.state.isLoggedIn) {
      logout = <NavLink onClick={this.logOutClicked} exact to="/login"> Logout </NavLink>
    } 

    return (
      <header style = {headerStyle}>
      <NavLink style={logoStyle} exact to="/home"> Benefit Systems </NavLink>
      <div  style={{float:'right'}} className="logo">
      <Popup trigger={<button> Awards</button>} position="left center">
        <div>
        <Popup trigger={<button> Add award</button>} position="bottom center">
        <div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <Form.Label>Award's Name</Form.Label>
            <FormControl
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <Form.Label>Points Cost</Form.Label>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            type="submit"
          >
            Login
          </Button>
        </form>
        </div>
      </Popup>
        </div>
      </Popup>
      <NavLink style={profileStyle} exact to="/profile"> {this.state.name + " " + this.state.surname} </NavLink>
      
      {logout}
      </div>
      </header>
    )
  }
}

const headerStyle = {
    background: '#fff',
    textAlign: 'left',
    padding: '1rem'
}
const logoStyle = {
  textAlign: 'left',
  color: '#3b90b2',
  textDecoration: 'none',
  
}
const profileStyle = {
  textAlign: 'right',
  textDecoration: 'none',
  color: 'black',
  marginRight: '3rem'
}