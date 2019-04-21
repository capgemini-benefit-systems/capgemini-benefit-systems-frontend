import React, { Component } from 'react'
import MiniProject from './MiniProject';
import ProGrid from './ProGrid';

export default class ProjectsCollection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/project/all',{
      method: 'get',
    dataType: 'json',
    headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
    }
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } 
      })
      .then(data =>{
        this.setState({ projects:data })
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div>
          <ProGrid projects={this.state.projects} />
      </div>
    )
  }
}