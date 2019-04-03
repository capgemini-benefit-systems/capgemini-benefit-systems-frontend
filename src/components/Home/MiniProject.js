import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
  },
  paper: {
    padding: theme.spacing.unit * 0.1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },
  desc: {
    padding: theme.spacing.unit * 0.1,
    textAlign: 'center',
    color: theme.palette.text.secondary,

    
  },
  cont: {
    width: '33%',
    padding: '1rem 1rem 1rem 1rem',

  },
});

function AutoGrid(props) {
  const { classes } = props;
  const project  = props.props
  return (
    <div className={classes.root}>
      <Grid container 
      className={classes.cont}
      direction="column"
      wrap="nowrap"
      >
        <Grid item xs>
          <Paper className={classes.paper}>
            <div style ={photoStyle}>
              <NavLink style={naviStyle} exact to="/project"><img src ={project.photo}/></NavLink>
            </div>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <NavLink style={naviStyle} exact to="/project"><Typography variant="h4">{project.name}</Typography></NavLink>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Typography variant="h5" >Liczba Miejsc: {project.actualUsers}/{project.maxUsers}</Typography>
          <NavLink style={naviStyle} exact to="/project"></NavLink>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.desc}>
            <Typography noWrap variant="p">
              {project.description}
            </Typography>
            <NavLink style={naviStyle} exact to="/project"></NavLink>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const photoStyle = {
    background: '#6a6a6a',
    height:'20rem',

}
const naviStyle = {
  textDecoration: 'none',
  color: '#ffffff',
  width: '33%',
}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);