import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import Dotdotdot from 'react-dotdotdot';
import { Link } from 'react-router-dom'

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
  const activity  = props.activity
  
  return (
    <div className={classes.root}>
      <Grid item md
      className={classes.cont}
      direction="column"
      wrap="nowrap"
      >
        <Grid item xs>
            <div style ={photoStyle}>
              <Link style={naviStyle}  to={{
                pathname: "/activity",
                state: {
                  isEditMode: false,
                  title: activity.name,
                  img: activity.img,
                  startDate: activity.startDate,
                  endDate: activity.endDate,
                  description: activity.description,
                  maxUsers: activity.maxUsers,
                  points: activity.points,
                  id: activity.id,
                }
            }}><img width="100%" height="100%" src ="http://localhost:8080/api/activity/1/photo"/></Link>
            </div>
        </Grid>
        
        <Grid item xs>
            <Link style={naviStyle}  to={{
                pathname: "/activity",
                state: {
                  isEditMode: false,
                  title: activity.name,
                  img: activity.img,
                  startDate: activity.startDate,
                  endDate: activity.endDate,
                  description: activity.description,
                  maxUsers: activity.maxUsers,
                  points: activity.points,
                  id: activity.id
                }
                }}><Typography variant="h4">{activity.name}</Typography></Link>
        </Grid>
        <Grid item xs >
          <Typography variant="h5" >Liczba Miejsc: {activity.actualUsers}/{activity.maxUsers}</Typography>
          <Link style={naviStyle} to={{
                pathname: "/activity",
                state: {
                  isEditMode: false,
                  title: activity.name,
                  img: activity.img,
                  startDate: activity.startDate,
                  endDate: activity.endDate,
                  description: activity.description,
                  maxUsers: activity.maxUsers,
                  points: activity.points,
                  id: activity.id
                }
                }}>></Link>
        </Grid>
        <Grid item  xs>
            <Dotdotdot clamp={3}>
            <Typography variant="p">
              {activity.description}
            </Typography>
            </Dotdotdot>
            <NavLink style={naviStyle} to={{
                pathname: "/activity",
                state: {
                  isEditMode: false,
                  title: activity.name,
                  img: activity.img,
                  startDate: activity.startDate,
                  endDate: activity.endDate,
                  description: activity.description,
                  maxUsers: activity.maxUsers,
                  points: activity.points,
                  id: activity.id
                }
                }}></NavLink>
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