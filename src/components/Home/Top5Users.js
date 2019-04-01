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
        fetch('http://172.20.10.3:8080/api/account/all',{
          method: 'get',
        dataType: 'json',
        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
        }
        })
          .then(response => {
            console.log(response.clone().json())
            if (response.ok) {
              return response.json()
            } else {
              console.log("RESPONSE NOT OK")
            }
            // var ausers = JSON.parse(response.clone().json())
            // console.log("users:")
            // console.log(ausers)
            
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