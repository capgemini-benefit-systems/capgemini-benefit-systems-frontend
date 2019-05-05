import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class AddProject extends Component {

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
      <NavLink style={projectStyle} to={{
                pathname: "/new_project",
                state: {
                  isEditMode: true,
                  title: "",
                  img: "",
                  startDate: new Date(),
                  endDate: new Date(),
                  description: "",
                  activities: []
                }
                }}> {this.state.name} </NavLink>
      </div>
      </header> 
    )
  }
}

const addProjectStyle = {
    background: '',//'#6a6a6a'
    textAlign: 'center',
    padding:'20% 0% 20% 0%',
    fontSize: '3rem',
    height:'100%',
    width:'100%',
}

const projectStyle = {
    textAlign: 'center',
    textDecoration: 'none',
    color: '#000',
  }