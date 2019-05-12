import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { userService } from '../service/user.service';

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
      <NavLink style={profileStyle} exact to="/profile"> {this.state.name + " " + this.state.surname} </NavLink>
      <NavLink style={profileStyle} exact to="/ranking">Ranking </NavLink>
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