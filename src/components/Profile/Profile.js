import React, { Component } from 'react'
import Banner from './Banner';
import Progres from './Progres';
import Table from './Table';
export default class Profile extends Component {

 

  render() {
    return (
        
        <div>
          
          <h1>Suma punktów:</h1>
          <Progres></Progres>
          <Banner></Banner>
          <Table></Table>
        </div>
        
    )
  }
}

