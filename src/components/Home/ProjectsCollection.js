import React, { Component } from 'react'
import ProGrid from './ProGrid';
import {userService} from '../../service/user.service';

export default class ProjectsCollection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      myProjects: [],
    };
  }

  componentDidMount() {
    userService.getAllProjects()
          .then(data => {
           this.setState({ projects:data })
            },
            error => console.log(error) //this.setState({ error, loading: false })
          );
    if(localStorage.getItem('user') == null) {
        return
    }
    let user = JSON.parse(localStorage.getItem('user'))
    let userId = parseInt(user.accountId) + 1
    userService.getProjectsForUser(userId)
    .then(data => {
      this.setState({ myProjects:data })
      },
      error => console.log(error) //this.setState({ error, loading: false })
    );
  }
  render() {
    return (
      <div>
          <ProGrid projects={this.state} />
      </div>
    )
  }
}