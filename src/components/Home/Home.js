import React, { Component } from 'react';
import Top5Users from './Top5Users';
import ProjectsCollection from './ProjectsCollection';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Top5Users/>
        <ProjectsCollection/>
      </div>
    )
  }
}
