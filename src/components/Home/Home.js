import React, { Component } from 'react';
import CustomizedTable from '../CustomizedTable';
import Top5Users from './Top5Users';

export default class Home extends Component {
  render() {
    return (
      <div>
         <Top5Users/>
      </div>
    )
  }
}
