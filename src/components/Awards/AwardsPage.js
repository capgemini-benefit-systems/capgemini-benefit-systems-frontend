import React, { Component } from 'react';

import {userService} from '../../service/user.service';
import AwardsTable from './AwardsTable';


export default class AwardsPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      awards: []
    };
  }

  componentDidMount() {
    userService.getAllAwards()
          .then(data => {
          data.sort((a,b) => (a.cost - b.cost));
          //data.reverse();
          console.log(data);
           this.setState({ awards:data })
           console.log([data[1].name])
          }
    )
  }

  render() {
    return (
      <div >
        <AwardsTable  awards={this.state.awards}/>         
      </div>
    )
  }
}
