import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header style = {headerStyle}>
        <h3>Benefit Systems</h3>
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
