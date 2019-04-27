import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import MiniProject from './MiniProject';
// import AddProject from './AddProject';
import Banner from '../Home/Banner';
import OutlinedTextField from './OutlinedTextFields';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react'
import Project from './Project';
import Datepick from './Datepick';
import { NavLink } from 'react-router-dom'
import { Button} from "react-bootstrap";

class ProjectGrid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      description: "",
      activities: [],
    };
  }

   onChildDescriptionChanged(newState) {
    this.setState({ description: newState })
  }

  onChildStartDateChanged(newState) {
    this.setState({ startDate: newState })
  }

  onChildEndDateChanged(newState) {
    this.setState({ endDate: newState })
  }

  handleSave = event => {
    event.preventDefault();
    this.props.callbackParent(this.state);
  }

   render() {
    const { classes } = this.props;
    return (

      <div className={classes.root}>
        <Grid container className={classes.cont} spacing ={32}>
        <Grid item xs={12}>      
         {/* <Paper className={classes.paper}>*/ }

        <Datepick label={"Start Date"} callbackParent={(newState) => this.onChildStartDateChanged(newState) }/>
        <Datepick label={"End Date"} callbackParent={(newState) => this.onChildEndDateChanged(newState) }/>
                 
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
          <Button style={saveStyle}
                block
                bsSize="large"
                type="submit"
                onClick = {this.handleSave}
              >
                Save
              </Button>
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

const saveStyle = {
  background: '#FFFFFF', //#fff
  textAlign: 'center',
  fontSize: '2rem',
  padding:'1rem',
  color: '#696969',
}
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

export default withStyles(styles)(ProjectGrid);


