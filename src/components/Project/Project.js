import React, { Component } from 'react'
import Banner from '../Home/Banner';
import ProjectGrid from './ProjectGrid';
import Top5Users from '../Home/Top5Users';
import ProjectNameTextField from './ProjectNameTextField';
import {userService} from '../../service/user.service';
import App from '../../App'

export default class Project extends Component {
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
          id: props.location.state.id
        };
        this.onChildSaveClicked = this.onChildSaveClicked.bind(this)
      }

      componentDidMount() {
      console.log("AAAAAAAAAAa")
      console.log(this.state.id)
      userService.getActivitiesForProject(this.state.id)
      .then(
        projectActivities => {
          console.log(projectActivities)
          this.setState({
            activities: projectActivities,
          })
        }
      )
      }

      onChildNameChanged(newState) {
        this.setState({ title: newState })
      };

      onChildSaveClicked(newState) {
        this.setState({
           description: newState.description,
           startDate: newState.startDate,
           endDate: newState.endDate,
           maxUsers: newState.maxUsers,
         })

         if(this.state.isEditMode) {
          userService.saveNewProject(this.state.title, newState.description, newState.startDate, newState.endDate, this.state.img, newState.maxUsers)
          .then(result => {
            console.log(result)
           this.props.history.push(`/`);
            },
            error => console.log(error) //this.setState({ error, loading: false })
          );
         } else {
          if(localStorage.getItem('user') == null) {
            return
        }
        let user = JSON.parse(localStorage.getItem('user'))
        let userId = parseInt(user.accountId) + 1
          userService.addUserToProject(this.state.id,userId)
          .then(result => {
            console.log(result)
           this.props.history.push(`/`);
            },
            error => console.log(error) //this.setState({ error, loading: false })
          );
         }
      }

  render() {
    return (
      <div>          
        {console.log(this.state)}
        <div style={container}> 
          <img src="img/defaultImage.jpg" height="500" style={imgStyle} alt="Project Image"></img>
          <div style={namePositionStyle}><ProjectNameTextField label={"Project Name"} name={this.state.title} callbackParent={(newState) => this.onChildNameChanged(newState)}/></div>
        </div>
        <ProjectGrid state={this.state} projectProps={this.state} callbackParent={(newState) => this.onChildSaveClicked(newState)} />
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