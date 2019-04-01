import React, { Component } from 'react'
import CustomizedTable from '../CustomizedTable';

export default class Top5Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
          users: []
        };
      }

      componentDidMount() {
        fetch('http://localhost:8080/api/user/top5',{
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
            this.setState({ users:data })
          })
          .catch(err => {
            console.log(err)
          })
      }
      

      
  render() {
    return (
      <div style={tableStyle}>
        <CustomizedTable props={this.state.users}/>
      </div>
    )
  }
}

const tableStyle = {
    float: 'right',
    width: '25%',
    margin: '1rem'
}