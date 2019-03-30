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
      Benefit Systems
      <div  style={{float:'right'}} className="logo">
      <NavLink style={profileStyle} exact to="/url"> {this.state.name} </NavLink>
      </div>
      </header>
    )
  }
}

const headerStyle = {
    background: '#fff',
    color: '#3b90b2',
    textAlign: 'left',
    padding: '1rem'
}
const logoStyle = {
  textAlign: 'left'
  
}

const profileStyle = {
  textAlign: 'right',
  textDecoration: 'none',
  color: 'black'
  
}
