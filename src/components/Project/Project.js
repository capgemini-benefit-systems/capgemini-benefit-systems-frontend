import React, { Component } from 'react'
import Banner from '../Home/Banner';
import ProjectGrid from './ProjectGrid';


export default class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: "",
          img: "img/defaultImage.jpg",
          date: "",
          description: "",
          activities: []
        };
      }
  render() {
    return (
      <div>
          {console.log(this.state.img)}
        <div> <img src="img/defaultImage.jpg" height="500" style={imgStyle} alt="Project Image"></img></div>
        <ProjectGrid/>

      </div>
    )
  }
}

const imgStyle = {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
    width: '100%',
    maxHeight: '20%',
}
