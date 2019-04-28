import React, { Component } from 'react'
import Banner from '../Home/Banner';
import ProjectGrid from './ProjectGrid';
import Top5Users from '../Home/Top5Users';
import ProjectNameTextField from './ProjectNameTextField';
import {userService} from '../../service/user.service';

export default class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: "",
          img: "img/defaultImage.jpg",
          startDate: "",
          endDate: "",
          description: "",
          activities: []
        };
        this.onChildSaveClicked = this.onChildSaveClicked.bind(this)
      }

      onChildNameChanged(newState) {
        this.setState({ title: newState })
      };

      onChildSaveClicked(newState) {
        // this.state.description = newState.description
        // this.state.startDate = newState.startDate
        // this.state.endDate = newState.endDate
        this.setState({
           description: newState.description,
           startDate: newState.startDate,
           endDate: newState.endDate,
         })
         console.log(this.state.title)
         console.log(newState.description)
         userService.saveNewProject(this.state.title, newState.description, newState.startDate, newState.endDate, this.state.img)
        .then(result => {
          console.log(result)
          },
          error => console.log(error) //this.setState({ error, loading: false })
        );
      }

  render() {
    return (
      <div>          
        <div style={container}> 
          <img src="img/defaultImage.jpg" height="500" style={imgStyle} alt="Project Image"></img>
          <div style={namePositionStyle}><ProjectNameTextField callbackParent={(newState) => this.onChildNameChanged(newState)}/></div>
        </div>
        <Top5Users/>
        <ProjectGrid callbackParent={(newState) => this.onChildSaveClicked(newState)} />
        

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

const namePositionStyle = {
  position: 'absolute',
  top: '30%',
  marginLeft: '20rem',
  transform: 'translate(-50%, -50%)',
}