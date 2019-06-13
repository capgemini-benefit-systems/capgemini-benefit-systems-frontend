import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import MiniProject from './MiniProject';
// import AddProject from './AddProject';
import Banner from '../Home/Banner';
import OutlinedTextField from '../Project/OutlinedTextFields';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react'
import Datepick from '../Project/Datepick';
import { Button} from "react-bootstrap";
import MiniProject from '../Home/MiniProject';

class ActivityGrid extends Component {

  constructor(props) {
    super(props);

    if(props.state.isEditMode) {
      this.state = {
        startDate: new Date(),
        endDate: new Date(),
        description: "",
        activities: [],
        maxUsers: 0,
        submit: "Save",
        points: 0
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
        points: props.state.points
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

  handleChangePoints = event => {
    event.preventDefault();
    this.setState({points:event.target.value})
  }

  handleSave = event => {
    event.preventDefault();
    this.props.callbackParent(this.state);
  }

   render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      {console.log(this.state)}
        <Grid container className={classes.cont} spacing ={32}>
        <Grid item xs={12}>      
         {/* <Paper className={classes.paper}>*/ }
         <div style = {bannerStyle}> 
        <Datepick date={this.state.startDate} label={"Start Date"} callbackParent={(newState) => this.onChildStartDateChanged(newState) }/>
        </div>
        <div style = {bannerStyle}>
        <Datepick date={this.state.endDate} label={"End Date"} callbackParent={(newState) => this.onChildEndDateChanged(newState) }/>
        </div>
        <div style = {bannerStyle}>
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
        </div>
        <div style = {bannerStyle}>       
        <TextField style={maxusersStyle}
          id="standard-number"
          label="Points"
          defaultValue={this.state.points}
          onChange={this.handleChangePoints}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        </div>
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
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <TextField
          id="standard-number"
          label="Points"
          defaultValue={this.state.points}
          onChange={this.handleChangePoints}
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

ActivityGrid.propTypes = {
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
 // marginLeft: '9.5%',
}

const saveStyle = {
  background: '#FFFFFF', //#fff
  textAlign: 'center',
  fontSize: '2rem',
  padding:'1rem',
  color: '#696969',
}

const bannerStyle = {
  background: '#FBFBFB', //#fff
  textAlign: 'center',

 // padding:'1rem',
  marginBottom: '10px',
  color: '#696969',
  borderRadius: '5px',
 boxShadow: '3px 1px 17px -9px rgba(0,0,0,0.75)',

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

export default withStyles(styles)(ActivityGrid);


