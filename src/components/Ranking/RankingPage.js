import React, { Component } from 'react';
import Ranking from './Ranking';


export default class RankingPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    fetch('http://localhost:8080/api/user/all',{
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
        console.log(data)
        this.setState({ users:data })
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  render() {
    return (
      <div>
          <Ranking />
      </div>
    )
  }
}