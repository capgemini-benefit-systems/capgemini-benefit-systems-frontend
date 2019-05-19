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
           
        <div style = {bannerStyle}>
        {this.props.title}
        </div>
        
    )
  }
}

const bannerStyle = {
    background: '#FFFFFF', //#fff
    textAlign: 'center',
    fontSize: '2rem',
    padding:'1rem',
    color: '#696969',

   /*
    borderWidth: '2px',
    margin: '2rem 0rem 0rem 1rem',
    width: '100%',
    //marginRight: '25rem',
    //marginLeft: '1rem',*/
}
/*
const projectStyle = {
    textDecoration: 'none',
    color: 'black',
  }
*/