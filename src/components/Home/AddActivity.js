import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class AddActivity extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          name: "Add Activity",
        };
      }

  render() {
    return (


      <header style = {addActivityStyle}> 
      <div>
      <NavLink style={activityStyle} exact to="/project"> {this.state.name} </NavLink>
      </div>
      </header> 
    )
  }
}

const addActivityStyle = {
    background: '#6a6a6a', //#fff
    textAlign: 'center',
    borderStyle: 'solid',
    borderColor: '#c9c9c9',
    borderWidth: '2px',
    fontSize: '60px',
    paddingTop:'15rem',
    paddingBottom: '15rem',
    margin: '1rem 55rem 0rem 1rem',
   // marginRight: '55rem',
    //marginLeft: '1rem',
   // marginTop: '1rem',
}

const activityStyle = {
    textAlign: 'center',
    textDecoration: 'none',
    color: '#ffffff',
  }