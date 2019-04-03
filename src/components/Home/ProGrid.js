import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MiniProject from './MiniProject';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width:'',
  },
  cont: {
    width: '74.5%',
    padding: '1rem 1rem 1rem 1rem',

  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container className={classes.cont} spacing ={12}>
        <Grid item xs={6}>
          <Paper className={classes.paper}><MiniProject/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><MiniProject/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><MiniProject/></Paper>
        </Grid>
     
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);