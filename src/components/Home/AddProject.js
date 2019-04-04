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
    height:'96%',
    margin: '0% 67.5% 0% 0%',
    width:'100%',
}

const projectStyle = {
    textAlign: 'center',
    textDecoration: 'none',
    color: '#000',
    
  }