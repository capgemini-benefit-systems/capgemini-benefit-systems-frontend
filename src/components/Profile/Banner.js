import React, { Component } from 'react'


export default class Banner extends Component {

    constructor(props) {
        super(props);

        this.state = {
          name: "Historia",
        };
      }


  render() {
    return (
        <header style = {bannerStyle}>    
        <div>
          <a> {this.state.name} </a>   
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
    margin: '2rem 25rem 0rem 1rem',
    //marginRight: '25rem',
    //marginLeft: '1rem',
}

