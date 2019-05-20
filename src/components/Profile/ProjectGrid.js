import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MinimizeProject from './MinimizeProject';

const styles = theme => ({
  root: {
    flexGrow: 1,

  },
  

});

function CenteredGrid(props) {
  const { classes } = props;
  const myProjects = props.myProjects;
  console.log(myProjects);
  return (
    
    <div className={classes.root}>
    
      <Grid container  spacing ={32}>
        
      {myProjects.map((data) => {
           return <Grid item xs={6} sm={3}>
          <Paper ><MinimizeProject project = {data}/></Paper>
        </Grid>
          })}
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);