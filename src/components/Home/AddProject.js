import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class AddActivity extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          name: "Add Project",
        };
      }

  render() {
    return (
      <header style = {addProjectStyle}> 
      <div>
      <NavLink style={projectStyle} exact to="/project"> {this.state.name} </NavLink>
      </div>
      </header> 
    )
  }
}

const addProjectStyle = {
    background: '#6a6a6a', //#fff
    textAlign: 'center',
    borderStyle: 'solid',
    borderColor: '#c9c9c9',
    borderWidth: '2px',
    fontSize: '60px',
    paddingTop:'15rem',
    paddingBottom: '15rem',
    margin: '1rem 55rem 0rem 1rem',
}

const projectStyle = {
    textAlign: 'center',
    textDecoration: 'none',
    color: '#ffffff',
  }