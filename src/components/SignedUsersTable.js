import React, { Component } from 'react'
import CustomizedTable from './CustomizedTable';
import {userService} from '../service/user.service'

export default class SignedUsersTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
          users: []
        };
      }

      componentDidMount() {
          if(this.props.isActivity == true) {
            userService.getUsersForActivity(this.props.activityId)
            .then(data =>{
              this.setState({ users:data })
            })
            .catch(err => {
              console.log(err)
            })
          } else {
            userService.getUsersForProject(this.props.projectId)
            .then(data =>{
              this.setState({ users:data })
            })
            .catch(err => {
              console.log(err)
            })
          }
      }
      
  render() {
    return (
      <div style={tableStyle}>
        <CustomizedTable users={this.state.users}/>
      </div>
    )
  }
}

const tableStyle = {
    float: 'right',
    width: '25%',
    margin: '1rem, 1rem, 1rem, 1rem',
    position: '-webkit-sticky',
    position: 'sticky',
    top: '4.2rem',
}
