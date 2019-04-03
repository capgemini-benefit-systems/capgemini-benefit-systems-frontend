import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "Jan Kowalski",
    };
  }

  render() {
    return (
      <header style = {headerStyle}>
      <NavLink style={logoStyle} exact to="/home"> Benefit Systems </NavLink>
      <div  style={{float:'right'}} className="logo">
      <NavLink style={profileStyle} exact to="/profile"> {this.state.name} </NavLink>
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
}
