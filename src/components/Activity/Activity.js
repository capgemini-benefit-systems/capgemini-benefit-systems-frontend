import React, { Component } from 'react'
import Banner from '../Home/Banner';
import ProjectGrid from './ActivityGrid';
import Top5Users from '../Home/Top5Users';
import ProjectNameTextField from '../Project/ProjectNameTextField';
import {userService} from '../../service/user.service';
import ActivityGrid from './ActivityGrid';
import App from '../../App'
import SignedUsersTable from '../SignedUsersTable';

export default class Activity extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isEditMode: props.location.state.isEditMode,
          title: props.location.state.title,
          img: props.location.state.img,
          startDate: props.location.state.startDate,
          endDate: props.location.state.endDate,
          description: props.location.state.description,
          activities: props.location.state.activities,
          maxUsers: props.location.state.maxUsers,
          id: props.location.state.id,
          points: props.location.state.points,
          projectId: props.location.state.projectId,
        };
        this.onChildSaveClicked = this.onChildSaveClicked.bind(this)
      }

      onChildNameChanged(newState) {
        this.setState({ title: newState })
      };

      onChildSaveClicked(newState) {
        this.setState(()=> ({
          description: newState.description,
          startDate: newState.startDate,
          endDate: newState.endDate,
          maxUsers: newState.maxUsers,
        }))

         if(this.state.isEditMode) {
          userService.saveNewActivity(this.state.title, newState.description, newState.startDate, newState.endDate, this.state.img, newState.maxUsers, newState.points, this.state.projectId)
          .then(result => {
            console.log(result)
            this.props.history.goBack();
            },
            error => console.log(error) 
          );
         } else {
          let user = JSON.parse(localStorage.getItem('user'))
          let userId = parseInt(user.accountId) + 1
          userService.getUsersForProject(this.state.projectId)
            .then(data =>{
              var isInProject
              if(data != undefined) {
                isInProject = data.filter( val => {
                  return parseInt(val.id) == userId
                })
              }
              else {
                isInProject = 0
              }
              if (isInProject.length > 0) {
                userService.addUserToActivity(this.state.id, userId)
                .then(result => {
                  console.log(result)
                  this.props.history.goBack();
                  },
                  error => console.log(error) 
                );
              }
            },
            error=> console.log(error))
         }
      }

  render() {
    console.log(this.state.id)
    return (
      <div>          
        <div style={container}> 
          <img src="img/defaultImage.jpg" height="500" style={imgStyle} alt="Project Image"></img>
          <div style={namePositionStyle}><ProjectNameTextField label={"Activity Name"} name={this.state.title} callbackParent={(newState) => this.onChildNameChanged(newState)}/></div>
        </div>
        <SignedUsersTable activityId={this.state.id} isActivity={true}/>
        <ActivityGrid state={this.state} projectProps={this.state} callbackParent={(newState) => this.onChildSaveClicked(newState)} />
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