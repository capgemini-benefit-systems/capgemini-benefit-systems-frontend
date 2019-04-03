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

      <div style = {addProjectStyle}> 
        <div>
          <NavLink style={projectStyle} exact to="/project"> {this.state.name} </NavLink>
        </div>
      </div> 
    )
  }
}

const addProjectStyle = {
    background: '#6a6a6a', //#fff
    textAlign: 'center',
    borderStyle: 'solid',
    borderColor: '#c9c9c9',
    borderWidth: '2px',
    fontSize: '3rem',
    paddingTop:'10%',
    paddingBottom:'5%',
    margin: '1rem 0rem 0rem 1rem',
    width: '33%',
    height:'66%',
}

const projectStyle = {
    textAlign: 'center',
    textDecoration: 'none',
    color: '#ffffff',
  }