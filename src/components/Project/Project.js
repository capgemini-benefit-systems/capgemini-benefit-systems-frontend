import React, { Component } from 'react'
import Banner from '../Home/Banner';
import ProjectGrid from './ProjectGrid';
import Top5Users from '../Home/Top5Users';
import  Datebox  from './Datebox';

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
          
        <div style={container}> 
          <img src="img/defaultImage.jpg" height="500" style={imgStyle} alt="Project Image"></img>
          <div style ={position}><Datebox/></div>
        </div>
        <Top5Users/>
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

const container = {
  position: 'relative',
  textAlign: 'center',
  color: 'white',
}

const position = {
  position: 'absolute',
  top: '30%',
  left: '45rem',
  transform: 'translate(-50%, -50%)',
}