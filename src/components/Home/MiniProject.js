import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
<<<<<<< HEAD
import { NavLink } from 'react-router-dom'
import Dotdotdot from 'react-dotdotdot'
=======
import { NavLink } from 'react-router-dom';
import Dotdotdot from 'react-dotdotdot';
>>>>>>> origin/master

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
  },
  paper: {
    padding: theme.spacing.unit * 0.1,
    textAlign: 'center',
    color: theme.palette.background,
    
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
      
      >
        <Grid item xs>
          <Paper className={classes.paper}>
            <div style ={photoStyle}>
<<<<<<< HEAD
            <img width='100%' height='100%'
           src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt="new"
      />
=======
              <NavLink style={naviStyle} exact to="/project"><img width="100%" height="100%" src ="http://localhost:8080/api/project/photo"/></NavLink>
>>>>>>> origin/master
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
<<<<<<< HEAD
            <Typography variant="p">
            <Dotdotdot clamp={3}>
            "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer,Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer  "
            </Dotdotdot>
=======
            <Dotdotdot clamp={3}>
            <Typography variant="p">
              {project.description}
>>>>>>> origin/master
            </Typography>
            </Dotdotdot>
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