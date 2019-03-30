import React, { Component } from 'react'

export default class UserCell extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          ranking: "1.",
          image: "",
          name: "Jakub Dereń",
          points: "8532"
        };
      }
  render() {
    return (
      <div>
        {this.state.ranking} {this.state.image} {this.state.name} {this.state.points}
      </div>
    )
  }
}
