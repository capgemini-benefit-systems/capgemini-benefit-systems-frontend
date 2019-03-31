import React, { Component } from 'react'
import CustomizedTable from '../CustomizedTable';

export default class Top5Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
          users: [{
              name: "",
              place: "",
              img: "",
              points: ""
          }]
        };
      }
    
      componentDidMount() {
        fetch('localhost:8080/api/user')
          .then(response => {
            const users = response.json()
            this.setState({ users })
          })
          .catch(err => {
            this.setState({ users: [{
                name: "Jakub Dereń",
                place: "1",
                img: "",
                points: "5092"
            },
            {
              name: "Kacper Jaros",
              place: "2",
              img: "",
              points: "1415"
          },
          {
              name: "Grzegorz Tomasik",
              place: "3",
              img: "",
              points: "415"
          }]})
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