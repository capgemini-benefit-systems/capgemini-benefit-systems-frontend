import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MiniProject from './MiniProject';
import AddProject from './AddProject';

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
});

function CenteredGrid(props) {
  const { classes } = props;
  const projects = props.props;
  return (
    <div className={classes.root}>
      <Grid container className={classes.cont} spacing ={32}>

      {projects.map((data) => {
           return <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><MiniProject props = {data}/></Paper>
        </Grid>
          })}
        <Grid  item xs={12} sm={6}>
          <Paper className={classes.paper}><AddProject/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);