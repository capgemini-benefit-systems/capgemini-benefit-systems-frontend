import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import Dotdotdot from 'react-dotdotdot';

const styles = theme => ({
  root: {
    flexGrow: 1,
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
    width: '100%',
    padding: '1rem 1rem 1rem 1rem',

  },
});

function ComplexGrid(props) {
  const { classes } = props;
  const project  = props.props
  return (
    <div className={classes.root}>
      <Grid item md
      className={classes.cont}
      direction="column"
      wrap="nowrap"
      >
        <Grid item xs>
            <div style ={photoStyle}>
              <NavLink style={naviStyle} exact to="/project"><img width="100%" height="100%" src ="http://localhost:8080/api/project/photo"/></NavLink>
            </div>
        </Grid>
        
        <Grid item xs>
            <NavLink style={naviStyle} exact to="/project"><Typography variant="h4">{project.name}</Typography></NavLink>
        </Grid>
        <Grid item xs >
          <Typography variant="h5" >Liczba Miejsc: {project.actualUsers}/{project.maxUsers}</Typography>
          <NavLink style={naviStyle} exact to="/project"></NavLink>
        </Grid>
        <Grid item  xs>
            <Dotdotdot clamp={3}>
            <Typography variant="p">
              {project.description}
            </Typography>
            </Dotdotdot>
            <NavLink style={naviStyle} exact to="/project"></NavLink>
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

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexGrid);