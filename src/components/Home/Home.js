import React, { Component } from 'react';
import Top5Users from './Top5Users';
import Banner from './Banner';
import AddProject from './AddProject';
import MiniatureProject from './MiniatureProject';
import MiniProject from './MiniProject';
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Top5Users/>
        <Banner/>
        <MiniProject/>
      </div>
    )
  }
}
