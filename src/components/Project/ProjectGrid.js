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
import { Button} from "react-bootstrap";
import MiniProject from '../Home/MiniProject';
import AddActivity from './AddActivity';
import MiniActivity from '../Activity/MiniActivity';

class ProjectGrid extends Component {

  constructor(props) {
    super(props);

    if(props.state.isEditMode) {
      this.state = {
        startDate: new Date(),
        endDate: new Date(),
        description: "",
        activities: [],
        maxUsers: 0,
        submit: "Save"
      };
      
    } else {
      this.state = {
        isEditMode: props.state.isEditMode,
        startDate: props.state.startDate,
        endDate: props.state.endDate,
        description: props.state.description,
        activities: props.state.activities,
        maxUsers: props.state.maxUsers,
        submit: "Join",
        id: props.state.id
      };
    }
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
  handleChangeMaxUsers = event => {
    event.preventDefault();
    this.setState({maxUsers:event.target.value})
  }

  handleSave = event => {
    event.preventDefault();
    this.props.callbackParent(this.state);
  }

  onChildActivityAdded(newState) {
    var newArray = this.state.activities.slice();    
    newArray.push(newState);   
    this.setState({activities:newArray})
  }

   render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container className={classes.cont} spacing ={32}>
        <Grid item xs={12}>      
         {/* <Paper className={classes.paper}>*/ }
        <Datepick date={this.state.startDate} label={"Start Date"} callbackParent={(newState) => this.onChildStartDateChanged(newState) }/>
        <Datepick date={this.state.endDate} label={"End Date"} callbackParent={(newState) => this.onChildEndDateChanged(newState) }/>
        <TextField style={maxusersStyle}
          id="standard-number"
          label="Max users"
          defaultValue={this.state.maxUsers}
          onChange={this.handleChangeMaxUsers}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
                 
        </Grid>
  
        <Grid item xs={12} className={classes.descritpion}>
        <OutlinedTextField description={this.state.description} callbackParent={(newState) => this.onChildDescriptionChanged(newState) } />
        </Grid>
  
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>
          <TextField
          id="standard-number"
          label="Max users"
          defaultValue={this.state.maxUsers}
          onChange={this.handleChangeMaxUsers}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
          </Paper>
        </Grid> */}

        <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Banner title={"Activites"}/>
        </Paper>
      </Grid>

      {this.state.activities.map((data) => {
           return <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><MiniActivity activity = {data}/></Paper>
        </Grid>
          })}
                  <Grid  item xs={12} sm={6}>
          <Paper className={classes.paper}><AddActivity projectId = {this.state.id} /></Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <Button style={saveStyle}
                block
                bsSize="large"
                type="submit"
                onClick = {this.handleSave}
              >
                {this.state.submit}
              </Button>
          </Paper>
        </Grid>
        </Grid>
      </div>
    );
  }
}

ProjectGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

const textFieldStyle = {
  marginTop: "auto",
  marginBottom: "auto",
}

const descriptionStyle = {
    maxHeight: '20%',
}

const projectStyle = {
  textAlign: 'center',
  textDecoration: 'none',
  color: '#000',
}

const maxusersStyle = {
  marginLeft: '9.5%',
};

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
    marginLeft:'0.9%',
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


