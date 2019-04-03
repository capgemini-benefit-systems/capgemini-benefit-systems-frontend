import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Banner extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          name: "Wszystkie Projekty",
        };
      }

  render() {
    return (
        <header style = {bannerStyle}>    
        <div>
        {this.state.name}
        </div>
        </header>
    )
  }
}

const bannerStyle = {
    background: '#FFFFFF', //#fff
    textAlign: 'center',
    borderStyle: 'solid',
    borderColor: '#c9c9c9',
    borderWidth: '2px',
    fontSize: '2rem',
    padding:'2rem',
    margin: '2rem 0rem 0rem 1rem',
    width: '68%',
    //marginRight: '25rem',
    //marginLeft: '1rem',
}

const projectStyle = {
    textDecoration: 'none',
    color: 'black',
  }