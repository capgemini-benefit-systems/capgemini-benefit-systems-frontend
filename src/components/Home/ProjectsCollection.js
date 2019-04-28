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

          userService.getProjectsForUser()
          .then(data => {
           this.setState({ myProjects:data })
            },
            error => console.log(error) //this.setState({ error, loading: false })
          );
  }
  render() {
    return (
      <div>
        {console.log('AAAAAAAAA')}
        {console.log(this.state)}
          <ProGrid projects={this.state} />
      </div>
    )
  }
}