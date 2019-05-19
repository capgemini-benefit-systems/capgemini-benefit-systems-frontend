import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from './Table';
import ProfileData from './ProfileData';
import Banner from '../Home/Banner';
import { userService } from '../../service/user.service';
const styles = theme => ({
  root: {
    flexGrow: 1,

  },
  
  paper: {
    padding: theme.spacing.unit * 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100%',
    height: '100%',
    marginLeft:'0%',
    backgroundColor: '#fafafa',
    borderColor: '#fafafa',
  },
  cont: {
    width: '75%',
    padding: '1rem 1rem 1rem 1rem',

  },
  fonting: {
    backgroundColor: '#ffffff',
    color: 'black',
    padding: '1rem 0rem 1rem 0rem',
    variant: 'overline',
  },
});
export default class Profile extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      points: "",
      currPoints:"",
      name: "",
      surname: "",
      activeProjects: [],
      historyProjects: [],
    };
  }
  componentDidMount() {
    if(localStorage.getItem('user') == null) {
      return
  }
  let user = JSON.parse(localStorage.getItem('user'))
  let userId = parseInt(user.accountId) + 1
    userService.getUser(userId)
    .then(
      user => {
        this.setState({
          name: user.name,
          surname: user.surname,
          points: user.pointsSum,
          currPoints: user.currentPoints
        })
      }
    )

  }

  render() {
    return ( 
        <div>
        <Grid container spacing ={32}>
          <Grid item xs={12}>
            <ProfileData 
            name={this.state.name} 
            surname={this.state.surname}
            points={this.state.points}
            />
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <Banner title={"All Projects"}/>
            <Paper/>
        </Paper>
          </Grid>
        
      </Grid>
      </div>
        
    )
  }
}

