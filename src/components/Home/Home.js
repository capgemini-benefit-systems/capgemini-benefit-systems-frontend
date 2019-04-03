import React, { Component } from 'react';
import Top5Users from './Top5Users';
import Banner from './Banner';
import AddProject from './AddProject';

export default class Home extends Component {
  render() {
    return (
      <div>
         <Top5Users/>
         <Banner/>
         <AddProject/>
      </div>
    )
  }
}
