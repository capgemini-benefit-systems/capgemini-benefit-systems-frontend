import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import MiniProject from './MiniProject';
// import AddProject from './AddProject';
import Banner from '../Home/Banner';
import OutlinedTextField from './OutlinedTextFields';
import TextField from '@material-ui/core/TextField';
//import Calendar from 'react-input-calendar'
import React, { Component } from 'react'
import Project from './Project';
import Datepick from './Datepick';
import { NavLink } from 'react-router-dom'
import Calendar from 'react-input-calendar'


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
  descritpion: {
    padding: theme.spacing.unit * 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100%',
    height: '500px',
    marginLeft:'0%',
    backgroundColor: '#fafafa',
    borderColor: '#fafafa',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class ProjectGrid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: "",
      description: "",
      activities: []
    };
  }

   onChildDescriptionChanged(newState) {
    this.setState({ description: newState })
  }

   render() {
    const { classes } = this.props;
    return (

      <div className={classes.root}>
        <Grid container className={classes.cont} spacing ={32}>
        <Grid item xs={12}>      
         {/* <Paper className={classes.paper}>*/ }
          
          
          <TextField
            id="standard-uncontrolled"
            label="Add Date"
            defaultValue=""
            className={classes.textField}
            margin="normal"
            />
          
          
        
          
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <NavLink style={projectStyle} exact to="/new_project">
            <Banner title={'Sign up'}/>
          </NavLink>
          </Paper>
        </Grid>
  
        <Grid item xs={12} className={classes.descritpion}>
        <OutlinedTextField callbackParent={(newState) => this.onChildDescriptionChanged(newState) } />
        </Grid>
  
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <NavLink style={projectStyle} exact to="/new_project">
            <Banner title={'Save'}/>
          </NavLink>
          </Paper>
        </Grid>
        
        {/* {projects.map((data) => {
             return <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}><MiniProject props = {data}/></Paper>
          </Grid>
            })}
          <Grid  item xs={12} sm={6}>
            <Paper className={classes.paper}><AddProject/></Paper>
          </Grid> */}
        </Grid>
      </div>
    );
  }
}

ProjectGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

const descriptionStyle = {
    maxHeight: '20%',
}

const projectStyle = {
  textAlign: 'center',
  textDecoration: 'none',
  color: '#000',
}

export default withStyles(styles)(ProjectGrid);


